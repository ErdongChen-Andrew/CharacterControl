import type { OnScrollCallback } from './index';
/**
 * Whilst user's may not need the scrollLength, it's easier to return
 * the whole state we're storing and let them pick what they want.
 */
export interface ScrollAxis {
    current: number;
    progress: number;
    scrollLength: number;
}
export interface ScrollInfo {
    time: number;
    x: ScrollAxis;
    y: ScrollAxis;
}
/**
 * Why use a class? More extensible in the future.
 */
export declare class ScrollHandler {
    protected callback: OnScrollCallback;
    protected container: HTMLElement;
    protected info: ScrollInfo;
    constructor(callback: OnScrollCallback, container: HTMLElement);
    private createAxis;
    private updateAxis;
    private update;
    private sendEvent;
    advance: () => void;
}
