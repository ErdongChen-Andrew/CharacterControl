import * as React from 'react';
import { Texture } from 'three';
import { MeshReflectorMaterialProps, MeshReflectorMaterial as MeshReflectorMaterialImpl } from '../materials/MeshReflectorMaterial';
declare type Props = JSX.IntrinsicElements['meshStandardMaterial'] & {
    resolution?: number;
    mixBlur?: number;
    mixStrength?: number;
    blur?: [number, number] | number;
    mirror: number;
    minDepthThreshold?: number;
    maxDepthThreshold?: number;
    depthScale?: number;
    depthToBlurRatioBias?: number;
    distortionMap?: Texture;
    distortion?: number;
    mixContrast?: number;
    reflectorOffset?: number;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            meshReflectorMaterialImpl: MeshReflectorMaterialProps;
        }
    }
}
export declare const MeshReflectorMaterial: React.ForwardRefExoticComponent<Pick<Props, "attach" | "args" | "children" | "key" | "onUpdate" | keyof import("three").MeshStandardMaterial | "blur" | "resolution" | "minDepthThreshold" | "maxDepthThreshold" | "depthScale" | "depthToBlurRatioBias" | "mixBlur" | "mixStrength" | "mirror" | "distortion" | "mixContrast" | "distortionMap" | "reflectorOffset"> & React.RefAttributes<MeshReflectorMaterialImpl>>;
export {};
