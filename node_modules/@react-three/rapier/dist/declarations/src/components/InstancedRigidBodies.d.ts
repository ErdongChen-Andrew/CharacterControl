import React, { ReactNode } from "react";
import { RigidBodyProps } from "./RigidBody";
import { RapierRigidBody } from "../types";
export declare type InstancedRigidBodyProps = RigidBodyProps & {
    key: string | number;
};
export interface InstancedRigidBodiesProps extends RigidBodyProps {
    instances: InstancedRigidBodyProps[];
    colliderNodes?: ReactNode[];
    children: ReactNode;
}
export declare const InstancedRigidBodies: React.MemoExoticComponent<React.ForwardRefExoticComponent<InstancedRigidBodiesProps & React.RefAttributes<(RapierRigidBody | null)[] | null>>>;
