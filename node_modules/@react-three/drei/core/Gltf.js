import _extends from '@babel/runtime/helpers/esm/extends';
import * as React from 'react';
import { useGLTF } from './useGLTF.js';
import { Clone } from './Clone.js';

const Gltf = /*#__PURE__*/React.forwardRef(({
  src,
  ...props
}, ref) => {
  const {
    scene
  } = useGLTF(src);
  return /*#__PURE__*/React.createElement(Clone, _extends({
    ref: ref
  }, props, {
    object: scene
  }));
});

export { Gltf };
