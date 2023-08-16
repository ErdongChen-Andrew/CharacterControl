import { BufferAttributeProps } from '@react-three/fiber';
import * as React from 'react';
import { BufferAttribute, BufferGeometry } from 'three';
declare type Props = {
    compute: (geometry: BufferGeometry) => BufferAttribute;
    name: string;
};
export declare const ComputedAttribute: ({ compute, name, ...props }: React.PropsWithChildren<Props & BufferAttributeProps>) => JSX.Element;
export {};
