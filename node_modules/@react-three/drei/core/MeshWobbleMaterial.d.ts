import * as React from 'react';
import { MeshStandardMaterial, MeshStandardMaterialParameters } from 'three';
declare type WobbleMaterialType = JSX.IntrinsicElements['meshStandardMaterial'] & {
    time?: number;
    factor?: number;
    speed?: number;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            wobbleMaterialImpl: WobbleMaterialType;
        }
    }
}
export declare const MeshWobbleMaterial: React.ForwardRefExoticComponent<Pick<import("@react-three/fiber").ExtendedColors<import("@react-three/fiber").Overwrite<Partial<MeshStandardMaterial>, import("@react-three/fiber").NodeProps<MeshStandardMaterial, [MeshStandardMaterialParameters]>>> & {
    time?: number | undefined;
    factor?: number | undefined;
    speed?: number | undefined;
} & {
    speed?: number | undefined;
    factor?: number | undefined;
}, "attach" | "args" | "children" | "key" | "onUpdate" | "time" | keyof MeshStandardMaterial | "speed" | "factor"> & React.RefAttributes<unknown>>;
export {};
