import { RigidBody, RigidBodyDesc } from "@dimforge/rapier3d-compat";
import { Matrix4, Object3D, Vector3 } from "three";
import { RigidBodyProps } from "..";
import { EventMap, RigidBodyState, RigidBodyStateMap } from "../components/Physics";
export declare const rigidBodyDescFromOptions: (options: RigidBodyProps) => RigidBodyDesc;
interface CreateRigidBodyStateOptions {
    object: Object3D;
    rigidBody: RigidBody;
    setMatrix?: (matrix: Matrix4) => void;
    getMatrix?: (matrix: Matrix4) => Matrix4;
    worldScale?: Vector3;
    meshType?: RigidBodyState["meshType"];
}
export declare const createRigidBodyState: ({ rigidBody, object, setMatrix, getMatrix, worldScale, meshType }: CreateRigidBodyStateOptions) => RigidBodyState;
declare type ImmutableRigidBodyOptions = (keyof RigidBodyProps)[];
export declare const immutableRigidBodyOptions: ImmutableRigidBodyOptions;
declare type MutableRigidBodyOptions = {
    [Prop in keyof RigidBodyProps]: (rb: RigidBody, value: any) => void;
};
export declare const mutableRigidBodyOptions: MutableRigidBodyOptions;
export declare const setRigidBodyOptions: (rigidBody: RigidBody, options: RigidBodyProps, states: RigidBodyStateMap, updateTranslations?: boolean) => void;
export declare const useUpdateRigidBodyOptions: (getRigidBody: () => RigidBody, props: RigidBodyProps, states: RigidBodyStateMap, updateTranslations?: boolean) => void;
export declare const useRigidBodyEvents: (getRigidBody: () => RigidBody, props: RigidBodyProps, events: EventMap) => void;
export {};
