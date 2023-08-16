import { GLTFLoader, GLTF } from 'three-stdlib';
export declare function useGLTF<T extends string | string[]>(path: T, useDraco?: boolean | string, useMeshOpt?: boolean, extendLoader?: (loader: GLTFLoader) => void): T extends any[] ? GLTF[] : GLTF;
export declare namespace useGLTF {
    var preload: (path: string | string[], useDraco?: string | boolean, useMeshOpt?: boolean, extendLoader?: ((loader: GLTFLoader) => void) | undefined) => undefined;
    var clear: (input: string | string[]) => void;
}
