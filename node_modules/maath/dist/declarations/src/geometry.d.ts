import * as THREE from "three";
export declare class RoundedPlaneGeometry extends THREE.BufferGeometry {
    constructor(width?: number, height?: number, radius?: number, segments?: number);
}
export declare function applySphereUV(bufferGeometry: THREE.BufferGeometry): THREE.BufferGeometry;
export declare function applyBoxUV(bufferGeometry: THREE.BufferGeometry): THREE.BufferGeometry;
