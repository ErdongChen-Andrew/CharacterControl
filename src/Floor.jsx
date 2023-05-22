import { RigidBody } from "@react-three/rapier";

export default function Floor() {
  return (
    <RigidBody type="fixed">
      <mesh receiveShadow position={[0, -1.25, 0]}>
        <boxGeometry args={[300, 0.5, 300]} />
        <meshStandardMaterial color="lightblue" />
      </mesh>
    </RigidBody>
  );
}
