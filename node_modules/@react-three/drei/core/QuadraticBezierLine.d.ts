import * as React from 'react';
import { Vector3 } from 'three';
import { Line2 } from 'three-stdlib';
import { LineProps } from './Line';
import { Object3DNode } from '@react-three/fiber';
declare type Line2Props = Object3DNode<Line2, typeof Line2> & {
    setPoints: (start: Vector3 | [number, number, number], end: Vector3 | [number, number, number], mid: Vector3 | [number, number, number]) => void;
};
export declare const QuadraticBezierLine: React.ForwardRefExoticComponent<Omit<LineProps, "ref" | "points"> & {
    start: Vector3 | [number, number, number];
    end: Vector3 | [number, number, number];
    mid?: Vector3 | [number, number, number] | undefined;
    segments?: number | undefined;
} & React.RefAttributes<Line2Props>>;
export {};
