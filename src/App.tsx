import "./styling/App.css";
import Contact from "./components/Contact";
import Images from "./components/Images";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import Sphere from "./components/Sphere";
import SphereTwo from "./components/SphereTwo";
import { OrbitControls } from "@react-three/drei";
import SphereThree from "./components/SphereThree";
import Blur from "./components/Blur";
import Nav from "./components/Nav";
import Whatsapp from "./components/Links";
import Links from "./components/Links";
import MapPage from "./components/Map";
import { Route, Routes } from "react-router-dom";

// function Box(props) {
//   // This reference will give us direct access to the mesh
//   const meshRef = useRef();
//   // Set up state for the hovered and active state
//   const [hovered, setHover] = useState(false);
//   const [active, setActive] = useState(false);
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame((state, delta) => (meshRef.current.rotation.x += delta));
//   // Return view, these are regular three.js elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       ref={meshRef}
//       scale={active ? 1.5 : 1}
//       onClick={(event) => setActive(!active)}
//       onPointerOver={(event) => setHover(true)}
//       onPointerOut={(event) => setHover(false)}
//     >
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
//     </mesh>
//   );
// }



function App() {
  const location = {
    address: 'Piazza Istria 21, 54100 Massa MS',
    lat: 44.038834,
    lng: 10.111922
  }
  const zoomLevel = 10
  return (
    <>
      <Nav />
      <div className="container">
        {/* <div className="title-and-contacts"> */}
        <Routes>
          <Route path={`/`} element={<><Links /><Contact /></>}/>
          <Route path={`/mappa`} element={<MapPage location={location} zoomLevel={zoomLevel}/>}/>
        </Routes>
        {/* </div> */}
        <div className="image-main-container">
          <Images />
        </div>
        <svg>
          <filter id="grainy">
            <feTurbulence type="turbulence" baseFrequency="0.65" />
          </filter>
        </svg>
        <Suspense>
          <Canvas
            style={{ height: "100vh", width: "120vw" }}
            camera={{ position: [20, 10, 0], fov: 75 }}
          >
            <OrbitControls />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            {/* <Sphere position={[-1.2, 0, 0]} />
        <Sphere position={[1.2, 0, 0]} /> */}
            {/* <Sphere />
        <SphereTwo/>
        <SphereThree/> */}
          </Canvas>
        </Suspense>
        <Blur />
      </div>
    </>
  );
}

export default App;
