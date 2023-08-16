/// <reference types="react" />
import * as THREE from 'three';
export declare type SizeProps = {
    box: THREE.Box3;
    size: THREE.Vector3;
    center: THREE.Vector3;
    distance: number;
};
export declare type BoundsApi = {
    getSize: () => SizeProps;
    refresh(object?: THREE.Object3D | THREE.Box3): any;
    clip(): any;
    fit(): any;
    to: ({ position, target }: {
        position: [number, number, number];
        target?: [number, number, number];
    }) => any;
};
export declare type BoundsProps = JSX.IntrinsicElements['group'] & {
    damping?: number;
    fit?: boolean;
    clip?: boolean;
    observe?: boolean;
    margin?: number;
    eps?: number;
    onFit?: (data: SizeProps) => void;
};
export declare function Bounds({ children, damping, fit, clip, observe, margin, eps, onFit }: BoundsProps): JSX.Element;
export declare function useBounds(): BoundsApi;
