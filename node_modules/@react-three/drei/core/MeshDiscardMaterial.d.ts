import * as React from 'react';
import { ReactThreeFiber } from '@react-three/fiber';
declare global {
    namespace JSX {
        interface IntrinsicElements {
            discardMaterialImpl: ReactThreeFiber.ShaderMaterialProps;
        }
    }
}
export declare const MeshDiscardMaterial: React.ForwardRefExoticComponent<Pick<ReactThreeFiber.ExtendedColors<ReactThreeFiber.Overwrite<Partial<import("three").ShaderMaterial>, ReactThreeFiber.NodeProps<import("three").ShaderMaterial, [import("three").ShaderMaterialParameters]>>>, "attach" | "args" | "children" | "key" | "onUpdate" | keyof import("three").ShaderMaterial> & React.RefAttributes<import("three").ShaderMaterial>>;
