import { useThree } from "@react-three/fiber";
import { useRapier } from "@react-three/rapier";
import { useEffect, useMemo } from "react";
import * as THREE from "three";

export default function useFollowCam(props) {
  const { scene, camera } = useThree();
  const { rapier, world } = useRapier();

  let originZDis = props.camInitDis;
  const camMaxDis = props.camMaxDis;
  const camMinDis = props.camMinDis;
  const pivot = useMemo(() => new THREE.Object3D(), []);
  const followCam = useMemo(() => {
    const origin = new THREE.Object3D();
    origin.position.set(0, 0, originZDis);
    return origin;
  }, []);

  /** Camera collison detect setups */
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
      const vz = originZDis - e.deltaY * 0.002;
      const vy = followCam.rotation.x + e.movementY * 0.002;

      if (vz >= camMaxDis && vz <= camMinDis) {
        originZDis = vz;
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
    followCam.add(camera);
    pivot.add(followCam);

    document.addEventListener("mousemove", onDocumentMouseMove);
    document.addEventListener("mousewheel", onDocumentMouseWheel);
    return () => {
      document.removeEventListener("mousemove", onDocumentMouseMove);
      document.removeEventListener("mousewheel", onDocumentMouseWheel);
    };
  });

  return { pivot, followCam, cameraCollisionDetect };
}
