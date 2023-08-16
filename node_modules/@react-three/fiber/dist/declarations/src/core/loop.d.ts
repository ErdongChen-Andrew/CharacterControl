import * as THREE from 'three';
import { Root } from './renderer';
import { RootState } from './store';
export declare type GlobalRenderCallback = (timeStamp: number) => void;
export declare const addEffect: (callback: GlobalRenderCallback) => () => void;
export declare const addAfterEffect: (callback: GlobalRenderCallback) => () => void;
export declare const addTail: (callback: GlobalRenderCallback) => () => void;
export declare type GlobalEffectType = 'before' | 'after' | 'tail';
export declare function flushGlobalEffects(type: GlobalEffectType, timestamp: number): void;
export declare function createLoop<TCanvas>(roots: Map<TCanvas, Root>): {
    loop: (timestamp: number) => void;
    invalidate: (state?: RootState | undefined, frames?: number) => void;
    advance: (timestamp: number, runGlobalEffects?: boolean, state?: RootState | undefined, frame?: THREE.XRFrame | undefined) => void;
};
