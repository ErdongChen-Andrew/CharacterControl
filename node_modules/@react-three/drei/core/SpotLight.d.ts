import * as React from 'react';
import { DepthTexture, SpotLight as SpotLightImpl, Texture } from 'three';
declare type SpotLightProps = JSX.IntrinsicElements['spotLight'] & {
    depthBuffer?: DepthTexture;
    attenuation?: number;
    anglePower?: number;
    radiusTop?: number;
    radiusBottom?: number;
    opacity?: number;
    color?: string | number;
    volumetric?: boolean;
    debug?: boolean;
};
interface ShadowMeshProps {
    distance?: number;
    alphaTest?: number;
    scale?: number;
    map?: Texture;
    shader?: string;
    width?: number;
    height?: number;
}
export declare function SpotLightShadow(props: React.PropsWithChildren<ShadowMeshProps>): JSX.Element;
declare const SpotLight: React.ForwardRefExoticComponent<Pick<SpotLightProps, "visible" | "attach" | "args" | "children" | "key" | "onUpdate" | "position" | "up" | "scale" | "rotation" | "matrix" | "quaternion" | "layers" | "dispose" | "type" | "id" | "uuid" | "name" | "parent" | "modelViewMatrix" | "normalMatrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldAutoUpdate" | "matrixWorldNeedsUpdate" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getObjectsByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "getWorldDirection" | "raycast" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateMatrixWorld" | "updateWorldMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "color" | keyof import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers | "map" | "opacity" | "intensity" | "isLight" | "shadow" | "shadowCameraFov" | "shadowCameraLeft" | "shadowCameraRight" | "shadowCameraTop" | "shadowCameraBottom" | "shadowCameraNear" | "shadowCameraFar" | "shadowBias" | "shadowMapWidth" | "shadowMapHeight" | "target" | "distance" | "angle" | "decay" | "power" | "penumbra" | "isSpotLight" | "depthBuffer" | "attenuation" | "debug" | "anglePower" | "volumetric" | "radiusTop" | "radiusBottom"> & React.RefAttributes<SpotLightImpl>>;
export { SpotLight };
