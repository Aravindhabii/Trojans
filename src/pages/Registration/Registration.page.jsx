import React from "react";
import {Navbar} from "../../components/Navbar/Navbar.component";
// import {Container} from "../../styles/container.style";
import "./Registration.css";

function Registration() {
    return (
        <section className="section-registration">
            <Components />
        </section>
    );
}

const Components = () => {
    return (
        <div className="main-registration">
            <div className="input-fields-main-div">
                <div className="heading-registrataion">
                    <h1>Registration</h1>
                </div>
                <div className="form-group">
                    <label htmlFor="name_registration">Name</label>
                    <input
                        type="text"
                        id="name_registration"
                        name="name_registration"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email_registration">Email</label>
                    <input
                        type="text"
                        id="email_registration"
                        email="email_registration"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="college_registration">
                        Name of the College
                    </label>
                    <input
                        type="text"
                        id="college_registration"
                        email="college_registration"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="department_registration">
                        Name of the Department
                    </label>
                    <input
                        type="text"
                        id="department_registration"
                        email="department_registration"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="department_registration">
                        Technical Events
                    </label>
                    <select
                        name="techical_events"
                        id="techical_events"
                        className="techical_events"
                    >
                        <option value="Coder's Chemistry">
                            Coder's Chemistry
                        </option>
                        <option value="Mastermind">Mastermind</option>
                        <option value="Site-ing">Site-ing</option>
                        <option value="Paper Bytes">Paper Bytes</option>
                        <option value="Trojan Throttle">Trojan Throttle</option>
                        <option value="Goose Chase">Goose Chase</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="department_registration">
                        Non Technical Events
                    </label>
                    <select
                        name="non_techical_events"
                        id="non_techical_events"
                        className="non_techical_events"
                    >
                        <option value="No Brainz">No Brainz</option>
                        <option value="Shutter Stop">Shutter Stop</option>
                        <option value="GPU">GPU</option>
                        <option value="Pechu Pechadhan Irukanum">
                            Pechu Pechadhan Irukanum
                        </option>
                        <option value="Talent Festa">Talent Festa</option>
                        <option value="Ship Wreck">Ship Wreck</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

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
