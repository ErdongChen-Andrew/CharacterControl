import _extends from '@babel/runtime/helpers/esm/extends';
import * as React from 'react';
import * as THREE from 'three';

function create(type, effect) {
  const El = type + 'Geometry';
  return /*#__PURE__*/React.forwardRef(({
    args,
    children,
    ...props
  }, fref) => {
    const ref = React.useRef(null);
    React.useImperativeHandle(fref, () => ref.current);
    React.useLayoutEffect(() => void (effect == null ? void 0 : effect(ref.current)));
    return /*#__PURE__*/React.createElement("mesh", _extends({
      ref: ref
    }, props), /*#__PURE__*/React.createElement(El, {
      attach: "geometry",
      args: args
    }), children);
  });
}

const Box = create('box');
const Circle = create('circle');
const Cone = create('cone');
const Cylinder = create('cylinder');
const Sphere = create('sphere');
const Plane = create('plane');
const Tube = create('tube');
const Torus = create('torus');
const TorusKnot = create('torusKnot');
const Tetrahedron = create('tetrahedron');
const Ring = create('ring');
const Polyhedron = create('polyhedron');
const Icosahedron = create('icosahedron');
const Octahedron = create('octahedron');
const Dodecahedron = create('dodecahedron');
const Extrude = create('extrude');
const Lathe = create('lathe');
const Capsule = create('capsule');
const Shape = create('shape', ({
  geometry
}) => {
  // Calculate UVs (by https://discourse.threejs.org/u/prisoner849)
  // https://discourse.threejs.org/t/custom-shape-in-image-not-working/49348/10
  const pos = geometry.attributes.position;
  const b3 = new THREE.Box3().setFromBufferAttribute(pos);
  const b3size = new THREE.Vector3();
  b3.getSize(b3size);
  const uv = [];
  let x = 0,
      y = 0,
      u = 0,
      v = 0;

  for (let i = 0; i < pos.count; i++) {
    x = pos.getX(i);
    y = pos.getY(i);
    u = (x - b3.min.x) / b3size.x;
    v = (y - b3.min.y) / b3size.y;
    uv.push(u, v);
  }

  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
});

export { Box, Capsule, Circle, Cone, Cylinder, Dodecahedron, Extrude, Icosahedron, Lathe, Octahedron, Plane, Polyhedron, Ring, Shape, Sphere, Tetrahedron, Torus, TorusKnot, Tube };
