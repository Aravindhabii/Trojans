import React from "react";
import gsap from "gsap";

import Navbar from "../../components/Navbar/Navbar.component";
import Preloader from "../../components/PreLoader/Preloader.component";
import HeroHome from "../../components/Home/Hero/HeroHome.component";
import EventsHome from "../../components/Home/Events/EventsHome.component";
import Contact from "../../components/Home/Contact/Contact";
import AboutHome from "../../components/Home/About/About.component";

const HomePage = () => (
    <div
        onMouseMove={(e) => {
            gsap.to(".bg", {
                duration: 1,
                x: e.clientX - 150,
                y: e.clientY - 150,
            });
        }}
    >
        {/* <Preloader /> */}
        <Navbar active={{route: "home", scroll: 0}} />
        <HeroHome />
        {/* <AboutHome /> */}
        <EventsHome />
        <Contact />
    </div>
);

export default HomePage;
