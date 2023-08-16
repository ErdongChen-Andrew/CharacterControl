import * as THREE from 'three';
import * as React from 'react';
import { ReactThreeFiber } from '@react-three/fiber';
declare global {
    namespace JSX {
        interface IntrinsicElements {
            causticsProjectionMaterial: ReactThreeFiber.MeshNormalMaterialProps & {
                viewMatrix?: {
                    value: THREE.Matrix4;
                };
                color?: ReactThreeFiber.Color;
                causticsTexture?: THREE.Texture;
                causticsTextureB?: THREE.Texture;
                lightProjMatrix?: THREE.Matrix4;
                lightViewMatrix?: THREE.Matrix4;
            };
        }
    }
}
export declare const Caustics: React.ForwardRefExoticComponent<Pick<Omit<ReactThreeFiber.ExtendedColors<ReactThreeFiber.Overwrite<Partial<THREE.Group>, ReactThreeFiber.NodeProps<THREE.Group, typeof THREE.Group>>>, ReactThreeFiber.NonFunctionKeys<{
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
} & import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers & {
    frames?: number | undefined;
    debug?: boolean | undefined;
    causticsOnly: boolean;
    backside: boolean;
    ior?: number | undefined;
    backsideIOR?: number | undefined;
    worldRadius?: number | undefined;
    intensity?: number | undefined;
    color?: ReactThreeFiber.Color | undefined;
    resolution?: number | undefined;
    lightSource?: React.MutableRefObject<THREE.Object3D<THREE.Event>> | [x: number, y: number, z: number] | undefined;
}, "visible" | "attach" | "args" | "children" | "key" | "onUpdate" | "position" | "up" | "scale" | "rotation" | "matrix" | "quaternion" | "layers" | "dispose" | "type" | "isGroup" | "id" | "uuid" | "name" | "parent" | "modelViewMatrix" | "normalMatrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldAutoUpdate" | "matrixWorldNeedsUpdate" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getObjectsByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "getWorldDirection" | "raycast" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateMatrixWorld" | "updateWorldMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "color" | keyof import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers | "intensity" | "ior" | "resolution" | "debug" | "frames" | "backside" | "worldRadius" | "causticsOnly" | "backsideIOR" | "lightSource"> & React.RefAttributes<unknown>>;
