import { Pass, FullScreenQuad } from './Pass';
import { ShaderMaterial, Vector2, WebGLRenderer, WebGLRenderTarget } from 'three';
declare class BloomPass extends Pass {
    renderTargetX: WebGLRenderTarget;
    renderTargetY: WebGLRenderTarget;
    materialCombine: ShaderMaterial;
    materialConvolution: ShaderMaterial;
    fsQuad: FullScreenQuad;
    combineUniforms: any;
    convolutionUniforms: any;
    blurX: Vector2;
    blurY: Vector2;
    constructor(strength?: number, kernelSize?: number, sigma?: number, resolution?: number);
    render(renderer: WebGLRenderer, writeBuffer: WebGLRenderTarget, readBuffer: WebGLRenderTarget, deltaTime: number, maskActive: boolean): void;
}
export { BloomPass };
