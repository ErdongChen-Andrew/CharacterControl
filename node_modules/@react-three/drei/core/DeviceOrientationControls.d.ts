import { ReactThreeFiber } from '@react-three/fiber';
import * as React from 'react';
import * as THREE from 'three';
import { DeviceOrientationControls as DeviceOrientationControlsImp } from 'three-stdlib';
export declare type DeviceOrientationControlsProps = ReactThreeFiber.Object3DNode<DeviceOrientationControlsImp, typeof DeviceOrientationControlsImp> & {
    camera?: THREE.Camera;
    onChange?: (e?: THREE.Event) => void;
    makeDefault?: boolean;
};
export declare const DeviceOrientationControls: React.ForwardRefExoticComponent<Pick<DeviceOrientationControlsProps, "object" | "attach" | "args" | "children" | "key" | "onUpdate" | "position" | "up" | "scale" | "rotation" | "matrix" | "quaternion" | "layers" | "dispose" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "onChange" | keyof import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers | "camera" | "enabled" | "connect" | "disconnect" | "update" | "makeDefault" | "deviceOrientation" | "screenOrientation" | "alphaOffset"> & React.RefAttributes<DeviceOrientationControlsImp>>;
