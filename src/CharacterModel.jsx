import { useAnimations, useGLTF } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import * as THREE from "three";
import useGame from "./stores/useGame";

export default function CharacterModel(props) {
  // Change the character src to yours
  const character = useGLTF("./Animated Platformer Character.glb");
  const animations = useAnimations(character.animations, character.scene);

  /**
   * Character animations setup
   */
  const curAnimation = useGame((state) => state.curAnimation);
  const initializeAnimationSet = useGame(
    (state) => state.initializeAnimationSet
  );

  // Rename your character animations here
  const animationSet = {
    idle: "CharacterArmature|Idle",
    walk: "CharacterArmature|Walk",
    run: "CharacterArmature|Run",
    jump: "CharacterArmature|Jump",
    jumpIdle: "CharacterArmature|Jump_Idle",
    jumpLand: "CharacterArmature|Jump_Land",
    duck: "CharacterArmature|Duck", // This is for falling from high sky
    wave: "CharacterArmature|Wave",
  };

  useEffect(() => {
    // Receive and cast Shadows
    character.scene.traverse((child) => {
      if (
        child instanceof THREE.Mesh &&
        child.material instanceof THREE.MeshStandardMaterial
      ) {
        child.castShadow = true;
        child.receiveShadow = true;
        child.material.roughness = 1;
        child.material.metalness = -1;
      }
    });

    // Initialize animation set
    initializeAnimationSet(animationSet);
  }, []);

  useEffect(() => {
    // Play animation
    const action =
      animations.actions[curAnimation ? curAnimation : animationSet.jumpIdle];

    // For jump and jump land animation, only play once and clamp when finish
    if (
      curAnimation === animationSet.jump ||
      curAnimation === animationSet.jumpLand
    ) {
      action.reset().fadeIn(0.1).setLoop(THREE.LoopOnce).play();
      action.clampWhenFinished = true;
    } else {
      action.reset().fadeIn(0.2).play();
    }

    return () => {
      if (
        curAnimation === animationSet.jump ||
        curAnimation === animationSet.jumpLand
      ) {
        action.fadeOut(0.1);
      } else {
        action.fadeOut(0.2);
      }
    };
  }, [curAnimation]);

  return (
    <Suspense fallback={<capsuleGeometry args={[0.3, 0.7]} />}>
      <primitive
        object={character.scene}
        scale={0.45}
        position={[0, -0.9, 0]}
      />
      {/* Default capsule modle */}
      {/* <mesh castShadow>
        <capsuleGeometry args={[0.3, 0.7]} />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
      <mesh castShadow position={[0, 0.2, 0.2]}>
        <boxGeometry args={[0.5, 0.2, 0.3]} />
        <meshStandardMaterial color="mediumpurple" />
      </mesh> */}
    </Suspense>
  );
}
