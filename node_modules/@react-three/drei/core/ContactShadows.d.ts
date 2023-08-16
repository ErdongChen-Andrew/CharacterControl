import * as React from 'react';
import * as THREE from 'three';
export declare type ContactShadowsProps = {
    opacity?: number;
    width?: number;
    height?: number;
    blur?: number;
    far?: number;
    smooth?: boolean;
    resolution?: number;
    frames?: number;
    scale?: number | [x: number, y: number];
    color?: THREE.ColorRepresentation;
    depthWrite?: boolean;
};
export declare const ContactShadows: React.ForwardRefExoticComponent<Pick<Omit<import("@react-three/fiber").GroupProps, "scale"> & ContactShadowsProps, "visible" | "attach" | "args" | "children" | "key" | "onUpdate" | "position" | "up" | "rotation" | "matrix" | "quaternion" | "layers" | "dispose" | "type" | "isGroup" | "id" | "uuid" | "name" | "parent" | "modelViewMatrix" | "normalMatrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldAutoUpdate" | "matrixWorldNeedsUpdate" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getObjectsByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "getWorldDirection" | "raycast" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateMatrixWorld" | "updateWorldMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | keyof import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers | keyof ContactShadowsProps> & React.RefAttributes<unknown>>;
