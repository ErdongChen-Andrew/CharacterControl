import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody, CapsuleCollider, useRapier } from "@react-three/rapier";
import { useEffect } from "react";
import { useRef, useMemo, useState } from "react";
import * as THREE from "three";
import { useControls } from "leva";
import useFollowCam from "./hooks/useFollowCam";

export default function Character() {
  const characterRef = useRef();
  const characterModelRef = useRef();

  /**
   * Debug settings
   */
  const {
    maxVelLimit,
    turnVelMultiplier,
    turnSpeed,
    sprintMult,
    jumpVel,
    sprintJumpMult,
    airDragMultiplier,
    dragDampingC,
  } = useControls("Character controls", {
    maxVelLimit: {
      value: 5,
      min: 0,
      max: 10,
      step: 0.01,
    },
    turnVelMultiplier: {
      value: 0.3,
      min: 0,
      max: 1,
      step: 0.01,
    },
    turnSpeed: {
      value: 18,
      min: 5,
      max: 30,
      step: 0.1,
    },
    sprintMult: {
      value: 1.5,
      min: 1,
      max: 3,
      step: 0.01,
    },
    jumpVel: {
      value: 4,
      min: 0,
      max: 10,
      step: 0.01,
    },
    sprintJumpMult: {
      value: 1.2,
      min: 1,
      max: 3,
      step: 0.01,
    },
    airDragMultiplier: {
      value: 0.05,
      min: 0,
      max: 1,
      step: 0.01,
    },
    dragDampingC: {
      value: 0.05,
      min: 0,
      max: 0.5,
      step: 0.01,
    },
  });

  const { rayLength, rayDir, floatingDis, springK, dampingC } = useControls(
    "Floating Ray",
    {
      rayLength: {
        value: 1.5,
        min: 0,
        max: 3,
        step: 0.01,
      },
      rayDir: { x: 0, y: -1, z: 0 },
      floatingDis: {
        value: 0.8,
        min: 0,
        max: 2,
        step: 0.01,
      },
      springK: {
        value: 3,
        min: 0,
        max: 5,
        step: 0.01,
      },
      dampingC: {
        value: 0.2,
        min: 0,
        max: 3,
        step: 0.01,
      },
    }
  );

  const {
    slopeRayOriginOffest,
    slopeRayLength,
    slopeRayDir,
    slopeUpExtraForce,
    slopeDownExtraForce,
  } = useControls("Slope Ray", {
    slopeRayOriginOffest: {
      value: 0.28,
      min: 0,
      max: 3,
      step: 0.01,
    },
    slopeRayLength: {
      value: 1.5,
      min: 0,
      max: 3,
      step: 0.01,
    },
    slopeRayDir: { x: 0, y: -1, z: 0 },
    slopeUpExtraForce: {
      value: 1.5,
      min: 0,
      max: 5,
      step: 0.01,
    },
    slopeDownExtraForce: {
      value: 4,
      min: 0,
      max: 5,
      step: 0.01,
    },
  });

  /**
   * keyboard controls setup
   */
  const [subscribeKeys, getKeys] = useKeyboardControls();
  const { rapier, world } = useRapier();
  const rapierWorld = world.raw();

  // can jump setup
  const [canJump, setCanJump] = useState(false);

  // on moving object state
  const [isOnMovingObject, setIsOnMovingObject] = useState(false);
  const movingObjectVelocity = useMemo(() => new THREE.Vector3());
  const movingObjectVelocityInCharacterDir = useMemo(() => new THREE.Vector3());
  const distanceFromCharacterToObject = useMemo(() => new THREE.Vector3());
  const objectAngvelToLinvel = useMemo(() => new THREE.Vector3());

  /**
   * Initial setup
   */
  // const turnVelMultiplier = 0.04;
  // const maxVelLimit = 5;
  // const jumpVel = 4;
  // const sprintMult = 1.5;
  // const sprintJumpMult = 1.2;
  // const dragDampingC = 0.05;
  // const airDragMultiplier = 0.03;

  /**
   * Load camera pivot and character move preset
   */
  const { pivot, followCam } = useFollowCam();
  const pivotPosition = useMemo(() => new THREE.Vector3());
  const modelEuler = useMemo(() => new THREE.Euler(), []);
  const modelQuat = useMemo(() => new THREE.Quaternion(), []);
  const moveImpulse = useMemo(() => new THREE.Vector3());
  const movingDirection = useMemo(() => new THREE.Vector3());
  const moveAccNeeded = useMemo(() => new THREE.Vector3());
  const jumpDirection = useMemo(() => new THREE.Vector3());
  const currentVel = useMemo(() => new THREE.Vector3());
  const dragForce = useMemo(() => new THREE.Vector3());
  const wantToMoveVel = useMemo(() => new THREE.Vector3());

  /**
   * Floating Ray setup
   */
  // const rayLength = 1.5;
  // const rayDir = { x: 0, y: -1, z: 0 };
  const springDirVec = useMemo(() => new THREE.Vector3());
  const characterMassForce = useMemo(() => new THREE.Vector3());
  // const floatingDis = 0.8;
  // const springK = 3;
  // const dampingC = 0.2;

  /**
   * Slope detection ray setup
   */
  let slopeAngle = null;
  // const slopeRayOriginOffest = 0.28;
  const slopeRayOriginRef = useRef();
  // const slopeRayLength = 1.5;
  // const slopeUpExtraForce = 1.5;
  // const slopeDownExtraForce = 4;
  // const slopeRayDir = { x: 0, y: -1, z: 0 };
  const slopeRayorigin = useMemo(() => new THREE.Vector3());

  /**
   * Character moving function
   */
  const moveCharacter = (delta, run, slopeAngle, movingObjectVelocity) => {
    /**
     * Setup moving direction
     */
    // Only apply slope extra force when slope angle is between 0.2-1
    if (Math.abs(slopeAngle) > 0.2 && Math.abs(slopeAngle) < 1) {
      movingDirection.set(0, Math.sin(slopeAngle), Math.cos(slopeAngle));
    } else {
      movingDirection.set(0, 0, 1);
    }
    // Apply character quaternion to moving direction
    movingDirection.applyQuaternion(characterModelRef.current.quaternion);
    // Calculate moving object velocity direction according to character moving direction
    movingObjectVelocityInCharacterDir
      .copy(movingObjectVelocity)
      .projectOnVector(movingDirection)
      .multiply(movingDirection);
    // Calculate angle between moving object velocity direction and character moving direction
    const angleBetweenCharacterDirAndObjectDir =
      movingObjectVelocity.angleTo(movingDirection);

    /**
     * Setup rejection velocity
     */
    // const wantToMoveMeg = currentVel.dot(movingDirection);
    // wantToMoveVel.set(
    //   movingDirection.x * wantToMoveMeg,
    //   0,
    //   movingDirection.z * wantToMoveMeg
    // );
    // const rejectVel = new THREE.Vector3().copy(currentVel).sub(wantToMoveVel);
    // console.log(wantToMoveVel);

    /**
     * Calculate required accelaration and force: a = Δv/Δt
     */
    moveAccNeeded.set(
      (movingDirection.x *
        (maxVelLimit + movingObjectVelocityInCharacterDir.x) *
        (run ? sprintMult : 1) -
        (currentVel.x -
          movingObjectVelocity.x *
            Math.sin(angleBetweenCharacterDirAndObjectDir))) /
        (delta * 100),
      0,
      (movingDirection.z *
        (maxVelLimit + movingObjectVelocityInCharacterDir.z) *
        (run ? sprintMult : 1) -
        (currentVel.z -
          movingObjectVelocity.z *
            Math.sin(angleBetweenCharacterDirAndObjectDir))) /
        (delta * 100)
    );

    // Wanted to move force function: F = ma
    const moveForceNeeded = moveAccNeeded.multiplyScalar(
      characterRef.current.mass()
    );

    /**
     * Check if character complete turned to the wanted direction
     */
    const characterRotated =
      Math.sin(characterModelRef.current.rotation.y).toFixed(3) ==
      Math.sin(modelEuler.y).toFixed(3);

    // If character hasn't complete turning, change the impulse quaternion follow characterModelRef quaternion
    if (!characterRotated) {
      moveImpulse.set(
        moveForceNeeded.x *
          turnVelMultiplier *
          (canJump ? 1 : airDragMultiplier),
        // -rejectVel.x * dragDampingC,
        slopeAngle === null
          ? 0
          : movingDirection.y *
              turnVelMultiplier *
              (movingDirection.y > 0
                ? slopeUpExtraForce
                : slopeDownExtraForce) *
              (run ? sprintMult : 1),
        moveForceNeeded.z *
          turnVelMultiplier *
          (canJump ? 1 : airDragMultiplier)
        // -rejectVel.z * dragDampingC
      );
    }
    // If character complete turning, change the impulse quaternion default
    else {
      moveImpulse.set(
        moveForceNeeded.x * (canJump ? 1 : airDragMultiplier),
        // -rejectVel.x * dragDampingC,
        slopeAngle === null
          ? 0
          : movingDirection.y *
              (movingDirection.y > 0
                ? slopeUpExtraForce
                : slopeDownExtraForce) *
              (run ? sprintMult : 1),
        moveForceNeeded.z * (canJump ? 1 : airDragMultiplier)
        // -rejectVel.z * dragDampingC
      );
    }

    // Move character at proper direction and impulse
    characterRef.current.applyImpulse(moveImpulse, true);
  };

  useEffect(() => {
    // Lock character rotations at any axis
    characterRef.current.lockRotations(true);
  }, []);

  useFrame((state, delta) => {
    /**
     * Apply character position to directional light
     */
    const dirLight = state.scene.children.find((item) => {
      return item.type === "DirectionalLight";
    });
    dirLight.position.x = characterRef.current.translation().x + 20;
    dirLight.position.y = characterRef.current.translation().y + 30;
    dirLight.position.z = characterRef.current.translation().z + 10;
    dirLight.target.position.copy(characterRef.current.translation());

    /**
     * Getting all the useful keys from useKeyboardControls
     */
    const { forward, backward, leftward, rightward, jump, run } = getKeys();

    // Getting moving directions
    if (forward) {
      // Apply camera rotation to character model
      modelEuler.y = pivot.rotation.y;
    } else if (backward) {
      // Apply camera rotation to character model
      modelEuler.y = pivot.rotation.y + Math.PI;
    } else if (leftward) {
      // Apply camera rotation to character model
      modelEuler.y = pivot.rotation.y + Math.PI / 2;
    } else if (rightward) {
      // Apply camera rotation to character model
      modelEuler.y = pivot.rotation.y - Math.PI / 2;
    }
    if (forward && leftward) {
      // Apply camera rotation to character model
      modelEuler.y = pivot.rotation.y + Math.PI / 4;
    } else if (forward && rightward) {
      // Apply camera rotation to character model
      modelEuler.y = pivot.rotation.y - Math.PI / 4;
    } else if (backward && leftward) {
      // Apply camera rotation to character model
      modelEuler.y = pivot.rotation.y - Math.PI / 4 + Math.PI;
    } else if (backward && rightward) {
      // Apply camera rotation to character model
      modelEuler.y = pivot.rotation.y + Math.PI / 4 + Math.PI;
    }

    // Move character to the moving direction
    if (forward || backward || leftward || rightward)
      moveCharacter(delta, run, slopeAngle, movingObjectVelocity);

    // Character current velocity
    currentVel.copy(characterRef.current.linvel());

    // Jump impulse
    if (jump && canJump) {
      // characterRef.current.applyImpulse(jumpDirection.set(0, 0.5, 0), true);
      characterRef.current.setLinvel(
        {
          x: currentVel.x,
          y: run ? sprintJumpMult * jumpVel : jumpVel,
          z: currentVel.z,
        },
        true
      );
    }

    // Rotate character model
    modelQuat.setFromEuler(modelEuler);
    characterModelRef.current.quaternion.rotateTowards(
      modelQuat,
      delta * turnSpeed
    );

    /**
     *  Camera movement
     */
    pivotPosition.set(
      characterRef.current.translation().x,
      characterRef.current.translation().y + 0.5,
      characterRef.current.translation().z
    );
    pivot.position.lerp(pivotPosition, 0.2);
    state.camera.lookAt(pivot.position);

    /**
     * Ray casting detect if on ground
     */
    const origin = characterRef.current.translation();
    const rayCast = new rapier.Ray(origin, rayDir);
    const rayHit = rapierWorld.castRay(
      rayCast,
      rayLength,
      true,
      null,
      null,
      characterRef.current
    );

    if (rayHit && rayHit.toi < floatingDis + 0.1) {
      setCanJump(true);
    } else {
      setCanJump(false);
    }

    /**
     * Ray detect if on rigid body or dynamic platform, then apply the linear velocity and angular velocity to character
     */
    if (rayHit && canJump) {
      const rayHitObjectBodyType = rayHit.collider.parent().bodyType();
      // Body type 0 is rigid body, body type 1 is fixed body, body type 2 is kinematic body
      if (rayHitObjectBodyType === 0 || rayHitObjectBodyType === 2) {
        setIsOnMovingObject(true);
        // Calculate distance between character and moving object
        distanceFromCharacterToObject
          .copy(characterRef.current.translation())
          .sub(rayHit.collider.parent().translation());
        // Moving object linear velocity
        const movingObjectLinvel = rayHit.collider.parent().linvel();
        // Moving object angular velocity
        const movingObjectAngvel = rayHit.collider.parent().angvel();
        // Combine object linear velocity and angular velocity to movingObjectVelocity
        movingObjectVelocity.set(
          movingObjectLinvel.x +
            objectAngvelToLinvel.crossVectors(
              movingObjectAngvel,
              distanceFromCharacterToObject
            ).x,
          movingObjectLinvel.y,
          movingObjectLinvel.z +
            objectAngvelToLinvel.crossVectors(
              movingObjectAngvel,
              distanceFromCharacterToObject
            ).z
        );
      } else {
        setIsOnMovingObject(false);
        movingObjectVelocity.set(0, 0, 0);
      }
    }

    /**
     * Slope ray casting detect if on slope
     */
    slopeRayOriginRef.current.getWorldPosition(slopeRayorigin);
    const slopeRayCast = new rapier.Ray(slopeRayorigin, slopeRayDir);
    const slopeRayHit = rapierWorld.castRay(
      slopeRayCast,
      slopeRayLength,
      true,
      null,
      null,
      characterRef.current
    );

    // Calculate slope angle
    if (slopeRayHit && rayHit && slopeRayHit.toi < floatingDis + 0.5) {
      if (canJump) {
        slopeAngle = Math.atan(
          (rayHit.toi - slopeRayHit.toi) / slopeRayOriginOffest
        ).toFixed(2);
      } else {
        slopeAngle = null;
      }
    }

    /**
     * Apply floating force
     */
    if (rayHit && !jump && canJump) {
      if (rayHit != null) {
        // console.log(rayHit.collider.castRayAndGetNormal(rayCast,rayLength,true).normal);
        const floatingForce =
          springK * (floatingDis - rayHit.toi) -
          characterRef.current.linvel().y * dampingC;
        characterRef.current.applyImpulse(
          springDirVec.set(0, floatingForce, 0),
          true
        );

        // Apply opposite force to standing object
        characterMassForce.set(
          0,
          -characterRef.current.mass() * characterRef.current.gravityScale(),
          0
        );
        rayHit.collider.parent().applyImpulseAtPoint(
          characterMassForce,
          // rayHit.collider.parent().translation(),
          characterRef.current.translation(),
          true
        );
      }
    }

    /**
     * Apply drag force if it's not moving
     */
    // not on a moving object
    if (
      !forward &&
      !backward &&
      !leftward &&
      !rightward &&
      canJump &&
      !isOnMovingObject
    ) {
      dragForce.set(
        -currentVel.x * dragDampingC,
        0,
        -currentVel.z * dragDampingC
      );
      characterRef.current.applyImpulse(dragForce);
    }
    // on a moving object
    else if (
      !forward &&
      !backward &&
      !leftward &&
      !rightward &&
      canJump &&
      isOnMovingObject
    ) {
      dragForce.set(
        (movingObjectVelocity.x - currentVel.x) * dragDampingC * 2,
        0,
        (movingObjectVelocity.z - currentVel.z) * dragDampingC * 2
      );
      characterRef.current.applyImpulse(dragForce);
    }
  });

  return (
    <RigidBody
      colliders={false}
      position={[0, 3, 0]}
      friction={-0.5}
      ref={characterRef}
    >
      <CapsuleCollider args={[0.35, 0.3]} />
      <group ref={characterModelRef}>
        <mesh position={[0, 0, slopeRayOriginOffest]} ref={slopeRayOriginRef}>
          <boxGeometry args={[0.1, 0.1, 0.1]} />
        </mesh>
        <mesh castShadow>
          <capsuleGeometry args={[0.3, 0.7]} />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
        <mesh castShadow position={[0, 0.2, 0.2]}>
          <boxGeometry args={[0.5, 0.2, 0.3]} />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </group>
    </RigidBody>
  );
}
