import * as THREE from 'three';
import { Fog, FogExp2 } from 'three';
export declare type CubeCameraOptions = {
    resolution?: number;
    near?: number;
    far?: number;
    envMap?: THREE.Texture;
    fog?: Fog | FogExp2;
};
export declare function useCubeCamera({ resolution, near, far, envMap, fog }?: CubeCameraOptions): {
    fbo: THREE.WebGLCubeRenderTarget;
    camera: THREE.CubeCamera;
    update: () => void;
};
