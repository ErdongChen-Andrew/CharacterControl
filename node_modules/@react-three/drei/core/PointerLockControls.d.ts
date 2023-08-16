import { ReactThreeFiber } from '@react-three/fiber';
import * as React from 'react';
import * as THREE from 'three';
import { PointerLockControls as PointerLockControlsImpl } from 'three-stdlib';
export declare type PointerLockControlsProps = ReactThreeFiber.Object3DNode<PointerLockControlsImpl, typeof PointerLockControlsImpl> & {
    domElement?: HTMLElement;
    selector?: string;
    enabled?: boolean;
    camera?: THREE.Camera;
    onChange?: (e?: THREE.Event) => void;
    onLock?: (e?: THREE.Event) => void;
    onUnlock?: (e?: THREE.Event) => void;
    makeDefault?: boolean;
};
export declare const PointerLockControls: React.ForwardRefExoticComponent<Pick<PointerLockControlsProps, "attach" | "args" | "children" | "key" | "onUpdate" | "position" | "up" | "scale" | "rotation" | "matrix" | "quaternion" | "layers" | "dispose" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "onChange" | keyof import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers | "camera" | "enabled" | "connect" | "disconnect" | "domElement" | "makeDefault" | "minPolarAngle" | "maxPolarAngle" | "isLocked" | "pointerSpeed" | "getObject" | "getDirection" | "moveForward" | "moveRight" | "lock" | "unlock" | "selector" | "onLock" | "onUnlock"> & React.RefAttributes<PointerLockControlsImpl>>;
