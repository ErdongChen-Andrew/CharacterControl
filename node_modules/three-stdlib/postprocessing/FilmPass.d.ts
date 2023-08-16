import { Pass, FullScreenQuad } from './Pass';
import { ShaderMaterial, WebGLRenderer, WebGLRenderTarget } from 'three';
declare class FilmPass extends Pass {
    material: ShaderMaterial;
    fsQuad: FullScreenQuad;
    uniforms: any;
    constructor(noiseIntensity?: number, scanlinesIntensity?: number, scanlinesCount?: number, grayscale?: boolean);
    render(renderer: WebGLRenderer, writeBuffer: WebGLRenderTarget, readBuffer: WebGLRenderTarget, deltaTime: number): void;
}
export { FilmPass };
