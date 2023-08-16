import * as React from 'react';
import * as THREE from 'three';
import * as FIBER from '@react-three/fiber';
import { WireframeMaterialProps } from '../materials/WireframeMaterial';
declare global {
    namespace JSX {
        interface IntrinsicElements {
            meshWireframeMaterial: FIBER.MaterialNode<THREE.ShaderMaterial, WireframeMaterialProps>;
        }
    }
}
interface WireframeProps {
    geometry?: THREE.BufferGeometry | React.RefObject<THREE.BufferGeometry>;
    simplify?: boolean;
}
export declare function Wireframe({ geometry: customGeometry, ...props }: WireframeProps & WireframeMaterialProps): JSX.Element;
export {};
