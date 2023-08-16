import { FBXLoader } from 'three-stdlib';
import { useLoader } from '@react-three/fiber';

function useFBX(path) {
  return useLoader(FBXLoader, path);
}

useFBX.preload = path => useLoader.preload(FBXLoader, path);

useFBX.clear = input => useLoader.clear(FBXLoader, input);

export { useFBX };
