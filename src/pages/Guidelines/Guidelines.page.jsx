import React from "react";

import Navbar from "../../components/Navbar/Navbar.component";
import FirstSection from "../../components/Guidelines/FirstSection";
import Footer from "../../components/Footer/Footer";

const GuidelinesPage = () => {
    return (
        <>
            <Navbar active={{route: "guidelines", scroll: 3}} />
            <FirstSection />
            {/* <Footer /> */}
        </>
    );
};

export default GuidelinesPage;
