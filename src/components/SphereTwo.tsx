import { useRef } from "react";
import { Mesh } from "three";

const SphereTwo = () => {
  const sphereRef = useRef<Mesh>(null!);
  console.log(sphereRef)
  return (
    <mesh ref={sphereRef} scale={1.5} position={[5, 7, 4]}>
      <icosahedronBufferGeometry args={[2, 20]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  );
};

export default SphereTwo;