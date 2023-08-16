import { Pass, FullScreenQuad } from './Pass';
import { ShaderMaterial, Vector2, WebGLRenderer, WebGLRenderTarget } from 'three';
declare class DotScreenPass extends Pass {
    material: ShaderMaterial;
    fsQuad: FullScreenQuad;
    uniforms: any;
    constructor(center?: Vector2, angle?: number, scale?: number);
    render(renderer: WebGLRenderer, writeBuffer: WebGLRenderTarget, readBuffer: WebGLRenderTarget): void;
}
export { DotScreenPass };
