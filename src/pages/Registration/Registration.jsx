import React from "react";
import RegistrationComponent from "../../components/Registration/RegistrationComponent";
import Navbar from "../../components/Navbar/Navbar.component";
import Footer from "../../components/Footer/Footer";

function Registration() {
    return (
        <>
            <Navbar active={{route: "registration", scroll: 0}} />
            <RegistrationComponent />
            {/* <Footer /> */}
        </>
    );
}

export default Registration;
