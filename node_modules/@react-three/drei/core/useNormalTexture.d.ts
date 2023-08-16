import { Texture } from 'three';
declare type Settings = {
    repeat?: number[];
    anisotropy?: number;
    offset?: number[];
};
export declare function useNormalTexture(id?: number, settings?: Settings, onLoad?: (texture: Texture | Texture[]) => void): [Texture, string, number];
export {};
