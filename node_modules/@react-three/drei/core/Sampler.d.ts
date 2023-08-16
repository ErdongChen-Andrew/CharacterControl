import * as React from 'react';
import { Color, InstancedBufferAttribute, InstancedMesh, Mesh, Object3D, Vector3 } from 'three';
import { GroupProps } from '@react-three/fiber';
declare type SamplePayload = {
    position: Vector3;
    normal: Vector3;
    color: Color;
};
export declare type TransformFn = (payload: TransformPayload, i: number) => void;
declare type TransformPayload = SamplePayload & {
    dummy: Object3D;
    sampledMesh: Mesh;
};
declare type Props = {
    mesh?: React.RefObject<Mesh>;
    instances?: React.RefObject<InstancedMesh>;
    weight?: string;
    transform?: TransformFn;
    count?: number;
};
export interface useSurfaceSamplerProps {
    transform?: TransformFn;
    weight?: string;
    count?: number;
}
export declare function useSurfaceSampler(mesh: React.MutableRefObject<Mesh>, count?: number, transform?: TransformFn, weight?: string, instanceMesh?: React.MutableRefObject<InstancedMesh> | null): InstancedBufferAttribute;
export declare function Sampler({ children, weight, transform, instances, mesh, count, ...props }: React.PropsWithChildren<Props & GroupProps>): JSX.Element;
export {};
