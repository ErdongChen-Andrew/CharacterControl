import * as THREE from 'three';
export interface MeshLineMaterialParameters {
    lineWidth?: number;
    map?: THREE.Texture;
    useMap?: number;
    alphaMap?: THREE.Texture;
    useAlphaMap?: number;
    color?: string | THREE.Color | number;
    opacity?: number;
    resolution: THREE.Vector2;
    sizeAttenuation?: number;
    dashArray?: number;
    dashOffset?: number;
    dashRatio?: number;
    useDash?: number;
    visibility?: number;
    alphaTest?: number;
    repeat?: THREE.Vector2;
}
export declare class MeshLineMaterial extends THREE.ShaderMaterial implements MeshLineMaterialParameters {
    lineWidth: number;
    map: THREE.Texture;
    useMap: number;
    alphaMap: THREE.Texture;
    useAlphaMap: number;
    color: THREE.Color;
    opacity: number;
    resolution: THREE.Vector2;
    sizeAttenuation: number;
    dashArray: number;
    dashOffset: number;
    dashRatio: number;
    useDash: number;
    visibility: number;
    alphaTest: number;
    repeat: THREE.Vector2;
    constructor(parameters: MeshLineMaterialParameters);
    copy(source: MeshLineMaterial): this;
}
