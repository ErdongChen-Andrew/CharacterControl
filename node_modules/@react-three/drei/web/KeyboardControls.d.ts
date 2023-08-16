import * as React from 'react';
import { StoreApi } from 'zustand';
declare type State = object;
declare type StateSelector<T extends State, U> = (state: T) => U;
declare type EqualityChecker<T> = (state: T, newState: T) => boolean;
declare type StateListener<T> = (state: T, previousState: T) => void;
declare type StoreApiWithSubscribeWithSelector<T extends State> = Omit<StoreApi<T>, 'subscribe'> & {
    subscribe: {
        (listener: StateListener<T>): () => void;
        <StateSlice>(selector: StateSelector<T, StateSlice>, listener: StateListener<StateSlice>, options?: {
            equalityFn?: EqualityChecker<StateSlice>;
            fireImmediately?: boolean;
        }): () => void;
    };
};
declare type KeyboardControlsState<T extends string = string> = {
    [K in T]: boolean;
};
export declare type KeyboardControlsEntry<T extends string = string> = {
    name: T;
    keys: string[];
    up?: boolean;
};
declare type KeyboardControlsProps = {
    map: KeyboardControlsEntry[];
    children: React.ReactNode;
    onChange?: (name: string, pressed: boolean, state: KeyboardControlsState) => void;
    domElement?: HTMLElement;
};
export declare function KeyboardControls({ map, children, onChange, domElement }: KeyboardControlsProps): JSX.Element;
declare type Selector<T extends string = string> = (state: KeyboardControlsState<T>) => boolean;
export declare function useKeyboardControls<T extends string = string>(): [
    StoreApiWithSubscribeWithSelector<KeyboardControlsState<T>>['subscribe'],
    StoreApiWithSubscribeWithSelector<KeyboardControlsState<T>>['getState']
];
export declare function useKeyboardControls<T extends string = string>(sel: Selector<T>): ReturnType<Selector<T>>;
export {};
