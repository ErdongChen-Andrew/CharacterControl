import { ReactThreeFiber } from '@react-three/fiber';
import * as React from 'react';
import * as THREE from 'three';
import { TrackballControls as TrackballControlsImpl } from 'three-stdlib';
export declare type TrackballControlsProps = ReactThreeFiber.Overwrite<ReactThreeFiber.Object3DNode<TrackballControlsImpl, typeof TrackballControlsImpl>, {
    target?: ReactThreeFiber.Vector3;
    camera?: THREE.Camera;
    domElement?: HTMLElement;
    regress?: boolean;
    makeDefault?: boolean;
    onChange?: (e?: THREE.Event) => void;
    onStart?: (e?: THREE.Event) => void;
    onEnd?: (e?: THREE.Event) => void;
}>;
export declare const TrackballControls: React.ForwardRefExoticComponent<Pick<TrackballControlsProps, "object" | "attach" | "args" | "children" | "key" | "onUpdate" | "position" | "up" | "scale" | "rotation" | "matrix" | "quaternion" | "layers" | "dispose" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "onChange" | keyof import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers | "camera" | "screen" | "reset" | "enabled" | "connect" | "update" | "target" | "domElement" | "onStart" | "keys" | "makeDefault" | "minDistance" | "maxDistance" | "zoomSpeed" | "rotateSpeed" | "panSpeed" | "mouseButtons" | "onEnd" | "regress" | "noRotate" | "noZoom" | "noPan" | "staticMoving" | "dynamicDampingFactor" | "cursorZoom" | "handleResize"> & React.RefAttributes<TrackballControlsImpl>>;
