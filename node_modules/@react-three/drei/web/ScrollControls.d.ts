import * as React from 'react';
export declare type ScrollControlsProps = {
    eps?: number;
    horizontal?: boolean;
    infinite?: boolean;
    pages?: number;
    distance?: number;
    damping?: number;
    maxSpeed?: number;
    enabled?: boolean;
    style?: React.CSSProperties;
    children: React.ReactNode;
};
export declare type ScrollControlsState = {
    el: HTMLDivElement;
    eps: number;
    fill: HTMLDivElement;
    fixed: HTMLDivElement;
    horizontal: boolean | undefined;
    damping: number;
    offset: number;
    delta: number;
    pages: number;
    range(from: number, distance: number, margin?: number): number;
    curve(from: number, distance: number, margin?: number): number;
    visible(from: number, distance: number, margin?: number): boolean;
};
export declare function useScroll(): ScrollControlsState;
export declare function ScrollControls({ eps, enabled, infinite, horizontal, pages, distance, damping, maxSpeed, style, children, }: ScrollControlsProps): JSX.Element;
declare type ScrollProps = {
    html?: boolean;
    children?: React.ReactNode;
};
export declare const Scroll: React.ForwardRefExoticComponent<ScrollProps & React.RefAttributes<unknown>>;
export {};
