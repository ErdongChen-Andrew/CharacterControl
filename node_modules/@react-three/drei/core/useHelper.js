import * as React from 'react';
import { useThree, useFrame } from '@react-three/fiber';

function useHelper(object3D, helperConstructor, ...args) {
  const helper = React.useRef();
  const scene = useThree(state => state.scene);
  React.useLayoutEffect(() => {
    let currentHelper = undefined;

    if (object3D && object3D != null && object3D.current && helperConstructor) {
      helper.current = currentHelper = new helperConstructor(object3D.current, ...args);
    }

    if (currentHelper) {
      scene.add(currentHelper);
      return () => {
        helper.current = undefined;
        scene.remove(currentHelper);
        currentHelper.dispose == null ? void 0 : currentHelper.dispose();
      };
    }
  }, [scene, helperConstructor, object3D, ...args]);
  useFrame(() => {
    var _helper$current;

    return void ((_helper$current = helper.current) == null ? void 0 : _helper$current.update == null ? void 0 : _helper$current.update());
  });
  return helper;
}

export { useHelper };
