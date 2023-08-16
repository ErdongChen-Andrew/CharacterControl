import * as React from 'react';
import { Group, Object3D, Camera } from 'three';
import { Assign } from 'utility-types';
import { ReactThreeFiber } from '@react-three/fiber';
declare function defaultCalculatePosition(el: Object3D, camera: Camera, size: {
    width: number;
    height: number;
}): number[];
export declare type CalculatePosition = typeof defaultCalculatePosition;
declare type PointerEventsProperties = 'auto' | 'none' | 'visiblePainted' | 'visibleFill' | 'visibleStroke' | 'visible' | 'painted' | 'fill' | 'stroke' | 'all' | 'inherit';
export interface HtmlProps extends Omit<Assign<React.HTMLAttributes<HTMLDivElement>, ReactThreeFiber.Object3DNode<Group, typeof Group>>, 'ref'> {
    prepend?: boolean;
    center?: boolean;
    fullscreen?: boolean;
    eps?: number;
    portal?: React.MutableRefObject<HTMLElement>;
    distanceFactor?: number;
    sprite?: boolean;
    transform?: boolean;
    zIndexRange?: Array<number>;
    calculatePosition?: CalculatePosition;
    as?: string;
    wrapperClass?: string;
    pointerEvents?: PointerEventsProperties;
    occlude?: React.RefObject<Object3D>[] | boolean | 'raycast' | 'blending';
    onOcclude?: (visible: boolean) => null;
    material?: React.ReactNode;
    geometry?: React.ReactNode;
    castShadow?: boolean;
    receiveShadow?: boolean;
}
export declare const Html: React.ForwardRefExoticComponent<HtmlProps & React.RefAttributes<HTMLDivElement>>;
export {};
