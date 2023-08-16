import type { Controller } from './Controller';
import { GestureKey } from './types';
export declare class EventStore {
    private _listeners;
    private _ctrl;
    private _gestureKey?;
    constructor(ctrl: Controller, gestureKey?: GestureKey);
    add(element: EventTarget, device: string, action: string, handler: (event: any) => void, options?: AddEventListenerOptions): () => void;
    clean(): void;
}
