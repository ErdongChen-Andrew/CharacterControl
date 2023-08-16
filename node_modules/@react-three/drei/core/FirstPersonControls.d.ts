import * as React from 'react';
import { Object3DNode } from '@react-three/fiber';
import { FirstPersonControls as FirstPersonControlImpl } from 'three-stdlib';
export declare type FirstPersonControlsProps = Object3DNode<FirstPersonControlImpl, typeof FirstPersonControlImpl> & {
    domElement?: HTMLElement;
    makeDefault?: boolean;
};
export declare const FirstPersonControls: React.ForwardRefExoticComponent<Pick<FirstPersonControlsProps, "object" | "attach" | "args" | "children" | "key" | "onUpdate" | "position" | "up" | "scale" | "rotation" | "matrix" | "quaternion" | "layers" | "dispose" | "lookAt" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | keyof import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers | "enabled" | "connect" | "update" | "domElement" | "makeDefault" | "movementSpeed" | "autoForward" | "handleResize" | "lookSpeed" | "lookVertical" | "activeLook" | "heightSpeed" | "heightCoef" | "heightMin" | "heightMax" | "constrainVertical" | "verticalMin" | "verticalMax" | "mouseDragOn"> & React.RefAttributes<FirstPersonControlImpl>>;
