import { useThree } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import * as THREE from "three";

export default function useFollowCam() {
  const { scene, camera } = useThree()

  const pivot = useMemo(() => new THREE.Object3D(), [])
  const followCam = useMemo(() => {
    const o = new THREE.Object3D()
    o.position.set(0, 1, -5)
    return o
  }, [])

  const onDocumentMouseMove = (e) => {
    if (document.pointerLockElement) {
      pivot.rotation.y -= e.movementX * 0.002
      const v = followCam.rotation.x + e.movementY * 0.002

      if (v >= -0.35 && v <= 0.8) {
        followCam.rotation.x = v
        followCam.position.y = -v * followCam.position.z + 1
      }
    }
    return false
  }

  // const onDocumentMouseWheel = (e) => {
  //   if (document.pointerLockElement) {
  //     const v = followCam.position.z + e.deltaY * 0.002
      
  //     if (v >= -7 && v <= -2) {
  //       followCam.position.z = v
  //     }
  //   }
  //   return false
  // }

  useEffect(() => {
    // camera.position.set(0, 1, 0)
    followCam.add(camera)
    pivot.add(followCam)
    // scene.add(pivot)
    document.addEventListener('mousemove', onDocumentMouseMove)
    // document.addEventListener('mousewheel', onDocumentMouseWheel)
    return () => {
      document.removeEventListener('mousemove', onDocumentMouseMove)
      // document.removeEventListener('mousewheel', onDocumentMouseWheel)
    }
  })

  return { pivot, followCam }
}
