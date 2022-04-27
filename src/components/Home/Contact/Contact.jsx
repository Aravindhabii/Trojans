import React from "react";

import {
    ContactSection,
    ContactContainer,
    ContactPerson,
} from "./Contact.styles";

function Contact() {
    return (
        <>
            <ContactSection>
                <ContactContainer>
                    <h1>Contact</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure molestiae iste nam, quae cumque saepe. Atque
                        perspiciatis eum incidunt ipsam ducimus odit soluta
                        nobis dolor, esse nisi, necessitatibus voluptas. Ut!
                    </p>
                    <ContactPerson>
                        <h2>President : 8787878787</h2>
                    </ContactPerson>
                    <ContactPerson>
                        <h2>Vice President : 8787878787</h2>
                    </ContactPerson>
                    <ContactPerson>
                        <h2>Secretary : 8787878787</h2>
                    </ContactPerson>
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
