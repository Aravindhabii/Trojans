import React from "react";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Navbar from "../../components/Navbar/Navbar.component";

const EventsPage = () => {
  const loader = new GLTFLoader();

  loader.load(
    "path/to/model.glb",
    function (gltf) {
      scene.add(gltf.scene);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
  
  return (
    <>
      <Navbar />
      <div></div>
    </>
  );
};

export default EventsPage;
