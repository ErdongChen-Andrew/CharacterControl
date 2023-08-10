import { useThree } from "@react-three/fiber";
import { useRapier } from "@react-three/rapier";
import { useEffect, useMemo } from "react";
import * as THREE from "three";

export default function useFollowCam() {
  const { scene, camera } = useThree();
  const { rapier, world } = useRapier();

  const pivot = useMemo(() => new THREE.Object3D(), []);
  const followCam = useMemo(() => {
    const o = new THREE.Object3D();
    o.position.set(0, 0, -5);
    return o;
  }, []);

  /** Camera collison detect setups */
  let originZDis = -5;
  let smallestDistance = null;
  let cameraDistance = null;
  const cameraRayDir = useMemo(() => new THREE.Vector3());
  const cameraRayOrigin = useMemo(() => new THREE.Vector3());
  const cameraPosition = useMemo(() => new THREE.Vector3());
  const camLerpingPoint = useMemo(() => new THREE.Vector3());
  const rayCast = new rapier.Ray(cameraRayOrigin, cameraRayDir);
  let rayLength = null;
  let rayHit = null;

  // Mouse move event
  const onDocumentMouseMove = (e) => {
    if (document.pointerLockElement) {
      pivot.rotation.y -= e.movementX * 0.002;
      const vy = followCam.rotation.x + e.movementY * 0.002;

      cameraDistance = followCam.position.length();

      if (vy >= -0.5 && vy <= 1.5) {
        followCam.rotation.x = vy;
        followCam.position.y = -cameraDistance * Math.sin(-vy);
        followCam.position.z = -cameraDistance * Math.cos(-vy);
      }
    }
    return false;
  };

  // Mouse scroll event
  const onDocumentMouseWheel = (e) => {
    if (document.pointerLockElement) {
      const vz = originZDis + e.deltaY * 0.002;
      const vy = followCam.rotation.x + e.movementY * 0.002;

      if (vz >= -7 && vz <= -0.5) {
        originZDis = vz
        followCam.position.z = originZDis * Math.cos(-vy);
        followCam.position.y = originZDis * Math.sin(-vy);
      }
    }
    return false;
  };

  const cameraCollisionDetect = (character, delta) => {
    // Update collision detect ray origin and pointing direction
    // Which is from pivot point to camera position
    cameraRayOrigin.copy(pivot.position);
    camera.getWorldPosition(cameraPosition);
    cameraRayDir.subVectors(cameraPosition, pivot.position);
    rayLength = cameraRayDir.length();

    // casting ray hit, if object in between character and camera,
    // change the smallestDistance to the ray hit toi
    // otherwise the smallestDistance is same as camera original position (originZDis)
    rayHit = world.castRay(rayCast, rayLength + 1, true, null, null, character);
    if (rayHit && rayHit.toi && rayHit.toi > originZDis) {
      smallestDistance = -rayHit.toi + 0.5;
    } else if (rayHit == null) {
      smallestDistance = originZDis;
    }

    // Update camera next lerping position, and lerp the camera
    camLerpingPoint.set(
      followCam.position.x,
      smallestDistance * Math.sin(-followCam.rotation.x),
      smallestDistance * Math.cos(-followCam.rotation.x)
    );

    followCam.position.lerp(camLerpingPoint, delta * 2);
  };

  useEffect(() => {
    // camera.position.set(0, 1, 0)
    followCam.add(camera);
    pivot.add(followCam);
    // scene.add(pivot)
    document.addEventListener("mousemove", onDocumentMouseMove);
    document.addEventListener("mousewheel", onDocumentMouseWheel);
    return () => {
      document.removeEventListener("mousemove", onDocumentMouseMove);
      document.removeEventListener("mousewheel", onDocumentMouseWheel);
    };
  });

  return { pivot, followCam, cameraCollisionDetect };
}
