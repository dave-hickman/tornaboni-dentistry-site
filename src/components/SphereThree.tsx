import { useRef } from "react";
import { MeshStandardMaterial } from "three";

const SphereThree = () => {
  const sphereRef = useRef();
  return (
    <mesh ref={sphereRef} scale={1.5} position={[-10, -15, -4]}>
      <icosahedronBufferGeometry args={[2, 20]} />
      <meshStandardMaterial color={'#318c80'} />
    </mesh>
  );
};

export default SphereThree;