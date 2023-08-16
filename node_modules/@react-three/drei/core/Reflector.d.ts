import * as React from 'react';
import { Mesh, Texture } from 'three';
import { MeshReflectorMaterialProps } from '../materials/MeshReflectorMaterial';
export declare type ReflectorProps = Omit<JSX.IntrinsicElements['mesh'], 'args' | 'children'> & Pick<JSX.IntrinsicElements['planeGeometry'], 'args'> & {
    resolution?: number;
    mixBlur?: number;
    mixStrength?: number;
    blur?: [number, number] | number;
    mirror: number;
    minDepthThreshold?: number;
    maxDepthThreshold?: number;
    depthScale?: number;
    depthToBlurRatioBias?: number;
    debug?: number;
    distortionMap?: Texture;
    distortion?: number;
    mixContrast?: number;
    children?: {
        (Component: React.ElementType<JSX.IntrinsicElements['meshReflectorMaterial']>, ComponentProps: MeshReflectorMaterialProps): JSX.Element | null;
    };
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            meshReflectorMaterial: MeshReflectorMaterialProps;
        }
    }
}
export declare const Reflector: React.ForwardRefExoticComponent<Pick<ReflectorProps, "visible" | "attach" | "args" | "children" | "key" | "onUpdate" | "position" | "up" | "scale" | "rotation" | "matrix" | "quaternion" | "layers" | "dispose" | "type" | "id" | "uuid" | "name" | "parent" | "modelViewMatrix" | "normalMatrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldAutoUpdate" | "matrixWorldNeedsUpdate" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getObjectsByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "getWorldDirection" | "raycast" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateMatrixWorld" | "updateWorldMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | keyof import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers | "material" | "geometry" | "morphTargetInfluences" | "morphTargetDictionary" | "isMesh" | "updateMorphTargets" | "getVertexPosition" | "blur" | "resolution" | "debug" | "minDepthThreshold" | "maxDepthThreshold" | "depthScale" | "depthToBlurRatioBias" | "mixBlur" | "mixStrength" | "mirror" | "distortion" | "mixContrast" | "distortionMap"> & React.RefAttributes<Mesh<import("three").BufferGeometry, import("three").Material | import("three").Material[]>>>;
