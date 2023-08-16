import * as React from 'react';
import { MeshPhysicalMaterial, MeshPhysicalMaterialParameters } from 'three';
declare type DistortMaterialType = JSX.IntrinsicElements['meshPhysicalMaterial'] & {
    time?: number;
    distort?: number;
    radius?: number;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            distortMaterialImpl: DistortMaterialType;
        }
    }
}
export declare const MeshDistortMaterial: React.ForwardRefExoticComponent<Pick<import("@react-three/fiber").ExtendedColors<import("@react-three/fiber").Overwrite<Partial<MeshPhysicalMaterial>, import("@react-three/fiber").NodeProps<MeshPhysicalMaterial, [MeshPhysicalMaterialParameters]>>> & {
    time?: number | undefined;
    distort?: number | undefined;
    radius?: number | undefined;
} & {
    speed?: number | undefined;
    factor?: number | undefined;
}, "attach" | "args" | "children" | "key" | "onUpdate" | "time" | keyof MeshPhysicalMaterial | "radius" | "speed" | "distort" | "factor"> & React.RefAttributes<unknown>>;
export {};
