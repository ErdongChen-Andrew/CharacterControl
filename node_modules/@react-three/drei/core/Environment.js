import _extends from '@babel/runtime/helpers/esm/extends';
import * as React from 'react';
import { useThree, useFrame, createPortal, extend } from '@react-three/fiber';
import { Scene, WebGLCubeRenderTarget, HalfFloatType } from 'three';
import { GroundProjectedEnv } from 'three-stdlib';
import { useEnvironment } from './useEnvironment.js';

const isRef = obj => obj.current && obj.current.isScene;

const resolveScene = scene => isRef(scene) ? scene.current : scene;

function setEnvProps(background, scene, defaultScene, texture, blur = 0) {
  const target = resolveScene(scene || defaultScene);
  const oldbg = target.background;
  const oldenv = target.environment; // @ts-ignore

  const oldBlur = target.backgroundBlurriness || 0;
  if (background !== 'only') target.environment = texture;
  if (background) target.background = texture; // @ts-ignore

  if (background && target.backgroundBlurriness !== undefined) target.backgroundBlurriness = blur;
  return () => {
    if (background !== 'only') target.environment = oldenv;
    if (background) target.background = oldbg; // @ts-ignore

    if (background && target.backgroundBlurriness !== undefined) target.backgroundBlurriness = oldBlur;
  };
}

function EnvironmentMap({
  scene,
  background = false,
  blur,
  map
}) {
  const defaultScene = useThree(state => state.scene);
  React.useLayoutEffect(() => {
    if (map) return setEnvProps(background, scene, defaultScene, map, blur);
  }, [defaultScene, scene, map, background, blur]);
  return null;
}
function EnvironmentCube({
  background = false,
  scene,
  blur,
  ...rest
}) {
  const texture = useEnvironment(rest);
  const defaultScene = useThree(state => state.scene);
  React.useLayoutEffect(() => {
    return setEnvProps(background, scene, defaultScene, texture, blur);
  }, [texture, background, scene, defaultScene, blur]);
  return null;
}
function EnvironmentPortal({
  children,
  near = 1,
  far = 1000,
  resolution = 256,
  frames = 1,
  map,
  background = false,
  blur,
  scene,
  files,
  path,
  preset = undefined,
  extensions
}) {
  const gl = useThree(state => state.gl);
  const defaultScene = useThree(state => state.scene);
  const camera = React.useRef(null);
  const [virtualScene] = React.useState(() => new Scene());
  const fbo = React.useMemo(() => {
    const fbo = new WebGLCubeRenderTarget(resolution);
    fbo.texture.type = HalfFloatType;
    return fbo;
  }, [resolution]);
  React.useLayoutEffect(() => {
    if (frames === 1) camera.current.update(gl, virtualScene);
    return setEnvProps(background, scene, defaultScene, fbo.texture, blur);
  }, [children, virtualScene, fbo.texture, scene, defaultScene, background, frames, gl]);
  let count = 1;
  useFrame(() => {
    if (frames === Infinity || count < frames) {
      camera.current.update(gl, virtualScene);
      count++;
    }
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, createPortal( /*#__PURE__*/React.createElement(React.Fragment, null, children, /*#__PURE__*/React.createElement("cubeCamera", {
    ref: camera,
    args: [near, far, fbo]
  }), files || preset ? /*#__PURE__*/React.createElement(EnvironmentCube, {
    background: true,
    files: files,
    preset: preset,
    path: path,
    extensions: extensions
  }) : map ? /*#__PURE__*/React.createElement(EnvironmentMap, {
    background: true,
    map: map,
    extensions: extensions
  }) : null), virtualScene));
}

function EnvironmentGround(props) {
  var _props$ground, _props$ground2, _scale, _props$ground3;

  const textureDefault = useEnvironment(props);
  const texture = props.map || textureDefault;
  React.useMemo(() => extend({
    GroundProjectedEnvImpl: GroundProjectedEnv
  }), []);
  const args = React.useMemo(() => [texture], [texture]);
  const height = (_props$ground = props.ground) == null ? void 0 : _props$ground.height;
  const radius = (_props$ground2 = props.ground) == null ? void 0 : _props$ground2.radius;
  const scale = (_scale = (_props$ground3 = props.ground) == null ? void 0 : _props$ground3.scale) !== null && _scale !== void 0 ? _scale : 1000;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(EnvironmentMap, _extends({}, props, {
    map: texture
  })), /*#__PURE__*/React.createElement("groundProjectedEnvImpl", {
    args: args,
    scale: scale,
    height: height,
    radius: radius
  }));
}

function Environment(props) {
  return props.ground ? /*#__PURE__*/React.createElement(EnvironmentGround, props) : props.map ? /*#__PURE__*/React.createElement(EnvironmentMap, props) : props.children ? /*#__PURE__*/React.createElement(EnvironmentPortal, props) : /*#__PURE__*/React.createElement(EnvironmentCube, props);
}

export { Environment, EnvironmentCube, EnvironmentMap, EnvironmentPortal };
