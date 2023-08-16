import { c as createEvents, e as extend, u as useMutableCallback, b as createRoot, E as ErrorBoundary, B as Block, d as unmountComponentAtNode } from '../../dist/index-76c68185.esm.js';
export { t as ReactThreeFiber, w as _roots, v as act, o as addAfterEffect, n as addEffect, p as addTail, m as advance, j as applyProps, f as context, c as createEvents, g as createPortal, b as createRoot, k as dispose, e as extend, q as flushGlobalEffects, s as getRootState, l as invalidate, h as reconciler, r as render, d as unmountComponentAtNode, A as useFrame, C as useGraph, x as useInstanceHandle, D as useLoader, y as useStore, z as useThree } from '../../dist/index-76c68185.esm.js';
import _extends from '@babel/runtime/helpers/esm/extends';
import * as React from 'react';
import * as THREE from 'three';
import { PixelRatio, View, StyleSheet } from 'react-native';
import { GLView } from 'expo-gl';
import { FiberProvider, useContextBridge } from 'its-fine';
import Pressability from 'react-native/Libraries/Pressability/Pressability';
import 'react-reconciler/constants';
import 'zustand';
import 'react-reconciler';
import 'scheduler';
import 'suspend-react';

/* eslint-enable import/default, import/no-named-as-default, import/no-named-as-default-member */

const EVENTS = {
  PRESS: 'onPress',
  PRESSIN: 'onPressIn',
  PRESSOUT: 'onPressOut',
  LONGPRESS: 'onLongPress',
  HOVERIN: 'onHoverIn',
  HOVEROUT: 'onHoverOut',
  PRESSMOVE: 'onPressMove'
};
const DOM_EVENTS = {
  [EVENTS.PRESS]: 'onClick',
  [EVENTS.PRESSIN]: 'onPointerDown',
  [EVENTS.PRESSOUT]: 'onPointerUp',
  [EVENTS.LONGPRESS]: 'onDoubleClick',
  [EVENTS.HOVERIN]: 'onPointerOver',
  [EVENTS.HOVEROUT]: 'onPointerOut',
  [EVENTS.PRESSMOVE]: 'onPointerMove'
};

/** Default R3F event manager for react-native */
function createTouchEvents(store) {
  const {
    handlePointer
  } = createEvents(store);
  const handleTouch = (event, name) => {
    event.persist()

    // Apply offset
    ;
    event.nativeEvent.offsetX = event.nativeEvent.locationX;
    event.nativeEvent.offsetY = event.nativeEvent.locationY;

    // Emulate DOM event
    const callback = handlePointer(DOM_EVENTS[name]);
    return callback(event.nativeEvent);
  };
  return {
    priority: 1,
    enabled: true,
    compute(event, state, previous) {
      // https://github.com/pmndrs/react-three-fiber/pull/782
      // Events trigger outside of canvas when moved, use offsetX/Y by default and allow overrides
      state.pointer.set(event.offsetX / state.size.width * 2 - 1, -(event.offsetY / state.size.height) * 2 + 1);
      state.raycaster.setFromCamera(state.pointer, state.camera);
    },
    connected: undefined,
    handlers: Object.values(EVENTS).reduce((acc, name) => ({
      ...acc,
      [name]: event => handleTouch(event, name)
    }), {}),
    update: () => {
      var _internal$lastEvent;
      const {
        events,
        internal
      } = store.getState();
      if ((_internal$lastEvent = internal.lastEvent) != null && _internal$lastEvent.current && events.handlers) events.handlers.onPointerMove(internal.lastEvent.current);
    },
    connect: () => {
      const {
        set,
        events
      } = store.getState();
      events.disconnect == null ? void 0 : events.disconnect();
      const connected = new Pressability(events.handlers);
      set(state => ({
        events: {
          ...state.events,
          connected
        }
      }));
      const handlers = connected.getEventHandlers();
      return handlers;
    },
    disconnect: () => {
      const {
        set,
        events
      } = store.getState();
      if (events.connected) {
        events.connected.reset();
        set(state => ({
          events: {
            ...state.events,
            connected: undefined
          }
        }));
      }
    }
  };
}

// Check if expo-asset is installed (available with expo modules)
let expAsset;
try {
  var _require;
  expAsset = (_require = require('expo-asset')) == null ? void 0 : _require.Asset;
} catch (_) {}

/**
 * Generates an asset based on input type.
 */
function getAsset(input) {
  switch (typeof input) {
    case 'string':
      return expAsset.fromURI(input);
    case 'number':
      return expAsset.fromModule(input);
    default:
      throw new Error('R3F: Invalid asset! Must be a URI or module.');
  }
}
let injected = false;
function polyfills() {
  if (!expAsset || injected) return;
  injected = true;

  // Don't pre-process urls, let expo-asset generate an absolute URL
  const extractUrlBase = THREE.LoaderUtils.extractUrlBase.bind(THREE.LoaderUtils);
  THREE.LoaderUtils.extractUrlBase = url => typeof url === 'string' ? extractUrlBase(url) : './';

  // There's no Image in native, so create a data texture instead
  const prevTextureLoad = THREE.TextureLoader.prototype.load;
  THREE.TextureLoader.prototype.load = function load(url, onLoad, onProgress, onError) {
    const texture = new THREE.Texture();

    // @ts-ignore
    texture.isDataTexture = true;
    getAsset(url).downloadAsync().then(asset => {
      texture.image = {
        data: asset,
        width: asset.width,
        height: asset.height
      };
      texture.flipY = true;
      texture.unpackAlignment = 1;
      texture.needsUpdate = true;
      onLoad == null ? void 0 : onLoad(texture);
    }).catch(onError);
    return texture;
  };

  // Fetches assets via XMLHttpRequest
  const prevFileLoad = THREE.FileLoader.prototype.load;
  THREE.FileLoader.prototype.load = function (url, onLoad, onProgress, onError) {
    if (this.path) url = this.path + url;
    const request = new XMLHttpRequest();
    getAsset(url).downloadAsync().then(asset => {
      request.open('GET', asset.uri, true);
      request.addEventListener('load', event => {
        if (request.status === 200) {
          onLoad == null ? void 0 : onLoad(request.response);
          this.manager.itemEnd(url);
        } else {
          onError == null ? void 0 : onError(event);
          this.manager.itemError(url);
          this.manager.itemEnd(url);
        }
      }, false);
      request.addEventListener('progress', event => {
        onProgress == null ? void 0 : onProgress(event);
      }, false);
      request.addEventListener('error', event => {
        onError == null ? void 0 : onError(event);
        this.manager.itemError(url);
        this.manager.itemEnd(url);
      }, false);
      request.addEventListener('abort', event => {
        onError == null ? void 0 : onError(event);
        this.manager.itemError(url);
        this.manager.itemEnd(url);
      }, false);
      if (this.responseType) request.responseType = this.responseType;
      if (this.withCredentials) request.withCredentials = this.withCredentials;
      for (const header in this.requestHeader) {
        request.setRequestHeader(header, this.requestHeader[header]);
      }
      request.send(null);
      this.manager.itemStart(url);
    });
    return request;
  };

  // Cleanup function
  return () => {
    THREE.LoaderUtils.extractUrlBase = extractUrlBase;
    THREE.TextureLoader.prototype.load = prevTextureLoad;
    THREE.FileLoader.prototype.load = prevFileLoad;
  };
}

/**
 * A native canvas which accepts threejs elements as children.
 * @see https://docs.pmnd.rs/react-three-fiber/api/canvas
 */
const CanvasImpl = /*#__PURE__*/React.forwardRef(({
  children,
  style,
  gl,
  events = createTouchEvents,
  shadows,
  linear,
  flat,
  legacy,
  orthographic,
  frameloop,
  performance,
  raycaster,
  camera,
  onPointerMissed,
  onCreated,
  ...props
}, forwardedRef) => {
  // Create a known catalogue of Threejs-native elements
  // This will include the entire THREE namespace by default, users can extend
  // their own elements by using the createRoot API instead
  React.useMemo(() => extend(THREE), []);
  const Bridge = useContextBridge();
  const [{
    width,
    height,
    top,
    left
  }, setSize] = React.useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  const [canvas, setCanvas] = React.useState(null);
  const [bind, setBind] = React.useState();
  React.useImperativeHandle(forwardedRef, () => viewRef.current);
  const handlePointerMissed = useMutableCallback(onPointerMissed);
  const [block, setBlock] = React.useState(false);
  const [error, setError] = React.useState(undefined);

  // Suspend this component if block is a promise (2nd run)
  if (block) throw block;
  // Throw exception outwards if anything within canvas throws
  if (error) throw error;
  const viewRef = React.useRef(null);
  const root = React.useRef(null);

  // Inject and cleanup RN polyfills if able
  React.useLayoutEffect(() => polyfills(), []);
  const onLayout = React.useCallback(e => {
    const {
      width,
      height,
      x,
      y
    } = e.nativeEvent.layout;
    setSize({
      width,
      height,
      top: y,
      left: x
    });
  }, []);

  // Called on context create or swap
  // https://github.com/pmndrs/react-three-fiber/pull/2297
  const onContextCreate = React.useCallback(context => {
    const canvasShim = {
      width: context.drawingBufferWidth,
      height: context.drawingBufferHeight,
      style: {},
      addEventListener: () => {},
      removeEventListener: () => {},
      clientHeight: context.drawingBufferHeight,
      getContext: () => context
    };
    root.current = createRoot(canvasShim);
    setCanvas(canvasShim);
  }, []);
  if (root.current && width > 0 && height > 0) {
    root.current.configure({
      gl,
      events,
      shadows,
      linear,
      flat,
      legacy,
      orthographic,
      frameloop,
      performance,
      raycaster,
      camera,
      // expo-gl can only render at native dpr/resolution
      // https://github.com/expo/expo-three/issues/39
      dpr: PixelRatio.get(),
      size: {
        width,
        height,
        top,
        left
      },
      // Pass mutable reference to onPointerMissed so it's free to update
      onPointerMissed: (...args) => handlePointerMissed.current == null ? void 0 : handlePointerMissed.current(...args),
      // Overwrite onCreated to apply RN bindings
      onCreated: state => {
        // Bind events after creation
        const handlers = state.events.connect == null ? void 0 : state.events.connect(viewRef.current);
        setBind(handlers);

        // Bind render to RN bridge
        const context = state.gl.getContext();
        const renderFrame = state.gl.render.bind(state.gl);
        state.gl.render = (scene, camera) => {
          renderFrame(scene, camera);
          context.endFrameEXP();
        };
        return onCreated == null ? void 0 : onCreated(state);
      }
    });
    root.current.render( /*#__PURE__*/React.createElement(Bridge, null, /*#__PURE__*/React.createElement(ErrorBoundary, {
      set: setError
    }, /*#__PURE__*/React.createElement(React.Suspense, {
      fallback: /*#__PURE__*/React.createElement(Block, {
        set: setBlock
      })
    }, children))));
  }
  React.useEffect(() => {
    if (canvas) {
      return () => unmountComponentAtNode(canvas);
    }
  }, [canvas]);
  return /*#__PURE__*/React.createElement(View, _extends({}, props, {
    ref: viewRef,
    onLayout: onLayout,
    style: {
      flex: 1,
      ...style
    }
  }, bind), width > 0 && /*#__PURE__*/React.createElement(GLView, {
    onContextCreate: onContextCreate,
    style: StyleSheet.absoluteFill
  }));
});

/**
 * A native canvas which accepts threejs elements as children.
 * @see https://docs.pmnd.rs/react-three-fiber/api/canvas
 */
const Canvas = /*#__PURE__*/React.forwardRef(function CanvasWrapper(props, ref) {
  return /*#__PURE__*/React.createElement(FiberProvider, null, /*#__PURE__*/React.createElement(CanvasImpl, _extends({}, props, {
    ref: ref
  })));
});

export { Canvas, createTouchEvents as events };
