// import { Suspense, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import {
//   useGLTF,
//   OrbitControls,
//   ContactShadows,
//   Environment,
//   SpotLight,
// } from "@react-three/drei";
// import Fredbear from "./models/Fredbear";
// import GipsyDange from "./models/GipsyDange";
// import Nontechrobo from "./models/Nontechrobo";
// import Workshop from "./models/Scene";
// import Laptop from "./models/Laptop";
// import Bitcoin from "./models/Bitcoin";
// import SquidBot from "./models/Squidbot";
// import Bitcointwo from "./models/Bitcointwo"
// import Bitcointhree from "./models/Bitcointhree"
// import PinkSoldier from "./models/Squidbot"
// import Soldier from "./models/Soldier";
// import Gaurdsglb from "./models/Gaurdsglb";
// import Game from "./models/Game"
// import Cypher from "./models/Cypher";

// export default function Threed() {
//   const [camera, setcamera] = useState({ fov: 20, near: 2, far: 1000, z: 5 })


//   return (
//     <Canvas
//       className="canvas"
//       updateDefaultCamera={true}
//       // camera={{ fov: 10, near: 2, far: 1000, z: 4 }}
//       // camera={{ fov: 100, near:0.2, far: 1000, z: 10 }}
//       // camera={{ fov: 60,near: 2, far: 10, z: -5 }}
//       camera={{ fov: 40,near: 2, far: 10, z: -5 }}
//     >
//       <ambientLight intensity={1} />
//       <spotLight position={[5, 180, -40]} />
//       <pointLight position={[5, 20, 90]} />
//       <Environment preset="city" />
//       <Suspense fallback={null}>
//         {/* <Fredbear /> */}
//         {/* <GipsyDange /> */}
//         {/* <Soldier/> */}
//         {/* <Gaurdsglb/> */}
//         {/* <Game/> */}
//         < Cypher />
//         {/* <Laptop /> */}
//         {/* <Workshop /> */}
//         {/* <Nontechrobo /> */}
//         {/* < SquidBot/> */}
//         {/* <Bitcoin/> */}
//         {/* <Bitcointwo/> */}
//         {/* <Bitcointhree/> */}
//         {/* <PinkSoldier/> */}
//       </Suspense>
//       <OrbitControls
//         autoRotate
//         autoRotateSpeed={5}
//         minPolarAngle={Math.PI / 2}
//         maxPolarAngle={Math.PI / 2}
//         enableZoom={false}
//         minAzimuthAngle={30}
//       />
//     </Canvas>
//   );
// }
