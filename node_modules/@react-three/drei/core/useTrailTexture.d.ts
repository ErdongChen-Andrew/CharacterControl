import { Texture } from 'three';
declare type TrailConfig = {
    size?: number;
    maxAge?: number;
    radius?: number;
    intensity?: number;
    interpolate?: number;
    smoothing?: number;
    minForce?: number;
    blend?: CanvasRenderingContext2D['globalCompositeOperation'];
    ease?: (t: number) => number;
};
export declare function useTrailTexture(config?: Partial<TrailConfig>): [Texture, (ThreeEvent: any) => void];
export {};
