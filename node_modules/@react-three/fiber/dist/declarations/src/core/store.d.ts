/// <reference types="webxr" />
import * as THREE from 'three';
import * as React from 'react';
import { GetState, SetState, StoreApi, UseBoundStore } from 'zustand';
import { DomEvent, EventManager, PointerCaptureTarget, ThreeEvent } from './events';
import { Camera } from './utils';
export declare const privateKeys: readonly ["set", "get", "setSize", "setFrameloop", "setDpr", "events", "invalidate", "advance", "size", "viewport"];
export declare type PrivateKeys = typeof privateKeys[number];
export interface Intersection extends THREE.Intersection {
    eventObject: THREE.Object3D;
}
export declare type Subscription = {
    ref: React.MutableRefObject<RenderCallback>;
    priority: number;
    store: UseBoundStore<RootState, StoreApi<RootState>>;
};
export declare type Dpr = number | [min: number, max: number];
export declare type Size = {
    width: number;
    height: number;
    top: number;
    left: number;
    updateStyle?: boolean;
};
export declare type Viewport = Size & {
    initialDpr: number;
    dpr: number;
    factor: number;
    distance: number;
    aspect: number;
};
export declare type RenderCallback = (state: RootState, delta: number, frame?: THREE.XRFrame) => void;
export declare type Performance = {
    current: number;
    min: number;
    max: number;
    debounce: number;
    regress: () => void;
};
export declare type Renderer = {
    render: (scene: THREE.Scene, camera: THREE.Camera) => any;
};
export declare const isRenderer: (def: any) => boolean;
export declare type InternalState = {
    active: boolean;
    priority: number;
    frames: number;
    lastEvent: React.MutableRefObject<DomEvent | null>;
    interaction: THREE.Object3D[];
    hovered: Map<string, ThreeEvent<DomEvent>>;
    subscribers: Subscription[];
    capturedMap: Map<number, Map<THREE.Object3D, PointerCaptureTarget>>;
    initialClick: [x: number, y: number];
    initialHits: THREE.Object3D[];
    subscribe: (callback: React.MutableRefObject<RenderCallback>, priority: number, store: UseBoundStore<RootState, StoreApi<RootState>>) => () => void;
};
export declare type RootState = {
    set: SetState<RootState>;
    get: GetState<RootState>;
    gl: THREE.WebGLRenderer;
    camera: Camera & {
        manual?: boolean;
    };
    scene: THREE.Scene;
    raycaster: THREE.Raycaster;
    clock: THREE.Clock;
    events: EventManager<any>;
    xr: {
        connect: () => void;
        disconnect: () => void;
    };
    controls: THREE.EventDispatcher | null;
    pointer: THREE.Vector2;
    mouse: THREE.Vector2;
    legacy: boolean;
    linear: boolean;
    flat: boolean;
    frameloop: 'always' | 'demand' | 'never';
    performance: Performance;
    size: Size;
    viewport: Viewport & {
        getCurrentViewport: (camera?: Camera, target?: THREE.Vector3 | Parameters<THREE.Vector3['set']>, size?: Size) => Omit<Viewport, 'dpr' | 'initialDpr'>;
    };
    invalidate: (frames?: number) => void;
    advance: (timestamp: number, runGlobalEffects?: boolean) => void;
    setEvents: (events: Partial<EventManager<any>>) => void;
    setSize: (width: number, height: number, updateStyle?: boolean, top?: number, left?: number) => void;
    setDpr: (dpr: Dpr) => void;
    setFrameloop: (frameloop?: 'always' | 'demand' | 'never') => void;
    onPointerMissed?: (event: MouseEvent) => void;
    previousRoot?: UseBoundStore<RootState, StoreApi<RootState>>;
    internal: InternalState;
};
declare const context: React.Context<UseBoundStore<RootState, StoreApi<RootState>>>;
declare const createStore: (invalidate: (state?: RootState | undefined, frames?: number | undefined) => void, advance: (timestamp: number, runGlobalEffects?: boolean | undefined, state?: RootState | undefined, frame?: THREE.XRFrame | undefined) => void) => UseBoundStore<RootState>;
export { createStore, context };
