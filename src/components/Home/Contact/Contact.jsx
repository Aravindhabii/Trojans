import React from "react";

import {ContactSection, ContactContainer} from "./Contact.styles";

function Contact() {
    return (
        <>
            <ContactSection>
                <ContactContainer>
                    <h1>Contact</h1>
                    <h2>President</h2>
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
