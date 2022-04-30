import React from "react";
import "./Form.css";

function Form() {
    return (
        <div className="main-registration">
            <div className="input-fields-main-div">
                <form className="form-registration">
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
                            <option
                                value="selct_any_one"
                                className="options-styling"
                                disabled
                                selected
                            >
                                Select Any One
                            </option>
                            <option
                                className="options-styling"
                                value="Coder's Chemistry"
                            >
                                Coder's Chemistry
                            </option>
                            <option
                                className="options-styling"
                                value="Mastermind"
                            >
                                Mastermind
                            </option>
                            <option
                                className="options-styling"
                                value="Site-ing"
                            >
                                Site-ing
                            </option>
                            <option
                                className="options-styling"
                                value="Paper Bytes"
                            >
                                Paper Bytes
                            </option>
                            <option
                                className="options-styling"
                                value="Trojan Throttle"
                            >
                                Trojan Throttle
                            </option>
                            <option
                                className="options-styling"
                                value="Goose Chase"
                            >
                                Goose Chase
                            </option>
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
                            <option
                                value="selct_any_one"
                                className="options-styling"
                                disabled
                                selected
                            >
                                Select Any One
                            </option>
                            <option
                                className="options-styling"
                                value="No Brainz"
                            >
                                No Brainz
                            </option>
                            <option
                                className="options-styling"
                                value="Shutter Stop"
                            >
                                Shutter Stop
                            </option>
                            <option className="options-styling" value="GPU">
                                GPU
                            </option>
                            <option
                                className="options-styling"
                                value="Pechu Pechadhan Irukanum"
                            >
                                Pechu Pechadhan Irukanum
                            </option>
                            <option
                                className="options-styling"
                                value="Talent Festa"
                            >
                                Talent Festa
                            </option>
                            <option
                                className="options-styling"
                                value="Ship Wreck"
                            >
                                Ship Wreck
                            </option>
                        </select>
                    </div>
                    <div className="form-button">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;
