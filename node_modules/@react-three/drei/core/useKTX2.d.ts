import { Texture } from 'three';
export declare function useKTX2<Url extends string[] | string | Record<string, string>>(input: Url, basisPath?: string): Url extends any[] ? Texture[] : Url extends object ? {
    [key in keyof Url]: Texture;
} : Texture;
export declare namespace useKTX2 {
    var preload: (url: string, basisPath?: string) => undefined;
    var clear: (input: string | string[]) => void;
}
