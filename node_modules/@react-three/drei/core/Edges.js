import _extends from '@babel/runtime/helpers/esm/extends';
import * as React from 'react';
import * as THREE from 'three';

const Edges = /*#__PURE__*/React.forwardRef(({
  userData,
  children,
  geometry,
  threshold = 15,
  color = 'black',
  ...props
}, fref) => {
  const ref = React.useRef(null);
  React.useLayoutEffect(() => {
    const parent = ref.current.parent;

    if (parent) {
      const geom = geometry || parent.geometry;

      if (geom !== ref.current.userData.currentGeom || threshold !== ref.current.userData.currentThreshold) {
        ref.current.userData.currentGeom = geom;
        ref.current.userData.currentThreshold = threshold;
        ref.current.geometry = new THREE.EdgesGeometry(geom, threshold);
      }
    }
  });
  React.useImperativeHandle(fref, () => ref.current);
  return /*#__PURE__*/React.createElement("lineSegments", _extends({
    ref: ref,
    raycast: () => null
  }, props), children ? children : /*#__PURE__*/React.createElement("lineBasicMaterial", {
    color: color
  }));
});

export { Edges };
