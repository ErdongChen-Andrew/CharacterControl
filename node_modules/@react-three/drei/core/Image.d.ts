import * as React from 'react';
import * as THREE from 'three';
import { Color } from '@react-three/fiber';
export declare type ImageProps = Omit<JSX.IntrinsicElements['mesh'], 'scale'> & {
    segments?: number;
    scale?: number | [number, number];
    color?: Color;
    zoom?: number;
    grayscale?: number;
    toneMapped?: boolean;
    transparent?: boolean;
    opacity?: number;
} & ({
    texture: THREE.Texture;
    url?: never;
} | {
    texture?: never;
    url: string;
});
declare type ImageMaterialType = JSX.IntrinsicElements['shaderMaterial'] & {
    scale?: number[];
    imageBounds?: number[];
    color?: Color;
    map: THREE.Texture;
    zoom?: number;
    grayscale?: number;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            imageMaterial: ImageMaterialType;
        }
    }
}
export declare const Image: React.ForwardRefExoticComponent<(Pick<Omit<import("@react-three/fiber").MeshProps, "scale"> & {
    segments?: number | undefined;
    scale?: number | [number, number] | undefined;
    color?: Color | undefined;
    zoom?: number | undefined;
    grayscale?: number | undefined;
    toneMapped?: boolean | undefined;
    transparent?: boolean | undefined;
    opacity?: number | undefined;
} & {
    texture: THREE.Texture;
    url?: undefined;
}, "visible" | "attach" | "args" | "children" | "key" | "onUpdate" | "position" | "up" | "scale" | "rotation" | "matrix" | "quaternion" | "layers" | "dispose" | "type" | "id" | "uuid" | "name" | "parent" | "modelViewMatrix" | "normalMatrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldAutoUpdate" | "matrixWorldNeedsUpdate" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getObjectsByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "getWorldDirection" | "raycast" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateMatrixWorld" | "updateWorldMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "color" | keyof import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers | "material" | "geometry" | "transparent" | "zoom" | "texture" | "opacity" | "toneMapped" | "morphTargetInfluences" | "morphTargetDictionary" | "isMesh" | "updateMorphTargets" | "getVertexPosition" | "url" | "segments" | "grayscale"> | Pick<Omit<import("@react-three/fiber").MeshProps, "scale"> & {
    segments?: number | undefined;
    scale?: number | [number, number] | undefined;
    color?: Color | undefined;
    zoom?: number | undefined;
    grayscale?: number | undefined;
    toneMapped?: boolean | undefined;
    transparent?: boolean | undefined;
    opacity?: number | undefined;
} & {
    texture?: undefined;
    url: string;
}, "visible" | "attach" | "args" | "children" | "key" | "onUpdate" | "position" | "up" | "scale" | "rotation" | "matrix" | "quaternion" | "layers" | "dispose" | "type" | "id" | "uuid" | "name" | "parent" | "modelViewMatrix" | "normalMatrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldAutoUpdate" | "matrixWorldNeedsUpdate" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getObjectsByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "getWorldDirection" | "raycast" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateMatrixWorld" | "updateWorldMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "color" | keyof import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers | "material" | "geometry" | "transparent" | "zoom" | "texture" | "opacity" | "toneMapped" | "morphTargetInfluences" | "morphTargetDictionary" | "isMesh" | "updateMorphTargets" | "getVertexPosition" | "url" | "segments" | "grayscale">) & React.RefAttributes<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>>>;
export {};
