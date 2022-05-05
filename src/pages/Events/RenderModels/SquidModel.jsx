import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  // useGLTF,
  OrbitControls,
  // ContactShadows,
  Environment,
  // SpotLight,
} from "@react-three/drei";

import Gaurdsglb from "../models/Gaurdsglb";


export default function SquidModel() {


  return (
    <Canvas
      className="canvas"
      updateDefaultCamera={true}
      camera={{ fov: 60,near: 2, far: 10, z: -5 }}
    >
      <ambientLight intensity={1} />
      <spotLight position={[5, 180, -40]} />
      <pointLight position={[5, 20, 90]} />
      <Environment preset="city" />
      <Suspense fallback={null}>
        <Gaurdsglb/>
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
