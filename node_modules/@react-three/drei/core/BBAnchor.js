import _extends from '@babel/runtime/helpers/esm/extends';
import * as React from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const boundingBox = new THREE.Box3();
const boundingBoxSize = new THREE.Vector3();
const BBAnchor = ({
  anchor,
  ...props
}) => {
  const ref = React.useRef(null);
  const parentRef = React.useRef(null); // Reattach group created by this component to the parent's parent,
  // so it becomes a sibling of its initial parent.
  // We do that so the children have no impact on a bounding box of a parent.

  React.useEffect(() => {
    var _ref$current, _ref$current$parent;

    if ((_ref$current = ref.current) != null && (_ref$current$parent = _ref$current.parent) != null && _ref$current$parent.parent) {
      parentRef.current = ref.current.parent;
      ref.current.parent.parent.add(ref.current);
    }
  }, []);
  useFrame(() => {
    if (parentRef.current) {
      boundingBox.setFromObject(parentRef.current);
      boundingBox.getSize(boundingBoxSize);
      ref.current.position.set(parentRef.current.position.x + boundingBoxSize.x * anchor[0] / 2, parentRef.current.position.y + boundingBoxSize.y * anchor[1] / 2, parentRef.current.position.z + boundingBoxSize.z * anchor[2] / 2);
    }
  });
  return /*#__PURE__*/React.createElement("group", _extends({
    ref: ref
  }, props));
};

export { BBAnchor };
