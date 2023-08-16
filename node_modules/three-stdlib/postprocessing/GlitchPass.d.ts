import { Pass, FullScreenQuad } from './Pass';
import { DataTexture, ShaderMaterial, WebGLRenderTarget, WebGLRenderer } from 'three';
declare class GlitchPass extends Pass {
    material: ShaderMaterial;
    fsQuad: FullScreenQuad;
    goWild: boolean;
    curF: number;
    randX: number;
    uniforms: any;
    constructor(dt_size?: number);
    render(renderer: WebGLRenderer, writeBuffer: WebGLRenderTarget, readBuffer: WebGLRenderTarget): void;
    generateTrigger(): void;
    generateHeightmap(dt_size: number): DataTexture;
}
export { GlitchPass };
