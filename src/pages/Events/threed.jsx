import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  ContactShadows,
  Environment,
  SpotLight,
} from "@react-three/drei";
import Fredbear from "./models/Fredbear";
import GipsyDange from "./models/GipsyDange";
import Nontechrobo from "./models/Nontechrobo";
import Workshop from "./models/Scene";

export default function Threed() {
  return (
    <Canvas
      className="canvas"
      updateDefaultCamera={true}
      camera={{ fov: 20, near: 2, far: 1000, z: 5 }}
    >
      <ambientLight intensity={1} />
      <spotLight position={[5, 180, -40]} />
      <pointLight position={[5, 20, 90]} />
      <Environment preset="city" />
      <Suspense fallback={null}>
        {/* <Fredbear /> */}
        <GipsyDange />
        {/* <Workshop /> */}
        {/* <Nontechrobo /> */}
      </Suspense>
      <OrbitControls
        autoRotate
        autoRotateSpeed={5}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
        minAzimuthAngle={30}
      />
    </Canvas>
  );
}
