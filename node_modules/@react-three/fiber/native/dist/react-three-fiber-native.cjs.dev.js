'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('../../dist/index-c307a54a.cjs.dev.js');
var _extends = require('@babel/runtime/helpers/extends');
var React = require('react');
var THREE = require('three');
var reactNative = require('react-native');
var expoGl = require('expo-gl');
var itsFine = require('its-fine');
var Pressability = require('react-native/Libraries/Pressability/Pressability');
require('react-reconciler/constants');
require('zustand');
require('react-reconciler');
require('scheduler');
require('suspend-react');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var THREE__namespace = /*#__PURE__*/_interopNamespace(THREE);
var Pressability__default = /*#__PURE__*/_interopDefault(Pressability);

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
  } = index.createEvents(store);
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
      const connected = new Pressability__default["default"](events.handlers);
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
  const extractUrlBase = THREE__namespace.LoaderUtils.extractUrlBase.bind(THREE__namespace.LoaderUtils);
  THREE__namespace.LoaderUtils.extractUrlBase = url => typeof url === 'string' ? extractUrlBase(url) : './';

  // There's no Image in native, so create a data texture instead
  const prevTextureLoad = THREE__namespace.TextureLoader.prototype.load;
  THREE__namespace.TextureLoader.prototype.load = function load(url, onLoad, onProgress, onError) {
    const texture = new THREE__namespace.Texture();

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
  const prevFileLoad = THREE__namespace.FileLoader.prototype.load;
  THREE__namespace.FileLoader.prototype.load = function (url, onLoad, onProgress, onError) {
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
    THREE__namespace.LoaderUtils.extractUrlBase = extractUrlBase;
    THREE__namespace.TextureLoader.prototype.load = prevTextureLoad;
    THREE__namespace.FileLoader.prototype.load = prevFileLoad;
  };
}

/**
 * A native canvas which accepts threejs elements as children.
 * @see https://docs.pmnd.rs/react-three-fiber/api/canvas
 */
const CanvasImpl = /*#__PURE__*/React__namespace.forwardRef(({
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
  React__namespace.useMemo(() => index.extend(THREE__namespace), []);
  const Bridge = itsFine.useContextBridge();
  const [{
    width,
    height,
    top,
    left
  }, setSize] = React__namespace.useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  const [canvas, setCanvas] = React__namespace.useState(null);
  const [bind, setBind] = React__namespace.useState();
  React__namespace.useImperativeHandle(forwardedRef, () => viewRef.current);
  const handlePointerMissed = index.useMutableCallback(onPointerMissed);
  const [block, setBlock] = React__namespace.useState(false);
  const [error, setError] = React__namespace.useState(undefined);

  // Suspend this component if block is a promise (2nd run)
  if (block) throw block;
  // Throw exception outwards if anything within canvas throws
  if (error) throw error;
  const viewRef = React__namespace.useRef(null);
  const root = React__namespace.useRef(null);

  // Inject and cleanup RN polyfills if able
  React__namespace.useLayoutEffect(() => polyfills(), []);
  const onLayout = React__namespace.useCallback(e => {
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
  const onContextCreate = React__namespace.useCallback(context => {
    const canvasShim = {
      width: context.drawingBufferWidth,
      height: context.drawingBufferHeight,
      style: {},
      addEventListener: () => {},
      removeEventListener: () => {},
      clientHeight: context.drawingBufferHeight,
      getContext: () => context
    };
    root.current = index.createRoot(canvasShim);
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
      dpr: reactNative.PixelRatio.get(),
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
    root.current.render( /*#__PURE__*/React__namespace.createElement(Bridge, null, /*#__PURE__*/React__namespace.createElement(index.ErrorBoundary, {
      set: setError
    }, /*#__PURE__*/React__namespace.createElement(React__namespace.Suspense, {
      fallback: /*#__PURE__*/React__namespace.createElement(index.Block, {
        set: setBlock
      })
    }, children))));
  }
  React__namespace.useEffect(() => {
    if (canvas) {
      return () => index.unmountComponentAtNode(canvas);
    }
  }, [canvas]);
  return /*#__PURE__*/React__namespace.createElement(reactNative.View, _extends({}, props, {
    ref: viewRef,
    onLayout: onLayout,
    style: {
      flex: 1,
      ...style
    }
  }, bind), width > 0 && /*#__PURE__*/React__namespace.createElement(expoGl.GLView, {
    onContextCreate: onContextCreate,
    style: reactNative.StyleSheet.absoluteFill
  }));
});

/**
 * A native canvas which accepts threejs elements as children.
 * @see https://docs.pmnd.rs/react-three-fiber/api/canvas
 */
const Canvas = /*#__PURE__*/React__namespace.forwardRef(function CanvasWrapper(props, ref) {
  return /*#__PURE__*/React__namespace.createElement(itsFine.FiberProvider, null, /*#__PURE__*/React__namespace.createElement(CanvasImpl, _extends({}, props, {
    ref: ref
  })));
});

exports.ReactThreeFiber = index.threeTypes;
exports._roots = index.roots;
exports.act = index.act;
exports.addAfterEffect = index.addAfterEffect;
exports.addEffect = index.addEffect;
exports.addTail = index.addTail;
exports.advance = index.advance;
exports.applyProps = index.applyProps;
exports.context = index.context;
exports.createEvents = index.createEvents;
exports.createPortal = index.createPortal;
exports.createRoot = index.createRoot;
exports.dispose = index.dispose;
exports.extend = index.extend;
exports.flushGlobalEffects = index.flushGlobalEffects;
exports.getRootState = index.getRootState;
exports.invalidate = index.invalidate;
exports.reconciler = index.reconciler;
exports.render = index.render;
exports.unmountComponentAtNode = index.unmountComponentAtNode;
exports.useFrame = index.useFrame;
exports.useGraph = index.useGraph;
exports.useInstanceHandle = index.useInstanceHandle;
exports.useLoader = index.useLoader;
exports.useStore = index.useStore;
exports.useThree = index.useThree;
exports.Canvas = Canvas;
exports.events = createTouchEvents;
