import * as React from 'react';
import * as THREE from 'three';
import * as FIBER from '@react-three/fiber';
export declare type DecalProps = Omit<JSX.IntrinsicElements['meshStandardMaterial'], 'children'> & {
    debug?: boolean;
    mesh?: React.MutableRefObject<THREE.Mesh>;
    position?: FIBER.Vector3;
    rotation?: FIBER.Euler | number;
    scale?: FIBER.Vector3;
    map?: THREE.Texture;
    children?: React.ReactNode;
};
export declare const Decal: React.ForwardRefExoticComponent<Pick<DecalProps, "attach" | "args" | "children" | "key" | "onUpdate" | "position" | "scale" | "rotation" | "mesh" | keyof THREE.MeshStandardMaterial | "debug"> & React.RefAttributes<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>>>;
