import * as React from 'react';
import type { Options as ResizeOptions } from 'react-use-measure';
import { RenderProps } from '../core';
export interface CanvasProps extends Omit<RenderProps<HTMLCanvasElement>, 'size'>, React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    fallback?: React.ReactNode;
    resize?: ResizeOptions;
    eventSource?: HTMLElement | React.MutableRefObject<HTMLElement>;
    eventPrefix?: 'offset' | 'client' | 'page' | 'layer' | 'screen';
}
export interface Props extends CanvasProps {
}
export declare const Canvas: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLCanvasElement>>;
