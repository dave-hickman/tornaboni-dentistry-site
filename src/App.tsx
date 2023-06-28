import "./styling/App.css";
import Contact from "./components/Contact";
import Images from "./components/Images";
import { Canvas} from "@react-three/fiber";
import { Suspense } from "react";
import Sphere from "./components/Sphere";
import SphereTwo from "./components/SphereTwo";
import { OrbitControls } from "@react-three/drei";
import SphereThree from "./components/SphereThree";
import Blur from "./components/Blur";
import Nav from "./components/Nav";
import Links from "./components/Links";
import MapPage from "./components/Map";
import { Route, Routes } from "react-router-dom";


function App() {
  const location = {
    address: "Piazza Istria 21, 54100 Massa MS",
    lat: 44.038834,
    lng: 10.111922,
  };
  const zoomLevel = 16;
  return (
    <>
      <Nav />
      <div className="container">
        <Routes>
          <Route
            path={`/`}
            element={
              <>
                <Links />
                <Contact />
              </>
            }
          />
          <Route
            path={`/mappa`}
            element={<MapPage location={location} zoomLevel={zoomLevel} />}
          />
        </Routes>
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
            camera={{ position: [13, 12, -2], fov: 75 }}
          >
            <OrbitControls />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />

            <Sphere />
        <SphereTwo/>
        <SphereThree/>
          </Canvas>
        </Suspense>
        <Blur />
      </div>
    </>
  );
}

export default App;
