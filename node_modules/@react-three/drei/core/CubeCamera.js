import * as React from 'react';
import { useFrame } from '@react-three/fiber';
import { useCubeCamera } from './useCubeCamera.js';

function CubeCamera({
  children,
  frames = Infinity,
  resolution,
  near,
  far,
  envMap,
  fog,
  ...props
}) {
  const ref = React.useRef();
  const {
    fbo,
    camera,
    update
  } = useCubeCamera({
    resolution,
    near,
    far,
    envMap,
    fog
  });
  let count = 0;
  useFrame(() => {
    if (ref.current && (frames === Infinity || count < frames)) {
      ref.current.visible = false;
      update();
      ref.current.visible = true;
      count++;
    }
  });
  return /*#__PURE__*/React.createElement("group", props, /*#__PURE__*/React.createElement("primitive", {
    object: camera
  }), /*#__PURE__*/React.createElement("group", {
    ref: ref
  }, children(fbo.texture)));
}

export { CubeCamera };
