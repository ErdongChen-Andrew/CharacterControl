import { ShaderMaterial, Vector2 } from 'three';
export declare class ConvolutionMaterial extends ShaderMaterial {
    readonly kernel: Float32Array;
    constructor(texelSize?: Vector2);
    setTexelSize(x: number, y: number): void;
    setResolution(resolution: Vector2): void;
}
