import _extends from '@babel/runtime/helpers/esm/extends';
import * as THREE from 'three';
import * as React from 'react';
import { extend, useFrame } from '@react-three/fiber';
import mergeRefs from 'react-merge-refs';
import Composer from 'react-composer';

const _instanceLocalMatrix = /*@__PURE__*/new THREE.Matrix4();

const _instanceWorldMatrix = /*@__PURE__*/new THREE.Matrix4();

const _instanceIntersects = [];

const _mesh = /*@__PURE__*/new THREE.Mesh();

class PositionMesh extends THREE.Group {
  constructor() {
    super();
    this.color = new THREE.Color('white');
    this.instance = {
      current: undefined
    };
    this.instanceKey = {
      current: undefined
    };
  } // This will allow the virtual instance have bounds


  get geometry() {
    var _this$instance$curren;

    return (_this$instance$curren = this.instance.current) == null ? void 0 : _this$instance$curren.geometry;
  } // And this will allow the virtual instance to receive events


  raycast(raycaster, intersects) {
    const parent = this.instance.current;
    if (!parent) return;
    if (!parent.geometry || !parent.material) return;
    _mesh.geometry = parent.geometry;
    const matrixWorld = parent.matrixWorld;
    const instanceId = parent.userData.instances.indexOf(this.instanceKey); // If the instance wasn't found or exceeds the parents draw range, bail out

    if (instanceId === -1 || instanceId > parent.count) return; // calculate the world matrix for each instance

    parent.getMatrixAt(instanceId, _instanceLocalMatrix);

    _instanceWorldMatrix.multiplyMatrices(matrixWorld, _instanceLocalMatrix); // the mesh represents this single instance


    _mesh.matrixWorld = _instanceWorldMatrix; // raycast side according to instance material

    if (parent.material instanceof THREE.Material) _mesh.material.side = parent.material.side;else _mesh.material.side = parent.material[0].side;

    _mesh.raycast(raycaster, _instanceIntersects); // process the result of raycast


    for (let i = 0, l = _instanceIntersects.length; i < l; i++) {
      const intersect = _instanceIntersects[i];
      intersect.instanceId = instanceId;
      intersect.object = this;
      intersects.push(intersect);
    }

    _instanceIntersects.length = 0;
  }

}

const globalContext = /*@__PURE__*/React.createContext(null);
const parentMatrix = /*@__PURE__*/new THREE.Matrix4();
const instanceMatrix = /*@__PURE__*/new THREE.Matrix4();
const tempMatrix = /*@__PURE__*/new THREE.Matrix4();
const translation = /*@__PURE__*/new THREE.Vector3();
const rotation = /*@__PURE__*/new THREE.Quaternion();
const scale = /*@__PURE__*/new THREE.Vector3();
const Instance = /*#__PURE__*/React.forwardRef(({
  context,
  children,
  ...props
}, ref) => {
  React.useMemo(() => extend({
    PositionMesh
  }), []);
  const group = React.useRef();
  const {
    subscribe,
    getParent
  } = React.useContext(context || globalContext);
  React.useLayoutEffect(() => subscribe(group), []);
  return /*#__PURE__*/React.createElement("positionMesh", _extends({
    instance: getParent(),
    instanceKey: group,
    ref: mergeRefs([ref, group])
  }, props), children);
});
const Instances = /*#__PURE__*/React.forwardRef(({
  children,
  range,
  limit = 1000,
  frames = Infinity,
  ...props
}, ref) => {
  const [{
    context,
    instance
  }] = React.useState(() => {
    const context = /*#__PURE__*/React.createContext(null);
    return {
      context,
      instance: /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(Instance, _extends({
        context: context
      }, props, {
        ref: ref
      })))
    };
  });
  const parentRef = React.useRef(null);
  const [instances, setInstances] = React.useState([]);
  const [[matrices, colors]] = React.useState(() => {
    const mArray = new Float32Array(limit * 16);

    for (let i = 0; i < limit; i++) tempMatrix.identity().toArray(mArray, i * 16);

    return [mArray, new Float32Array([...new Array(limit * 3)].map(() => 1))];
  });
  React.useEffect(() => {
    // We might be a frame too late? 🤷‍♂️
    parentRef.current.instanceMatrix.needsUpdate = true;
  });
  let count = 0;
  let updateRange = 0;
  useFrame(() => {
    if (frames === Infinity || count < frames) {
      parentRef.current.updateMatrix();
      parentRef.current.updateMatrixWorld();
      parentMatrix.copy(parentRef.current.matrixWorld).invert();
      updateRange = Math.min(limit, range !== undefined ? range : limit, instances.length);
      parentRef.current.count = updateRange;
      parentRef.current.instanceMatrix.updateRange.count = updateRange * 16;
      parentRef.current.instanceColor.updateRange.count = updateRange * 3;

      for (let i = 0; i < instances.length; i++) {
        const instance = instances[i].current; // Multiply the inverse of the InstancedMesh world matrix or else
        // Instances will be double-transformed if <Instances> isn't at identity

        instance.matrixWorld.decompose(translation, rotation, scale);
        instanceMatrix.compose(translation, rotation, scale).premultiply(parentMatrix);
        instanceMatrix.toArray(matrices, i * 16);
        parentRef.current.instanceMatrix.needsUpdate = true;
        instance.color.toArray(colors, i * 3);
        parentRef.current.instanceColor.needsUpdate = true;
      }

      count++;
    }
  });
  const api = React.useMemo(() => ({
    getParent: () => parentRef,
    subscribe: ref => {
      setInstances(instances => [...instances, ref]);
      return () => setInstances(instances => instances.filter(item => item.current !== ref.current));
    }
  }), []);
  return /*#__PURE__*/React.createElement("instancedMesh", _extends({
    userData: {
      instances
    },
    matrixAutoUpdate: false,
    ref: mergeRefs([ref, parentRef]),
    args: [null, null, 0],
    raycast: () => null
  }, props), /*#__PURE__*/React.createElement("instancedBufferAttribute", {
    attach: "instanceMatrix",
    count: matrices.length / 16,
    array: matrices,
    itemSize: 16,
    usage: THREE.DynamicDrawUsage
  }), /*#__PURE__*/React.createElement("instancedBufferAttribute", {
    attach: "instanceColor",
    count: colors.length / 3,
    array: colors,
    itemSize: 3,
    usage: THREE.DynamicDrawUsage
  }), typeof children === 'function' ? /*#__PURE__*/React.createElement(context.Provider, {
    value: api
  }, children(instance)) : /*#__PURE__*/React.createElement(globalContext.Provider, {
    value: api
  }, children));
});
const Merged = /*#__PURE__*/React.forwardRef(function Merged({
  meshes,
  children,
  ...props
}, ref) {
  const isArray = Array.isArray(meshes); // Filter out meshes from collections, which may contain non-meshes

  if (!isArray) for (const key of Object.keys(meshes)) if (!meshes[key].isMesh) delete meshes[key];
  return /*#__PURE__*/React.createElement("group", {
    ref: ref
  }, /*#__PURE__*/React.createElement(Composer, {
    components: (isArray ? meshes : Object.values(meshes)).map(({
      geometry,
      material
    }) => /*#__PURE__*/React.createElement(Instances, _extends({
      key: geometry.uuid,
      geometry: geometry,
      material: material
    }, props)))
  }, args => isArray ? children(...args) : children(Object.keys(meshes).filter(key => meshes[key].isMesh).reduce((acc, key, i) => ({ ...acc,
    [key]: args[i]
  }), {}))));
});

export { Instance, Instances, Merged };
