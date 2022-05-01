import React from "react";

import {
    ContactSection,
    ContactContainer,
    ContactPerson,
    HoverContact,
} from "./Contact.styles";
// import NeonVideo from "../../../assets/about/Frame11.mp4";

function Contact() {
    return (
        <>
            <ContactSection>
                {/* <video autoPlay loop muted>
                    <source src={NeonVideo} type="video/mp4" />
                </video> */}
                <ContactContainer>
                    <h1>Contact</h1>
                    <h2>What to learn more about us ? Confused ?</h2>
                    <h3>Contact us to know more about us.</h3>
                    <ContactPerson>
                        <h2>President : 8787878787</h2>
                    </ContactPerson>
                    <ContactPerson>
                        <h2>Vice President : 8787878787</h2>
                    </ContactPerson>
                    <ContactPerson>
                        <h2>Secretary : 8787878787</h2>
                    </ContactPerson>
                    <HoverContact>
                        <span
                            style={{
                                transform: "rotate(calc(36deg * 1))",
                                animationDelay: "calc(-0.25s * 1)",
                            }}
                        ></span>
                        <span
                            style={{
                                transform: "rotate(calc(36deg * 2))",
                                animationDelay: "calc(-0.25s * 2)",
                            }}
                        ></span>
                        <span
                            style={{
                                transform: "rotate(calc(36deg * 3))",
                                animationDelay: "calc(-0.25s * 3)",
                            }}
                        ></span>
                        <span
                            style={{
                                transform: "rotate(calc(36deg * 4))",
                                animationDelay: "calc(-0.25s * 4)",
                            }}
                        ></span>
                        <span
                            style={{
                                transform: "rotate(calc(36deg * 5))",
                                animationDelay: "calc(-0.25s * 5)",
                            }}
                        ></span>
                        <span
                            style={{
                                transform: "rotate(calc(36deg * 6))",
                                animationDelay: "calc(-0.25s * 6)",
                            }}
                        ></span>
                        <span
                            style={{
                                transform: "rotate(calc(36deg * 7))",
                                animationDelay: "calc(-0.25s * 7)",
                            }}
                        ></span>
                        <span
                            style={{
                                transform: "rotate(calc(36deg * 8))",
                                animationDelay: "calc(-0.25s * 8)",
                            }}
                        ></span>
                        <span
                            style={{
                                transform: "rotate(calc(36deg * 9))",
                                animationDelay: "calc(-0.25s * 9)",
                            }}
                        ></span>
                        <span
                            style={{
                                transform: "rotate(calc(36deg *10))",
                                animationDelay: "calc(-0.25s * 10)",
                            }}
                        ></span>
                    </HoverContact>
                </ContactContainer>
                <ContactContainer>
                    <form action="">
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div>
                            <label htmlFor="name">Message</label>
                            <textarea name="message" id="message"></textarea>
                        </div>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </ContactContainer>
            </ContactSection>
        </>
    );
}

export default Contact;
