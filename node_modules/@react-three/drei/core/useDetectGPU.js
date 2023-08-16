import { getGPUTier } from 'detect-gpu';
import { suspend } from 'suspend-react';

const useDetectGPU = props => suspend(() => getGPUTier(props), ['useDetectGPU']);

export { useDetectGPU };
