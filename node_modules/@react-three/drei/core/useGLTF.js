import { GLTFLoader, DRACOLoader, MeshoptDecoder } from 'three-stdlib';
import { useLoader } from '@react-three/fiber';

// @ts-ignore
let dracoLoader = null;

function extensions(useDraco, useMeshopt, extendLoader) {
  return loader => {
    if (extendLoader) {
      extendLoader(loader);
    }

    if (useDraco) {
      if (!dracoLoader) {
        dracoLoader = new DRACOLoader();
      }

      dracoLoader.setDecoderPath(typeof useDraco === 'string' ? useDraco : 'https://www.gstatic.com/draco/versioned/decoders/1.5.5/');
      loader.setDRACOLoader(dracoLoader);
    }

    if (useMeshopt) {
      loader.setMeshoptDecoder(typeof MeshoptDecoder === 'function' ? MeshoptDecoder() : MeshoptDecoder);
    }
  };
}

function useGLTF(path, useDraco = true, useMeshOpt = true, extendLoader) {
  const gltf = useLoader(GLTFLoader, path, extensions(useDraco, useMeshOpt, extendLoader));
  return gltf;
}

useGLTF.preload = (path, useDraco = true, useMeshOpt = true, extendLoader) => useLoader.preload(GLTFLoader, path, extensions(useDraco, useMeshOpt, extendLoader));

useGLTF.clear = input => useLoader.clear(GLTFLoader, input);

export { useGLTF };
