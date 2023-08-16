import * as THREE from 'three';
import * as React from 'react';
import { PrimitiveProps } from '@react-three/fiber';
declare type PointMaterialType = JSX.IntrinsicElements['pointsMaterial'];
declare global {
    namespace JSX {
        interface IntrinsicElements {
            pointMaterialImpl: PointMaterialType;
        }
    }
}
export declare class PointMaterialImpl extends THREE.PointsMaterial {
    constructor(props: any);
}
export declare const PointMaterial: React.ForwardRefExoticComponent<Pick<Omit<PrimitiveProps, "object" | "attach">, string | number> & React.RefAttributes<PointMaterialImpl>>;
export {};
