import * as React from 'react';
import * as THREE from 'three';
export declare type GridMaterialType = {
    cellSize?: number;
    cellThickness?: number;
    cellColor?: THREE.ColorRepresentation;
    sectionSize?: number;
    sectionThickness?: number;
    sectionColor?: THREE.ColorRepresentation;
    followCamera?: boolean;
    infiniteGrid?: boolean;
    fadeDistance?: number;
    fadeStrength?: number;
    side?: THREE.Side;
};
export declare type GridProps = GridMaterialType & {
    args?: ConstructorParameters<typeof THREE.PlaneGeometry>;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            gridMaterial: JSX.IntrinsicElements['shaderMaterial'] & GridMaterialType;
        }
    }
}
export declare const Grid: React.ForwardRefExoticComponent<Pick<Omit<import("@react-three/fiber").MeshProps, "args"> & GridMaterialType & {
    args?: [width?: number | undefined, height?: number | undefined, widthSegments?: number | undefined, heightSegments?: number | undefined] | undefined;
}, "visible" | "attach" | "args" | "children" | "key" | "onUpdate" | "position" | "up" | "scale" | "rotation" | "matrix" | "quaternion" | "layers" | "dispose" | "type" | "id" | "uuid" | "name" | "parent" | "modelViewMatrix" | "normalMatrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldAutoUpdate" | "matrixWorldNeedsUpdate" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getObjectsByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "getWorldDirection" | "raycast" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateMatrixWorld" | "updateWorldMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | keyof import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers | "material" | "geometry" | "morphTargetInfluences" | "morphTargetDictionary" | "isMesh" | "updateMorphTargets" | "getVertexPosition" | keyof GridMaterialType> & React.RefAttributes<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>>>;
