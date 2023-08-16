import { RefObject } from 'react';
import { Lookup } from '@react-spring/types';
import { PickAnimated, SpringValues } from '../types';
import { UseSpringProps } from './useSpring';
import { Valid } from '../types/common';
export interface IntersectionArgs extends Omit<IntersectionObserverInit, 'root' | 'threshold'> {
    root?: React.MutableRefObject<HTMLElement>;
    once?: boolean;
    amount?: 'any' | 'all' | number | number[];
}
export declare function useInView(args?: IntersectionArgs): [RefObject<any>, boolean];
export declare function useInView<Props extends object>(
/**
 * TODO: make this narrower to only accept reserved props.
 */
props: () => Props & Valid<Props, UseSpringProps<Props>>, args?: IntersectionArgs): PickAnimated<Props> extends infer State ? State extends Lookup ? [RefObject<any>, SpringValues<State>] : never : never;
