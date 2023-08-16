/// <reference types="react" />
import { EnvironmentProps } from './Environment';
import { ContactShadowsProps } from './ContactShadows';
import { CenterProps } from './Center';
import { AccumulativeShadowsProps, RandomizedLightProps } from './AccumulativeShadows';
import { PresetsType } from '../helpers/environment-assets';
declare type StageShadows = Partial<AccumulativeShadowsProps> & Partial<RandomizedLightProps> & Partial<ContactShadowsProps> & {
    type: 'contact' | 'accumulative';
    offset?: number;
    bias?: number;
    normalBias?: number;
    size?: number;
};
declare type StageProps = {
    preset?: 'rembrandt' | 'portrait' | 'upfront' | 'soft' | {
        main: [x: number, y: number, z: number];
        fill: [x: number, y: number, z: number];
    };
    shadows?: boolean | 'contact' | 'accumulative' | StageShadows;
    adjustCamera?: boolean | number;
    environment?: PresetsType | Partial<EnvironmentProps>;
    intensity?: number;
    center?: Partial<CenterProps>;
};
export declare function Stage({ children, center, adjustCamera, intensity, shadows, environment, preset, ...props }: JSX.IntrinsicElements['group'] & StageProps): JSX.Element;
export {};
