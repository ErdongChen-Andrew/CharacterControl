import { Texture, Loader, CubeTexture, TextureEncoding } from 'three';
import { PresetsType } from '../helpers/environment-assets';
export declare type EnvironmentLoaderProps = {
    files?: string | string[];
    path?: string;
    preset?: PresetsType;
    extensions?: (loader: Loader) => void;
    encoding?: TextureEncoding;
};
export declare function useEnvironment({ files, path, preset, encoding, extensions, }?: Partial<EnvironmentLoaderProps>): Texture | CubeTexture;
