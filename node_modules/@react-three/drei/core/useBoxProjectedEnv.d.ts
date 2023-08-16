import * as THREE from 'three';
import * as React from 'react';
import { ReactThreeFiber } from '@react-three/fiber';
export declare function useBoxProjectedEnv(position?: ReactThreeFiber.Vector3, size?: ReactThreeFiber.Vector3): {
    ref: React.MutableRefObject<THREE.Material>;
    onBeforeCompile: (shader: THREE.Shader) => void;
    customProgramCacheKey: () => string;
};
