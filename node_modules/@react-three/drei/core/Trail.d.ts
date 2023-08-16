import * as React from 'react';
import { ColorRepresentation, Object3D } from 'three';
import { MeshLineGeometry as MeshLineGeometryImpl } from 'meshline';
declare type Settings = {
    width: number;
    length: number;
    decay: number;
    local: boolean;
    stride: number;
    interval: number;
};
export declare function useTrail(target: Object3D, settings: Partial<Settings>): React.MutableRefObject<Float32Array | undefined>;
export declare type MeshLineGeometry = THREE.Mesh & MeshLineGeometryImpl;
export declare const Trail: React.ForwardRefExoticComponent<{
    color?: ColorRepresentation | undefined;
    attenuation?: ((width: number) => number) | undefined;
    target?: React.MutableRefObject<Object3D<import("three").Event>> | undefined;
} & Partial<Settings> & {
    children?: React.ReactNode;
} & React.RefAttributes<MeshLineGeometry>>;
export {};
