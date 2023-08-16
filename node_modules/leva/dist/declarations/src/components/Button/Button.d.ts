import { ButtonInput } from '../../types';
declare type ButtonProps = {
    label: string;
} & Omit<ButtonInput, 'type'>;
export declare function Button({ onClick, settings, label }: ButtonProps): JSX.Element;
export {};
