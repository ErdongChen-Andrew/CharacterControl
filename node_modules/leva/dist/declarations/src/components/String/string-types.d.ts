import type { InputWithSettings, LevaInputProps } from '../../types';
export declare type StringSettings = {
    editable?: boolean;
    rows?: boolean | number;
};
export declare type InternalStringSettings = {
    editable: boolean;
    rows: number;
};
export declare type StringInput = InputWithSettings<string, StringSettings>;
export declare type StringProps = LevaInputProps<string, InternalStringSettings>;
