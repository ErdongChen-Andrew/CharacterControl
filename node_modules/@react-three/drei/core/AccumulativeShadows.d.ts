import * as THREE from 'three';
import * as React from 'react';
import { ReactThreeFiber } from '@react-three/fiber';
export declare type AccumulativeShadowsProps = {
    frames?: number;
    blend?: number;
    limit?: number;
    scale?: number;
    temporal?: boolean;
    opacity?: number;
    alphaTest?: number;
    color?: string;
    colorBlend?: number;
    resolution?: number;
    toneMapped?: boolean;
};
interface AccumulativeContext {
    lights: Map<any, any>;
    temporal: boolean;
    frames: number;
    blend: number;
    count: number;
    getMesh: () => THREE.Mesh<THREE.PlaneGeometry, SoftShadowMaterialProps & THREE.ShaderMaterial>;
    reset: () => void;
    update: (frames?: number) => void;
}
interface AccumulativeLightContext {
    update: () => void;
}
declare type SoftShadowMaterialProps = {
    map: THREE.Texture;
    color?: ReactThreeFiber.Color;
    alphaTest?: number;
    blend?: number;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            softShadowMaterial: JSX.IntrinsicElements['shaderMaterial'] & SoftShadowMaterialProps;
        }
    }
}
export declare const accumulativeContext: React.Context<AccumulativeContext>;
export declare const AccumulativeShadows: React.ForwardRefExoticComponent<Pick<Omit<ReactThreeFiber.ExtendedColors<ReactThreeFiber.Overwrite<Partial<THREE.Group>, ReactThreeFiber.NodeProps<THREE.Group, typeof THREE.Group>>>, ReactThreeFiber.NonFunctionKeys<{
    position?: ReactThreeFiber.Vector3 | undefined;
    up?: ReactThreeFiber.Vector3 | undefined;
    scale?: ReactThreeFiber.Vector3 | undefined;
    rotation?: ReactThreeFiber.Euler | undefined;
    matrix?: ReactThreeFiber.Matrix4 | undefined;
    quaternion?: ReactThreeFiber.Quaternion | undefined;
    layers?: ReactThreeFiber.Layers | undefined;
    dispose?: (() => void) | null | undefined;
}>> & {
    position?: ReactThreeFiber.Vector3 | undefined;
    up?: ReactThreeFiber.Vector3 | undefined;
    scale?: ReactThreeFiber.Vector3 | undefined;
    rotation?: ReactThreeFiber.Euler | undefined;
    matrix?: ReactThreeFiber.Matrix4 | undefined;
    quaternion?: ReactThreeFiber.Quaternion | undefined;
    layers?: ReactThreeFiber.Layers | undefined;
    dispose?: (() => void) | null | undefined;
} & import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers & AccumulativeShadowsProps, "visible" | "attach" | "args" | "children" | "key" | "onUpdate" | "position" | "up" | "rotation" | "matrix" | "quaternion" | "layers" | "dispose" | "type" | "isGroup" | "id" | "uuid" | "name" | "parent" | "modelViewMatrix" | "normalMatrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldAutoUpdate" | "matrixWorldNeedsUpdate" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getObjectsByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "getWorldDirection" | "raycast" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateMatrixWorld" | "updateWorldMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | keyof import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers | keyof AccumulativeShadowsProps> & React.RefAttributes<AccumulativeContext>>;
export declare type RandomizedLightProps = {
    frames?: number;
    position?: [x: number, y: number, z: number];
    radius?: number;
    amount?: number;
    intensity?: number;
    ambient?: number;
    castShadow?: boolean;
    bias?: number;
    mapSize?: number;
    size?: number;
    near?: number;
    far?: number;
};
export declare const RandomizedLight: React.ForwardRefExoticComponent<Pick<Omit<ReactThreeFiber.ExtendedColors<ReactThreeFiber.Overwrite<Partial<THREE.Group>, ReactThreeFiber.NodeProps<THREE.Group, typeof THREE.Group>>>, ReactThreeFiber.NonFunctionKeys<{
    position?: ReactThreeFiber.Vector3 | undefined;
    up?: ReactThreeFiber.Vector3 | undefined;
    scale?: ReactThreeFiber.Vector3 | undefined;
    rotation?: ReactThreeFiber.Euler | undefined;
    matrix?: ReactThreeFiber.Matrix4 | undefined;
    quaternion?: ReactThreeFiber.Quaternion | undefined;
    layers?: ReactThreeFiber.Layers | undefined;
    dispose?: (() => void) | null | undefined;
}>> & {
    position?: ReactThreeFiber.Vector3 | undefined;
    up?: ReactThreeFiber.Vector3 | undefined;
    scale?: ReactThreeFiber.Vector3 | undefined;
    rotation?: ReactThreeFiber.Euler | undefined;
    matrix?: ReactThreeFiber.Matrix4 | undefined;
    quaternion?: ReactThreeFiber.Quaternion | undefined;
    layers?: ReactThreeFiber.Layers | undefined;
    dispose?: (() => void) | null | undefined;
} & import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers & RandomizedLightProps, "visible" | "attach" | "args" | "children" | "key" | "onUpdate" | "up" | "scale" | "rotation" | "matrix" | "quaternion" | "layers" | "dispose" | "type" | "isGroup" | "id" | "uuid" | "name" | "parent" | "modelViewMatrix" | "normalMatrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldAutoUpdate" | "matrixWorldNeedsUpdate" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getObjectsByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "getWorldDirection" | "raycast" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateMatrixWorld" | "updateWorldMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | keyof import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers | keyof RandomizedLightProps> & React.RefAttributes<AccumulativeLightContext>>;
export {};
