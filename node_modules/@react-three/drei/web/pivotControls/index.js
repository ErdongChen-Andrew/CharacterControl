import _extends from '@babel/runtime/helpers/esm/extends';
import * as THREE from 'three';
import * as React from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { AxisArrow } from './AxisArrow.js';
import { PlaneSlider } from './PlaneSlider.js';
import { AxisRotator } from './AxisRotator.js';
import { context } from './context.js';

const tV0 = new THREE.Vector3();
const tV1 = new THREE.Vector3();
const tV2 = new THREE.Vector3();

const getPoint2 = (point3, camera, size) => {
  const widthHalf = size.width / 2;
  const heightHalf = size.height / 2;
  camera.updateMatrixWorld(false);
  const vector = point3.project(camera);
  vector.x = vector.x * widthHalf + widthHalf;
  vector.y = -(vector.y * heightHalf) + heightHalf;
  return vector;
};

const getPoint3 = (point2, camera, size, zValue = 1) => {
  const vector = tV0.set(point2.x / size.width * 2 - 1, -(point2.y / size.height) * 2 + 1, zValue);
  vector.unproject(camera);
  return vector;
};

const calculateScaleFactor = (point3, radiusPx, camera, size) => {
  const point2 = getPoint2(tV2.copy(point3), camera, size);
  let scale = 0;

  for (let i = 0; i < 2; ++i) {
    const point2off = tV1.copy(point2).setComponent(i, point2.getComponent(i) + radiusPx);
    const point3off = getPoint3(point2off, camera, size, point2off.z);
    scale = Math.max(scale, point3.distanceTo(point3off));
  }

  return scale;
};
const mL0 = new THREE.Matrix4();
const mW0 = new THREE.Matrix4();
const mP = new THREE.Matrix4();
const mPInv = new THREE.Matrix4();
const mW = new THREE.Matrix4();
const mL = new THREE.Matrix4();
const mL0Inv = new THREE.Matrix4();
const mdL = new THREE.Matrix4();
const bb = new THREE.Box3();
const bbObj = new THREE.Box3();
const vCenter = new THREE.Vector3();
const vSize = new THREE.Vector3();
const vAnchorOffset = new THREE.Vector3();
const vPosition = new THREE.Vector3();
const xDir = new THREE.Vector3(1, 0, 0);
const yDir = new THREE.Vector3(0, 1, 0);
const zDir = new THREE.Vector3(0, 0, 1);
const PivotControls = /*#__PURE__*/React.forwardRef(({
  matrix,
  onDragStart,
  onDrag,
  onDragEnd,
  autoTransform = true,
  anchor,
  disableAxes = false,
  disableSliders = false,
  disableRotations = false,
  activeAxes = [true, true, true],
  offset = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  lineWidth = 4,
  fixed = false,
  translationLimits,
  rotationLimits,
  depthTest = true,
  axisColors = ['#ff2060', '#20df80', '#2080ff'],
  hoveredColor = '#ffff40',
  annotations = false,
  annotationsClass,
  opacity = 1,
  visible = true,
  userData,
  children,
  ...props
}, fRef) => {
  const invalidate = useThree(state => state.invalidate);
  const parentRef = React.useRef(null);
  const ref = React.useRef(null);
  const gizmoRef = React.useRef(null);
  const childrenRef = React.useRef(null);
  const translation = React.useRef([0, 0, 0]);
  React.useLayoutEffect(() => {
    if (!anchor) return;
    childrenRef.current.updateWorldMatrix(true, true);
    mPInv.copy(childrenRef.current.matrixWorld).invert();
    bb.makeEmpty();
    childrenRef.current.traverse(obj => {
      if (!obj.geometry) return;
      if (!obj.geometry.boundingBox) obj.geometry.computeBoundingBox();
      mL.copy(obj.matrixWorld).premultiply(mPInv);
      bbObj.copy(obj.geometry.boundingBox);
      bbObj.applyMatrix4(mL);
      bb.union(bbObj);
    });
    vCenter.copy(bb.max).add(bb.min).multiplyScalar(0.5);
    vSize.copy(bb.max).sub(bb.min).multiplyScalar(0.5);
    vAnchorOffset.copy(vSize).multiply(new THREE.Vector3(...anchor)).add(vCenter);
    vPosition.set(...offset).add(vAnchorOffset);
    gizmoRef.current.position.copy(vPosition);
    invalidate();
  });
  const config = React.useMemo(() => ({
    onDragStart: props => {
      mL0.copy(ref.current.matrix);
      mW0.copy(ref.current.matrixWorld);
      onDragStart && onDragStart(props);
      invalidate();
    },
    onDrag: mdW => {
      mP.copy(parentRef.current.matrixWorld);
      mPInv.copy(mP).invert(); // After applying the delta

      mW.copy(mW0).premultiply(mdW);
      mL.copy(mW).premultiply(mPInv);
      mL0Inv.copy(mL0).invert();
      mdL.copy(mL).multiply(mL0Inv);
      if (autoTransform) ref.current.matrix.copy(mL);
      onDrag && onDrag(mL, mdL, mW, mdW);
      invalidate();
    },
    onDragEnd: () => {
      if (onDragEnd) onDragEnd();
      invalidate();
    },
    translation,
    translationLimits,
    rotationLimits,
    axisColors,
    hoveredColor,
    opacity,
    scale,
    lineWidth,
    fixed,
    depthTest,
    userData,
    annotations,
    annotationsClass
  }), [onDragStart, onDrag, onDragEnd, translation, translationLimits, rotationLimits, depthTest, scale, lineWidth, fixed, ...axisColors, hoveredColor, opacity, userData, autoTransform, annotations, annotationsClass]);
  const vec = new THREE.Vector3();
  useFrame(state => {
    if (fixed) {
      const sf = calculateScaleFactor(gizmoRef.current.getWorldPosition(vec), scale, state.camera, state.size);

      if (gizmoRef.current) {
        var _gizmoRef$current, _gizmoRef$current2, _gizmoRef$current3;

        if (((_gizmoRef$current = gizmoRef.current) == null ? void 0 : _gizmoRef$current.scale.x) !== sf || ((_gizmoRef$current2 = gizmoRef.current) == null ? void 0 : _gizmoRef$current2.scale.y) !== sf || ((_gizmoRef$current3 = gizmoRef.current) == null ? void 0 : _gizmoRef$current3.scale.z) !== sf) {
          gizmoRef.current.scale.setScalar(sf);
          state.invalidate();
        }
      }
    }
  });
  React.useImperativeHandle(fRef, () => ref.current, []);
  React.useLayoutEffect(() => {
    // If the matrix is a real matrix4 it means that the user wants to control the gizmo
    // In that case it should just be set, as a bare prop update would merely copy it
    if (matrix && matrix instanceof THREE.Matrix4) ref.current.matrix = matrix;
  }, [matrix]);
  return /*#__PURE__*/React.createElement(context.Provider, {
    value: config
  }, /*#__PURE__*/React.createElement("group", {
    ref: parentRef
  }, /*#__PURE__*/React.createElement("group", _extends({
    ref: ref,
    matrix: matrix,
    matrixAutoUpdate: false
  }, props), /*#__PURE__*/React.createElement("group", {
    visible: visible,
    ref: gizmoRef,
    position: offset,
    rotation: rotation
  }, !disableAxes && activeAxes[0] && /*#__PURE__*/React.createElement(AxisArrow, {
    axis: 0,
    direction: xDir
  }), !disableAxes && activeAxes[1] && /*#__PURE__*/React.createElement(AxisArrow, {
    axis: 1,
    direction: yDir
  }), !disableAxes && activeAxes[2] && /*#__PURE__*/React.createElement(AxisArrow, {
    axis: 2,
    direction: zDir
  }), !disableSliders && activeAxes[0] && activeAxes[1] && /*#__PURE__*/React.createElement(PlaneSlider, {
    axis: 2,
    dir1: xDir,
    dir2: yDir
  }), !disableSliders && activeAxes[0] && activeAxes[2] && /*#__PURE__*/React.createElement(PlaneSlider, {
    axis: 1,
    dir1: zDir,
    dir2: xDir
  }), !disableSliders && activeAxes[2] && activeAxes[1] && /*#__PURE__*/React.createElement(PlaneSlider, {
    axis: 0,
    dir1: yDir,
    dir2: zDir
  }), !disableRotations && activeAxes[0] && activeAxes[1] && /*#__PURE__*/React.createElement(AxisRotator, {
    axis: 2,
    dir1: xDir,
    dir2: yDir
  }), !disableRotations && activeAxes[0] && activeAxes[2] && /*#__PURE__*/React.createElement(AxisRotator, {
    axis: 1,
    dir1: zDir,
    dir2: xDir
  }), !disableRotations && activeAxes[2] && activeAxes[1] && /*#__PURE__*/React.createElement(AxisRotator, {
    axis: 0,
    dir1: yDir,
    dir2: zDir
  })), /*#__PURE__*/React.createElement("group", {
    ref: childrenRef
  }, children))));
});

export { PivotControls, calculateScaleFactor };
