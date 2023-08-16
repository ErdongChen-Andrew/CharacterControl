/// <reference types="react" />
import { ThreeEvent } from '@react-three/fiber';
declare type GenericProps = {
    font?: string;
    opacity?: number;
    color?: string;
    hoverColor?: string;
    textColor?: string;
    strokeColor?: string;
    onClick?: (e: ThreeEvent<MouseEvent>) => null;
    faces?: string[];
};
export declare const GizmoViewcube: (props: GenericProps) => JSX.Element;
export {};
