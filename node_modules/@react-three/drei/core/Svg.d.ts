import { MeshBasicMaterialProps, MeshProps, Object3DProps } from '@react-three/fiber';
import * as React from 'react';
import { Object3D } from 'three';
export interface SvgProps extends Omit<Object3DProps, 'ref'> {
    src: string;
    skipFill?: boolean;
    skipStrokes?: boolean;
    fillMaterial?: MeshBasicMaterialProps;
    strokeMaterial?: MeshBasicMaterialProps;
    fillMeshProps?: MeshProps;
    strokeMeshProps?: MeshProps;
}
export declare const Svg: React.ForwardRefExoticComponent<SvgProps & React.RefAttributes<Object3D<import("three").Event>>>;
