import { ReactThreeFiber } from '@react-three/fiber';
import * as React from 'react';
import * as THREE from 'three';
import { FlyControls as FlyControlsImpl } from 'three-stdlib';
export declare type FlyControlsProps = ReactThreeFiber.Object3DNode<FlyControlsImpl, typeof FlyControlsImpl> & {
    onChange?: (e?: THREE.Event) => void;
    domElement?: HTMLElement;
    makeDefault?: boolean;
};
export declare const FlyControls: React.ForwardRefExoticComponent<Pick<FlyControlsProps, "object" | "attach" | "args" | "children" | "key" | "onUpdate" | "position" | "up" | "scale" | "rotation" | "matrix" | "quaternion" | "layers" | "dispose" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "onChange" | keyof import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers | "connect" | "update" | "domElement" | "makeDefault" | "movementSpeed" | "rollSpeed" | "dragToLook" | "autoForward"> & React.RefAttributes<FlyControlsImpl>>;
