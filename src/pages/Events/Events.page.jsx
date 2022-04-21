import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Navbar from "../../components/Navbar/Navbar.component";
import Threed from "./threed";
import { HeroSection } from "./Events.styles";

const EventsPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection>
        <div className="left"></div>
        <div className="right"></div>
      </HeroSection>
    </>
  );
};

export default EventsPage;
