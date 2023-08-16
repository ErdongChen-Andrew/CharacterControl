import * as THREE from 'three';
import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { suspend } from 'suspend-react';

function useVideoTexture(src, props) {
  const {
    unsuspend,
    start,
    crossOrigin,
    muted,
    loop,
    ...rest
  } = {
    unsuspend: 'loadedmetadata',
    crossOrigin: 'Anonymous',
    muted: true,
    loop: true,
    start: true,
    playsInline: true,
    ...props
  };
  const gl = useThree(state => state.gl);
  const texture = suspend(() => new Promise((res, rej) => {
    const video = Object.assign(document.createElement('video'), {
      src: typeof src === 'string' && src || undefined,
      srcObject: src instanceof MediaStream && src || undefined,
      crossOrigin,
      loop,
      muted,
      ...rest
    });
    const texture = new THREE.VideoTexture(video);
    if ('colorSpace' in texture) texture.colorSpace = gl.outputColorSpace;else texture.encoding = gl.outputEncoding;
    video.addEventListener(unsuspend, () => res(texture));
  }), [src]);
  useEffect(() => void (start && texture.image.play()), [texture, start]);
  return texture;
}

export { useVideoTexture };
