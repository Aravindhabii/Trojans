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
        <div className="main-section">
            <section className="section-registration">
                <img
                className="image-registration"
                    src="https://cdn.searchenginejournal.com/wp-content/uploads/2019/11/why-technical-seo-and-on-site-seo-is-rarely-enough-5dcfef7155db8.png"
                    alt=""
                />
                <Shadow isClicked={isClicked} setIsClicked={setIsClicked} />
                {!isClicked ? <Form /> : null}
            </section>
        </div>
    );
}

export default Registration;
