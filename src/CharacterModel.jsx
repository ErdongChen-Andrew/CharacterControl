import { useAnimations, useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { Suspense, useEffect, useRef, useMemo } from "react";
import * as THREE from "three";
import useGame from "./stores/useGame";

export default function CharacterModel(props) {
  // Change the character src to yours
  const group = useRef();
  const { nodes, animations } = useGLTF(
    "/Animated Platformer Character 2D.glb"
  );
  const { actions } = useAnimations(animations, group);
  // gradientMapTexture for MeshToonMaterial
  const gradientMapTexture = useTexture("./textures/3.jpg");
  gradientMapTexture.minFilter = THREE.NearestFilter;
  gradientMapTexture.magFilter = THREE.NearestFilter;
  gradientMapTexture.generateMipmaps = false;

  /**
   * Debug settings
   */
  const { mainColor, outlineColor } = useControls("Character Model", {
    mainColor: "mediumpurple",
    outlineColor: "black",
  });

  /**
   * Prepare replacing materials
   */
  const outlineMaterial = useMemo(
    () => new THREE.MeshBasicMaterial({ color: outlineColor })
  );
  const meshToonMaterial = useMemo(
    () =>
      new THREE.MeshToonMaterial({
        color: mainColor,
        gradientMap: gradientMapTexture,
      })
  );

  /**
   * Character animations setup
   */
  const curAnimation = useGame((state) => state.curAnimation);
  const resetAnimation = useGame((state) => state.reset);
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
    // Initialize animation set
    initializeAnimationSet(animationSet);
  }, []);

  useEffect(() => {
    // Play animation
    const action = actions[curAnimation ? curAnimation : animationSet.jumpIdle];

    // For jump and jump land animation, only play once and clamp when finish
    if (
      curAnimation === animationSet.jump ||
      curAnimation === animationSet.jumpLand ||
      curAnimation === animationSet.wave
    ) {
      action.reset().fadeIn(0.1).setLoop(THREE.LoopOnce).play();
      action.clampWhenFinished = true;
    } else {
      action.reset().fadeIn(0.2).play();
    }

    // When any action is clamp and finished,
    // change to idle animation and reset animation to null
    action._mixer.addEventListener("finished", (e) => {
      actions[animationSet.idle].reset().fadeIn(0.1).play();
      resetAnimation();
    });

    return () => {
      if (
        curAnimation === animationSet.jump ||
        curAnimation === animationSet.jumpLand ||
        curAnimation === animationSet.wave
      ) {
        action.fadeOut(0.1);
      } else {
        action.fadeOut(0.2);
      }

      // Clean up mixer listener, and empty the _listeners array
      action._mixer.removeEventListener("finished", (e) => {
        actions[animationSet.idle].reset().fadeIn(0.1).play();
        resetAnimation();
      });
      action._mixer._listeners = [];
    };
  }, [curAnimation]);

  return (
    <Suspense fallback={<capsuleGeometry args={[0.3, 0.7]} />}>
      {/* Default capsule modle */}
      {/* <mesh castShadow>
        <capsuleGeometry args={[0.3, 0.7]} />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
      <mesh castShadow position={[0, 0.2, 0.2]}>
        <boxGeometry args={[0.5, 0.2, 0.3]} />
        <meshStandardMaterial color="mediumpurple" />
      </mesh> */}

      {/* Replace yours model here */}
      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group name="RootNode">
            <group
              name="CharacterArmature"
              rotation={[-Math.PI / 2, 0, 0]}
              scale={45}
              position={[0, -0.9, 0]}
            >
              <group name="Arms">
                <skinnedMesh
                  name="Arms001"
                  geometry={nodes.Arms001.geometry}
                  material={meshToonMaterial}
                  skeleton={nodes.Arms001.skeleton}
                  receiveShadow
                  castShadow
                />
                <skinnedMesh
                  name="Arms001_1"
                  geometry={nodes.Arms001_1.geometry}
                  material={meshToonMaterial}
                  skeleton={nodes.Arms001_1.skeleton}
                  receiveShadow
                  castShadow
                />
                <skinnedMesh
                  name="Arms001_2"
                  geometry={nodes.Arms001_2.geometry}
                  material={outlineMaterial}
                  skeleton={nodes.Arms001_2.skeleton}
                />
              </group>
              <group name="Body_1">
                <skinnedMesh
                  name="Body001"
                  geometry={nodes.Body001.geometry}
                  material={meshToonMaterial}
                  skeleton={nodes.Body001.skeleton}
                  receiveShadow
                  castShadow
                />
                <skinnedMesh
                  name="Body001_1"
                  geometry={nodes.Body001_1.geometry}
                  material={meshToonMaterial}
                  skeleton={nodes.Body001_1.skeleton}
                  receiveShadow
                  castShadow
                />
                <skinnedMesh
                  name="Body001_2"
                  geometry={nodes.Body001_2.geometry}
                  material={meshToonMaterial}
                  skeleton={nodes.Body001_2.skeleton}
                  receiveShadow
                  castShadow
                />
                <skinnedMesh
                  name="Body001_3"
                  geometry={nodes.Body001_3.geometry}
                  material={outlineMaterial}
                  skeleton={nodes.Body001_3.skeleton}
                />
              </group>
              <group name="Ears">
                <skinnedMesh
                  name="Ears001"
                  geometry={nodes.Ears001.geometry}
                  material={meshToonMaterial}
                  skeleton={nodes.Ears001.skeleton}
                  receiveShadow
                  castShadow
                />
                <skinnedMesh
                  name="Ears001_1"
                  geometry={nodes.Ears001_1.geometry}
                  material={outlineMaterial}
                  skeleton={nodes.Ears001_1.skeleton}
                />
              </group>
              <group name="Head_1">
                <skinnedMesh
                  name="Head001_1"
                  geometry={nodes.Head001_1.geometry}
                  material={meshToonMaterial}
                  skeleton={nodes.Head001_1.skeleton}
                  receiveShadow
                  castShadow
                />
                <skinnedMesh
                  name="Head001_2"
                  geometry={nodes.Head001_2.geometry}
                  material={meshToonMaterial}
                  skeleton={nodes.Head001_2.skeleton}
                  receiveShadow
                  castShadow
                />
                <skinnedMesh
                  name="Head001_3"
                  geometry={nodes.Head001_3.geometry}
                  material={outlineMaterial}
                  skeleton={nodes.Head001_3.skeleton}
                />
              </group>
              <group name="Head001">
                <skinnedMesh
                  name="Head002"
                  geometry={nodes.Head002.geometry}
                  material={meshToonMaterial}
                  skeleton={nodes.Head002.skeleton}
                  receiveShadow
                  castShadow
                />
                <skinnedMesh
                  name="Head002_1"
                  geometry={nodes.Head002_1.geometry}
                  material={meshToonMaterial}
                  skeleton={nodes.Head002_1.skeleton}
                  receiveShadow
                  castShadow
                />
                <skinnedMesh
                  name="Head002_2"
                  geometry={nodes.Head002_2.geometry}
                  material={meshToonMaterial}
                  skeleton={nodes.Head002_2.skeleton}
                  receiveShadow
                  castShadow
                />
              </group>
              <primitive object={nodes.Root} />
            </group>
          </group>
        </group>
      </group>
    </Suspense>
  );
}

// Change the character src to yours
useGLTF.preload("/Animated Platformer Character 2D.glb");
