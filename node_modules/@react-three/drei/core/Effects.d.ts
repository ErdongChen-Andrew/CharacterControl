import * as React from 'react';
import { WebGLRenderTarget } from 'three';
import { ReactThreeFiber } from '@react-three/fiber';
import { EffectComposer, RenderPass, ShaderPass } from 'three-stdlib';
declare global {
    namespace JSX {
        interface IntrinsicElements {
            effectComposer: ReactThreeFiber.Node<EffectComposer, typeof EffectComposer>;
            renderPass: ReactThreeFiber.Node<RenderPass, typeof RenderPass>;
            shaderPass: ReactThreeFiber.Node<ShaderPass, typeof ShaderPass>;
        }
    }
}
export declare const isWebGL2Available: () => boolean;
export declare const Effects: React.ForwardRefExoticComponent<Pick<ReactThreeFiber.ExtendedColors<ReactThreeFiber.Overwrite<Partial<EffectComposer<WebGLRenderTarget>>, ReactThreeFiber.NodeProps<EffectComposer<WebGLRenderTarget>, typeof EffectComposer>>> & {
    multisamping?: number | undefined;
    encoding?: number | undefined;
    type?: number | undefined;
    renderIndex?: number | undefined;
    disableGamma?: boolean | undefined;
    disableRenderPass?: boolean | undefined;
    disableRender?: boolean | undefined;
    depthBuffer?: boolean | undefined;
    stencilBuffer?: boolean | undefined;
    anisotropy?: number | undefined;
}, "attach" | "args" | "children" | "key" | "onUpdate" | "type" | "anisotropy" | "encoding" | keyof EffectComposer<WebGLRenderTarget> | "multisamping" | "renderIndex" | "disableRender" | "disableGamma" | "disableRenderPass" | "depthBuffer" | "stencilBuffer"> & React.RefAttributes<unknown>>;
