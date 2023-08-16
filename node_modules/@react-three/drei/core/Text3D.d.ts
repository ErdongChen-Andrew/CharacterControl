import * as React from 'react';
import * as THREE from 'three';
import { Node } from '@react-three/fiber';
import { TextGeometryParameters } from 'three-stdlib';
import { FontData } from './useFont';
declare global {
    namespace JSX {
        interface IntrinsicElements {
            renamedTextGeometry: Node<any, any>;
        }
    }
}
export declare const Text3D: React.ForwardRefExoticComponent<Pick<React.PropsWithChildren<{
    font: FontData | string;
    bevelSegments?: number | undefined;
    smooth?: number | undefined;
} & Omit<TextGeometryParameters, "font"> & Omit<import("@react-three/fiber").ExtendedColors<import("@react-three/fiber").Overwrite<Partial<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>>, import("@react-three/fiber").NodeProps<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>, typeof THREE.Mesh>>>, import("@react-three/fiber").NonFunctionKeys<{
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
} & import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers & {
    letterSpacing?: number | undefined;
    lineHeight?: number | undefined;
}>, "visible" | "attach" | "args" | "children" | "key" | "onUpdate" | "position" | "up" | "scale" | "rotation" | "matrix" | "quaternion" | "layers" | "dispose" | "type" | "id" | "uuid" | "name" | "parent" | "modelViewMatrix" | "normalMatrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldAutoUpdate" | "matrixWorldNeedsUpdate" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getObjectsByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "getWorldDirection" | "raycast" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateMatrixWorld" | "updateWorldMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | keyof import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers | "material" | "geometry" | "size" | "font" | "smooth" | "morphTargetInfluences" | "morphTargetDictionary" | "isMesh" | "updateMorphTargets" | "getVertexPosition" | "height" | "letterSpacing" | "lineHeight" | "bevelEnabled" | "bevelOffset" | "bevelSize" | "bevelThickness" | "curveSegments" | "bevelSegments"> & React.RefAttributes<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>>>;
