import * as THREE from 'three';
import * as React from 'react';
export declare const RenderTexture: React.ForwardRefExoticComponent<Pick<import("@react-three/fiber").ExtendedColors<import("@react-three/fiber").Overwrite<Partial<THREE.Texture>, import("@react-three/fiber").NodeProps<THREE.Texture, typeof THREE.Texture>>> & {
    width?: number | undefined;
    height?: number | undefined;
    samples?: number | undefined;
    stencilBuffer?: boolean | undefined;
    depthBuffer?: boolean | undefined;
    generateMipmaps?: boolean | undefined;
    renderPriority?: number | undefined;
    eventPriority?: number | undefined;
    frames?: number | undefined;
    compute?: ((event: any, state: any, previous: any) => false | undefined) | undefined;
    children: React.ReactNode;
}, "attach" | "args" | "children" | "key" | "onUpdate" | "rotation" | "matrix" | "dispose" | "type" | "id" | "uuid" | "name" | "matrixAutoUpdate" | "userData" | "updateMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "center" | "source" | "repeat" | "image" | "needsUpdate" | "version" | "offset" | "width" | "height" | "sourceFile" | "mipmaps" | "mapping" | "wrapS" | "wrapT" | "magFilter" | "minFilter" | "anisotropy" | "format" | "internalFormat" | "generateMipmaps" | "premultiplyAlpha" | "flipY" | "unpackAlignment" | "encoding" | "isRenderTargetTexture" | "needsPMREMUpdate" | "isTexture" | "transformUv" | "compute" | "depthBuffer" | "stencilBuffer" | "samples" | "frames" | "renderPriority" | "eventPriority"> & React.RefAttributes<unknown>>;
