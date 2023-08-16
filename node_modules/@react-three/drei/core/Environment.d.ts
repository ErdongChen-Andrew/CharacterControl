import * as React from 'react';
import { Object3DNode } from '@react-three/fiber';
import { Scene } from 'three';
import { GroundProjectedEnv as GroundProjectedEnvImpl } from 'three-stdlib';
import { PresetsType } from '../helpers/environment-assets';
import { EnvironmentLoaderProps } from './useEnvironment';
export declare type EnvironmentProps = {
    children?: React.ReactNode;
    frames?: number;
    near?: number;
    far?: number;
    resolution?: number;
    background?: boolean | 'only';
    blur?: number;
    map?: THREE.Texture;
    preset?: PresetsType;
    scene?: Scene | React.MutableRefObject<THREE.Scene>;
    ground?: boolean | {
        radius?: number;
        height?: number;
        scale?: number;
    };
} & EnvironmentLoaderProps;
export declare function EnvironmentMap({ scene, background, blur, map }: EnvironmentProps): null;
export declare function EnvironmentCube({ background, scene, blur, ...rest }: EnvironmentProps): null;
export declare function EnvironmentPortal({ children, near, far, resolution, frames, map, background, blur, scene, files, path, preset, extensions, }: EnvironmentProps): JSX.Element;
declare global {
    namespace JSX {
        interface IntrinsicElements {
            groundProjectedEnvImpl: Object3DNode<GroundProjectedEnvImpl, typeof GroundProjectedEnvImpl>;
        }
    }
}
export declare function Environment(props: EnvironmentProps): JSX.Element;
