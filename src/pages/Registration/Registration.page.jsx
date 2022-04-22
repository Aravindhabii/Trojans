import React from "react";
import {Navbar} from "../../components/Navbar/Navbar.component";
import Form from "../../components/Registration/Form";
// import Boxes from "../../components/Registration/Boxes";
// import {Container} from "../../styles/container.style";
import Video from "../../assets/Video.mp4"
import "./Registration.css";

function Registration() {
    return (
        <section className="section-registration">
            {/* <div className="box-main-div">
                <Boxes />
            </div> */}
            <div className="video-bg">
                <video>
                    <source src="Video" />
                </video>
                <Form />
            </div>
        </section>
    );
}

// name
// phone
// email
// clg
// dapartment
// qr code / gpay no
// technical events
// non technical events
// workshop

export default Registration;
