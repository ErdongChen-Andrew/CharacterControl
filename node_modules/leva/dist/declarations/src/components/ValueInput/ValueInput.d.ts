import React from 'react';
export declare type ValueInputProps = {
    id?: string;
    value: string;
    innerLabel?: false | React.ReactNode;
    type?: 'number';
    inputType?: string;
    onUpdate: (value: any) => void;
    onChange: (value: string) => void;
    onKeyDown?: (event: React.KeyboardEvent) => void;
    rows?: number;
};
export declare function ValueInput({ innerLabel, value, onUpdate, onChange, onKeyDown, type, id, inputType, rows, ...props }: ValueInputProps): JSX.Element;
export declare function NumberInput({ onUpdate, ...props }: ValueInputProps): JSX.Element;
