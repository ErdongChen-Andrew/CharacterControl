import React, { ReactNode } from "react";
import { RigidBodyAutoCollider } from "../types";
export interface MeshColliderProps {
    children: ReactNode;
    type: RigidBodyAutoCollider;
}
/**
 * A mesh collider is a collider that is automatically generated from the geometry of the children.
 * @category Colliders
 */
export declare const MeshCollider: React.MemoExoticComponent<(props: MeshColliderProps) => JSX.Element>;
