import * as THREE from 'three';
import * as React from 'react';
import { ReactThreeFiber } from '@react-three/fiber';
import { Line2 } from 'three-stdlib';
declare type SegmentsProps = {
    limit?: number;
    lineWidth?: number;
    children: React.ReactNode;
};
declare type SegmentProps = Omit<JSX.IntrinsicElements['segmentObject'], 'start' | 'end' | 'color'> & {
    start: ReactThreeFiber.Vector3;
    end: ReactThreeFiber.Vector3;
    color?: ReactThreeFiber.Color;
};
declare const Segments: React.ForwardRefExoticComponent<SegmentsProps & React.RefAttributes<Line2>>;
declare global {
    namespace JSX {
        interface IntrinsicElements {
            segmentObject: ReactThreeFiber.Object3DNode<SegmentObject, typeof SegmentObject>;
        }
    }
}
export declare class SegmentObject {
    color: THREE.Color;
    start: THREE.Vector3;
    end: THREE.Vector3;
    constructor();
}
declare const Segment: React.ForwardRefExoticComponent<Pick<SegmentProps, "attach" | "args" | "children" | "key" | "onUpdate" | "position" | "up" | "scale" | "rotation" | "matrix" | "quaternion" | "layers" | "dispose" | "color" | keyof import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers | "end" | "start"> & React.RefAttributes<SegmentObject>>;
export { Segments, Segment };
