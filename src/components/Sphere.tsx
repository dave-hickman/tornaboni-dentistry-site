import { useRef } from "react";
import { Mesh } from "three";

const Sphere = () => {
  const sphereRef = useRef<Mesh>(null!);
  return (
    <mesh ref={sphereRef} scale={1.5} position={[-3, 0, 0]}>
      <icosahedronBufferGeometry args={[2, 20]} />
      <meshStandardMaterial color={'#505d80'} />
    </mesh>
  );
};

export default Sphere;
