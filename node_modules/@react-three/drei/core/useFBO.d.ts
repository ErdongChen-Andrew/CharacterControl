import * as THREE from 'three';
declare type FBOSettings = {
    samples?: number;
    depth?: boolean;
} & THREE.WebGLRenderTargetOptions;
export declare function useFBO(width?: number | FBOSettings, height?: number, settings?: FBOSettings): THREE.WebGLRenderTarget;
export {};
