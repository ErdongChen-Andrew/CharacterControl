import { UseBoundStore } from 'zustand';
import { RootState } from '../core/store';
import { EventManager } from '../core/events';
export declare function createTouchEvents(store: UseBoundStore<RootState>): EventManager<HTMLElement>;
