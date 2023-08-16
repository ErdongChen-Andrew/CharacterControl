import * as THREE from 'three';
interface VideoTextureProps extends HTMLVideoElement {
    unsuspend?: 'canplay' | 'canplaythrough' | 'loadstart' | 'loadedmetadata';
    start?: boolean;
}
export declare function useVideoTexture(src: string | MediaStream, props?: Partial<VideoTextureProps>): THREE.VideoTexture;
export {};
