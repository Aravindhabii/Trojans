import React from "react";
import {RegistrationDivForm} from "./FormComponent.styles";

function FormComponent() {
    return (
        <RegistrationDivForm>
            <h1>Registration</h1>
            <form>
                <div className="data_events">
                    <label htmlFor="namePerson">Name</label>
                    <input type="text" id="namePerson" name="namePerson" />
                </div>
                <div className="data_events">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className="data_events">
                    <label htmlFor="name_college">Name of the College</label>
                    <input type="email" id="name_college" name="name_college" />
                </div>
                <div className="data_events">
                    <label htmlFor="name_department">
                        Name of the Department
                    </label>
                    <input
                        type="email"
                        id="name_department"
                        name="name_department"
                    />
                </div>
                <div className="events_checkbox">
                    <label htmlFor="technical_events">Technical Events</label>
                    <span>
                        <div>
                            <input
                                type="checkbox"
                                name="coders_Chemistry"
                                id="coders_Chemistry"
                            />
                            <label
                                className="checkbox"
                                htmlFor="coders_Chemistry"
                            >
                                Coder's Chemistry
                            </label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="mastermind"
                                id="mastermind"
                            />
                            <label className="checkbox" htmlFor="mastermind">
                                Mastermind
                            </label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="siteing"
                                id="siteing"
                            />
                            <label className="checkbox" htmlFor="siteing">
                                Site-ing
                            </label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="paperBytes"
                                id="paperBytes"
                            />
                            <label className="checkbox" htmlFor="paperBytes">
                                Paper Bytes
                            </label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="trojanThrottle"
                                id="trojanThrottle"
                            />
                            <label
                                className="checkbox"
                                htmlFor="trojanThrottle"
                            >
                                Trojan Throttle
                            </label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="gooseChase"
                                id="gooseChase"
                            />
                            <label className="checkbox" htmlFor="gooseChase">
                                Goose Chase
                            </label>
                        </div>
                    </span>
                </div>
                <div className="events_checkbox">
                    <label htmlFor="non_technical_events">
                        Non - Technical Events
                    </label>
                    <span>
                        <div>
                            <input
                                type="checkbox"
                                name="coders_Chemistry"
                                id="coders_Chemistry"
                            />
                            <label
                                className="checkbox"
                                htmlFor="coders_Chemistry"
                            >
                                Coder's Chemistry
                            </label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="mastermind"
                                id="mastermind"
                            />
                            <label className="checkbox" htmlFor="mastermind">
                                Mastermind
                            </label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="siteing"
                                id="siteing"
                            />
                            <label className="checkbox" htmlFor="siteing">
                                Site-ing
                            </label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="paperBytes"
                                id="paperBytes"
                            />
                            <label className="checkbox" htmlFor="paperBytes">
                                Paper Bytes
                            </label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="trojanThrottle"
                                id="trojanThrottle"
                            />
                            <label
                                className="checkbox"
                                htmlFor="trojanThrottle"
                            >
                                Trojan Throttle
                            </label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="gooseChase"
                                id="gooseChase"
                            />
                            <label className="checkbox" htmlFor="gooseChase">
                                Goose Chase
                            </label>
                        </div>
                    </span>
                </div>
                <div className="events_checkbox">
                    <label htmlFor="workshops">Workshops</label>
                    <span>
                        <div>
                            <input
                                type="checkbox"
                                name="coders_Chemistry"
                                id="coders_Chemistry"
                            />
                            <label
                                className="checkbox"
                                htmlFor="coders_Chemistry"
                            >
                                Coder's Chemistry
                            </label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="mastermind"
                                id="mastermind"
                            />
                            <label className="checkbox" htmlFor="mastermind">
                                Mastermind
                            </label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="siteing"
                                id="siteing"
                            />
                            <label className="checkbox" htmlFor="siteing">
                                Site-ing
                            </label>
                        </div>
                    </span>
                </div>
                <div className="buttonDiv">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </RegistrationDivForm>
    );
}

export default FormComponent;
