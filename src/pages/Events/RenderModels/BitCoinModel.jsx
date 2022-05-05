import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  // useGLTF,
  OrbitControls,
  // ContactShadows,
  Environment,
  // SpotLight,
} from "@react-three/drei";

import Bitcointhree from "../models/Bitcointhree";

export default function BitCoinModel() {
  return (
    <Canvas
      className="canvas"
      updateDefaultCamera={true}
      camera={{ fov: 100, near:0.2, far: 1000, z: 10 }}
    >
      <ambientLight intensity={1} />
      <spotLight position={[5, 180, -40]} />
      <pointLight position={[5, 20, 90]} />
      <Environment preset="city" />
      <Suspense fallback={null}>
        <Bitcointhree />
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
