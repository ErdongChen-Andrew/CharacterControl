import * as THREE from 'three';
import * as React from 'react';
import { MeshProps } from '@react-three/fiber';
export declare type CloneProps = {
    object: THREE.Object3D | THREE.Object3D[];
    children?: React.ReactNode;
    deep?: boolean | 'materialsOnly' | 'geometriesOnly';
    keys?: string[];
    inject?: MeshProps | React.ReactNode | ((object: THREE.Object3D) => React.ReactNode);
    castShadow?: boolean;
    receiveShadow?: boolean;
    isChild?: boolean;
};
export declare const Clone: React.ForwardRefExoticComponent<Pick<Omit<import("@react-three/fiber").GroupProps, "children"> & CloneProps, "visible" | "attach" | "args" | "key" | "onUpdate" | "position" | "up" | "scale" | "rotation" | "matrix" | "quaternion" | "layers" | "dispose" | "type" | "isGroup" | "id" | "uuid" | "name" | "parent" | "modelViewMatrix" | "normalMatrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldAutoUpdate" | "matrixWorldNeedsUpdate" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getObjectsByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "getWorldDirection" | "raycast" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateMatrixWorld" | "updateWorldMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | keyof import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers | keyof CloneProps> & React.RefAttributes<THREE.Group>>;
