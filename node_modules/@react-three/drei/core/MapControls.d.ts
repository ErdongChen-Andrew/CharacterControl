import { ReactThreeFiber } from '@react-three/fiber';
import * as React from 'react';
import * as THREE from 'three';
import { MapControls as MapControlsImpl } from 'three-stdlib';
export declare type MapControlsProps = ReactThreeFiber.Overwrite<ReactThreeFiber.Object3DNode<MapControlsImpl, typeof MapControlsImpl>, {
    target?: ReactThreeFiber.Vector3;
    camera?: THREE.Camera;
    makeDefault?: boolean;
    onChange?: (e?: THREE.Event) => void;
    onStart?: (e?: THREE.Event) => void;
    onEnd?: (e?: THREE.Event) => void;
    domElement?: HTMLElement;
}>;
export declare const MapControls: React.ForwardRefExoticComponent<Pick<MapControlsProps, "object" | "attach" | "args" | "children" | "key" | "onUpdate" | "position" | "up" | "scale" | "rotation" | "matrix" | "quaternion" | "layers" | "dispose" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "onChange" | keyof import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers | "camera" | "reset" | "enabled" | "connect" | "update" | "target" | "domElement" | "onStart" | "keys" | "touches" | "makeDefault" | "minDistance" | "maxDistance" | "minZoom" | "maxZoom" | "minPolarAngle" | "maxPolarAngle" | "minAzimuthAngle" | "maxAzimuthAngle" | "enableDamping" | "dampingFactor" | "enableZoom" | "zoomSpeed" | "enableRotate" | "rotateSpeed" | "enablePan" | "panSpeed" | "screenSpacePanning" | "keyPanSpeed" | "autoRotate" | "autoRotateSpeed" | "reverseOrbit" | "mouseButtons" | "target0" | "position0" | "zoom0" | "_domElementKeyEvents" | "getPolarAngle" | "getAzimuthalAngle" | "setPolarAngle" | "setAzimuthalAngle" | "getDistance" | "listenToKeyEvents" | "saveState" | "onEnd"> & React.RefAttributes<MapControlsImpl>>;
