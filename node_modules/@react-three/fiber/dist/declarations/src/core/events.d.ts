import * as THREE from 'three';
import type { UseBoundStore } from 'zustand';
import type { RootState } from './store';
import type { Properties } from '../three-types';
export interface Intersection extends THREE.Intersection {
    eventObject: THREE.Object3D;
}
export interface IntersectionEvent<TSourceEvent> extends Intersection {
    eventObject: THREE.Object3D;
    intersections: Intersection[];
    unprojectedPoint: THREE.Vector3;
    pointer: THREE.Vector2;
    delta: number;
    ray: THREE.Ray;
    camera: Camera;
    stopPropagation: () => void;
    nativeEvent: TSourceEvent;
    stopped: boolean;
}
export declare type Camera = THREE.OrthographicCamera | THREE.PerspectiveCamera;
export declare type ThreeEvent<TEvent> = IntersectionEvent<TEvent> & Properties<TEvent>;
export declare type DomEvent = PointerEvent | MouseEvent | WheelEvent;
export declare type Events = {
    onClick: EventListener;
    onContextMenu: EventListener;
    onDoubleClick: EventListener;
    onWheel: EventListener;
    onPointerDown: EventListener;
    onPointerUp: EventListener;
    onPointerLeave: EventListener;
    onPointerMove: EventListener;
    onPointerCancel: EventListener;
    onLostPointerCapture: EventListener;
};
export declare type EventHandlers = {
    onClick?: (event: ThreeEvent<MouseEvent>) => void;
    onContextMenu?: (event: ThreeEvent<MouseEvent>) => void;
    onDoubleClick?: (event: ThreeEvent<MouseEvent>) => void;
    onPointerUp?: (event: ThreeEvent<PointerEvent>) => void;
    onPointerDown?: (event: ThreeEvent<PointerEvent>) => void;
    onPointerOver?: (event: ThreeEvent<PointerEvent>) => void;
    onPointerOut?: (event: ThreeEvent<PointerEvent>) => void;
    onPointerEnter?: (event: ThreeEvent<PointerEvent>) => void;
    onPointerLeave?: (event: ThreeEvent<PointerEvent>) => void;
    onPointerMove?: (event: ThreeEvent<PointerEvent>) => void;
    onPointerMissed?: (event: MouseEvent) => void;
    onPointerCancel?: (event: ThreeEvent<PointerEvent>) => void;
    onWheel?: (event: ThreeEvent<WheelEvent>) => void;
};
export declare type FilterFunction = (items: THREE.Intersection[], state: RootState) => THREE.Intersection[];
export declare type ComputeFunction = (event: DomEvent, root: RootState, previous?: RootState) => void;
export interface EventManager<TTarget> {
    enabled: boolean;
    priority: number;
    compute?: ComputeFunction;
    filter?: FilterFunction;
    connected?: TTarget;
    handlers?: Events;
    connect?: (target: TTarget) => void;
    disconnect?: () => void;
    update?: () => void;
}
export interface PointerCaptureTarget {
    intersection: Intersection;
    target: Element;
}
export declare function getEventPriority(): 1 | 16 | 4;
export declare function removeInteractivity(store: UseBoundStore<RootState>, object: THREE.Object3D): void;
export declare function createEvents(store: UseBoundStore<RootState>): {
    handlePointer: (name: string) => (event: DomEvent) => void;
};
