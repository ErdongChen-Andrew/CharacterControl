import * as React from 'react';
import * as THREE from 'three';
import { Node } from '@react-three/fiber';
interface Props {
    count?: number;
    speed?: number | Float32Array;
    opacity?: number | Float32Array;
    color?: THREE.ColorRepresentation | Float32Array;
    size?: number | Float32Array;
    scale?: number | [number, number, number] | THREE.Vector3;
    noise?: number | [number, number, number] | THREE.Vector3 | Float32Array;
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            sparklesImplMaterial: Node<any, any>;
        }
    }
}
export declare const Sparkles: React.ForwardRefExoticComponent<Pick<Props & Omit<import("@react-three/fiber").ExtendedColors<import("@react-three/fiber").Overwrite<Partial<THREE.Points<THREE.BufferGeometry, THREE.Material | THREE.Material[]>>, import("@react-three/fiber").NodeProps<THREE.Points<THREE.BufferGeometry, THREE.Material | THREE.Material[]>, typeof THREE.Points>>>, import("@react-three/fiber").NonFunctionKeys<{
    position?: import("@react-three/fiber").Vector3 | undefined;
    up?: import("@react-three/fiber").Vector3 | undefined;
    scale?: import("@react-three/fiber").Vector3 | undefined;
    rotation?: import("@react-three/fiber").Euler | undefined;
    matrix?: import("@react-three/fiber").Matrix4 | undefined;
    quaternion?: import("@react-three/fiber").Quaternion | undefined;
    layers?: import("@react-three/fiber").Layers | undefined;
    dispose?: (() => void) | null | undefined;
}>> & {
    position?: import("@react-three/fiber").Vector3 | undefined;
    up?: import("@react-three/fiber").Vector3 | undefined;
    scale?: import("@react-three/fiber").Vector3 | undefined;
    rotation?: import("@react-three/fiber").Euler | undefined;
    matrix?: import("@react-three/fiber").Matrix4 | undefined;
    quaternion?: import("@react-three/fiber").Quaternion | undefined;
    layers?: import("@react-three/fiber").Layers | undefined;
    dispose?: (() => void) | null | undefined;
} & import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers, "visible" | "attach" | "args" | "children" | "key" | "onUpdate" | "position" | "up" | "rotation" | "matrix" | "quaternion" | "layers" | "dispose" | "type" | "id" | "uuid" | "name" | "parent" | "modelViewMatrix" | "normalMatrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldAutoUpdate" | "matrixWorldNeedsUpdate" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getObjectsByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "getWorldDirection" | "raycast" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateMatrixWorld" | "updateWorldMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | keyof import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers | "material" | "geometry" | "morphTargetInfluences" | "morphTargetDictionary" | "updateMorphTargets" | "isPoints" | keyof Props> & React.RefAttributes<THREE.Points<THREE.BufferGeometry, THREE.Material | THREE.Material[]>>>;
export {};
