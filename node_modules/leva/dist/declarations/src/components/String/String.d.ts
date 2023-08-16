import { ValueInputProps } from '../ValueInput';
import type { StringProps } from './string-types';
declare type BaseStringProps = Pick<StringProps, 'displayValue' | 'onUpdate' | 'onChange'> & Omit<ValueInputProps, 'value'> & {
    editable?: boolean;
};
export declare function String({ displayValue, onUpdate, onChange, editable, ...props }: BaseStringProps): JSX.Element;
export declare function StringComponent(): JSX.Element;
export {};
