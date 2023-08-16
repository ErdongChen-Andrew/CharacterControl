import React, { MutableRefObject, RefObject } from "react";
import { ReactNode } from "react";
import { Object3D } from "three";
import { RapierRigidBody, RigidBodyOptions } from "../types";
export declare const RigidBodyContext: React.Context<{
    ref: RefObject<Object3D> | MutableRefObject<Object3D>;
    getRigidBody: () => RapierRigidBody;
    options: RigidBodyOptions;
}>;
export declare const useRigidBodyContext: () => {
    ref: RefObject<Object3D> | MutableRefObject<Object3D>;
    getRigidBody: () => RapierRigidBody;
    options: RigidBodyOptions;
};
export interface RigidBodyProps extends RigidBodyOptions {
    children?: ReactNode;
}
/**
 * A rigid body is a physical object that can be simulated by the physics engine.
 * @category Components
 */
export declare const RigidBody: React.MemoExoticComponent<React.ForwardRefExoticComponent<RigidBodyProps & React.RefAttributes<RapierRigidBody>>>;
