/// <reference types="react-reconciler" />
/// <reference types="offscreencanvas" />
import * as THREE from 'three';
import * as React from 'react';
import { UseBoundStore } from 'zustand';
import * as ReactThreeFiber from '../three-types';
import { Renderer, context, RootState, Size, Dpr, Performance, PrivateKeys } from './store';
import { extend, Root } from './renderer';
import { addEffect, addAfterEffect, addTail, flushGlobalEffects } from './loop';
import { EventManager, ComputeFunction } from './events';
import { dispose, getRootState, Camera } from './utils';
import type { Properties } from '../three-types';
declare type Canvas = HTMLCanvasElement | OffscreenCanvas;
declare const roots: Map<Canvas, Root>;
declare const invalidate: (state?: RootState | undefined, frames?: number) => void, advance: (timestamp: number, runGlobalEffects?: boolean, state?: RootState | undefined, frame?: THREE.XRFrame | undefined) => void;
declare const reconciler: import("react-reconciler").Reconciler<UseBoundStore<RootState, import("zustand").StoreApi<RootState>>, import("./renderer").Instance, void, import("./renderer").Instance, import("./renderer").Instance>, applyProps: typeof import("./utils").applyProps;
declare type GLProps = Renderer | ((canvas: Canvas) => Renderer) | Partial<Properties<THREE.WebGLRenderer> | THREE.WebGLRendererParameters> | undefined;
export declare type RenderProps<TCanvas extends Canvas> = {
    gl?: GLProps;
    size?: Size;
    shadows?: boolean | 'basic' | 'percentage' | 'soft' | 'variance' | Partial<THREE.WebGLShadowMap>;
    legacy?: boolean;
    linear?: boolean;
    flat?: boolean;
    orthographic?: boolean;
    frameloop?: 'always' | 'demand' | 'never';
    performance?: Partial<Omit<Performance, 'regress'>>;
    dpr?: Dpr;
    raycaster?: Partial<THREE.Raycaster>;
    scene?: THREE.Scene | Partial<ReactThreeFiber.Object3DNode<THREE.Scene, typeof THREE.Scene>>;
    camera?: (Camera | Partial<ReactThreeFiber.Object3DNode<THREE.Camera, typeof THREE.Camera> & ReactThreeFiber.Object3DNode<THREE.PerspectiveCamera, typeof THREE.PerspectiveCamera> & ReactThreeFiber.Object3DNode<THREE.OrthographicCamera, typeof THREE.OrthographicCamera>>) & {
        manual?: boolean;
    };
    events?: (store: UseBoundStore<RootState>) => EventManager<HTMLElement>;
    onCreated?: (state: RootState) => void;
    onPointerMissed?: (event: MouseEvent) => void;
};
export declare type ReconcilerRoot<TCanvas extends Canvas> = {
    configure: (config?: RenderProps<TCanvas>) => ReconcilerRoot<TCanvas>;
    render: (element: React.ReactNode) => UseBoundStore<RootState>;
    unmount: () => void;
};
declare function createRoot<TCanvas extends Canvas>(canvas: TCanvas): ReconcilerRoot<TCanvas>;
declare function render<TCanvas extends Canvas>(children: React.ReactNode, canvas: TCanvas, config: RenderProps<TCanvas>): UseBoundStore<RootState>;
declare function unmountComponentAtNode<TCanvas extends Canvas>(canvas: TCanvas, callback?: (canvas: TCanvas) => void): void;
export declare type InjectState = Partial<Omit<RootState, PrivateKeys> & {
    events?: {
        enabled?: boolean;
        priority?: number;
        compute?: ComputeFunction;
        connected?: any;
    };
    size?: Size;
}>;
declare function createPortal(children: React.ReactNode, container: THREE.Object3D, state?: InjectState): JSX.Element;
declare const act: any;
export * from './hooks';
export { context, render, createRoot, unmountComponentAtNode, createPortal, reconciler, applyProps, dispose, invalidate, advance, extend, addEffect, addAfterEffect, addTail, flushGlobalEffects, getRootState, act, roots as _roots, };
