import React, {useState} from "react";
import Form from "../../components/Registration/Form";
import Navbar from "../../components/Navbar/Navbar.component";
// import Boxes from "../../components/Registration/Boxes";
// import {Container} from "../../styles/container.style";
import Shadow from '../../components/Registration/Shadow';
import Video from '../../assets/Video.mp4';
import './Registration.css';

function Registration() {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <section className="section-registration">
            <Shadow isClicked={isClicked} setIsClicked={setIsClicked} />
            {!isClicked ? <Form /> : null}
        </section>
    );
}

export default Registration;
