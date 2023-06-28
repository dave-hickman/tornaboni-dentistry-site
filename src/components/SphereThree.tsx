import { useRef } from "react";
import { Mesh, MeshStandardMaterial } from "three";

const SphereThree = () => {
  const sphereRef = useRef<Mesh>(null!);
  return (
    <mesh ref={sphereRef} scale={1.5} position={[-10, -15, -4]}>
      <icosahedronBufferGeometry args={[2, 20]} />
      <meshStandardMaterial color={'#318c80'} />
    </mesh>
  );
};

export default SphereThree;