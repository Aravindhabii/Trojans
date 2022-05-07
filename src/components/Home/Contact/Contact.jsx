import React from "react";

import {
    ContactSection,
    ContactContainer,
    ContactPerson,
    // HoverContact
} from "./Contact.styles";

import HexImg from "../../../assets/home/Hexagon.svg";
import HexBg from "../HexBg/HexBg.component";
import ContactForm from "./ContactForm/ContactForm.component";

function Contact() {
    return (
        <>
            <ContactSection id="contact">
                <HexBg
                    direction="to top"
                    style={{height: "100%", zIndex: -1}}
                    svg={HexImg}
                />
                {/* <video autoPlay loop muted>
                    <source src={NeonVideo} type="video/mp4" />
                </video> */}
                <ContactContainer style={{marginLeft: "6rem"}}>
                    <h1>Contact</h1>
                    <p>Curious to learn more about us? </p>
                    <p>We are just a call away..</p>
                    <ContactPerson>
                        <p>
                            <span>President (Vijay)</span>
                            <span>:</span>
                            <a href="tel:+919500373830"> +91 95003 73830</a>
                        </p>
                    </ContactPerson>
                    <ContactPerson>
                        <p>
                            <span>Vice President (Anumesh)</span>
                            <span> :</span>
                            <a href="tel:+919840189946"> +91 98401 89946</a>
                        </p>
                    </ContactPerson>
                    <ContactPerson>
                        <p>
                            <span>Secretary (Karthikeyan)</span>
                            <span> :</span>
                            <a href="tel:+919962572312"> +91 99625 72312</a>
                        </p>
                    </ContactPerson>
                    <ContactPerson>
                        <p>
                            <span>Staff Co-ordinator (Dr.K.Anand)</span>
                            <span> :</span>
                            <a href="tel:+919444279907"> +91 94442 79907</a>
                        </p>
                    </ContactPerson>
                    {/* <HoverContact>
						<span
							style={{
								transform: 'rotate(calc(36deg * 1))',
								animationDelay: 'calc(-0.25s * 1)'
							}}
						></span>
						<span
							style={{
								transform: 'rotate(calc(36deg * 2))',
								animationDelay: 'calc(-0.25s * 2)'
							}}
						></span>
						<span
							style={{
								transform: 'rotate(calc(36deg * 3))',
								animationDelay: 'calc(-0.25s * 3)'
							}}
						></span>
						<span
							style={{
								transform: 'rotate(calc(36deg * 4))',
								animationDelay: 'calc(-0.25s * 4)'
							}}
						></span>
						<span
							style={{
								transform: 'rotate(calc(36deg * 5))',
								animationDelay: 'calc(-0.25s * 5)'
							}}
						></span>
						<span
							style={{
								transform: 'rotate(calc(36deg * 6))',
								animationDelay: 'calc(-0.25s * 6)'
							}}
						></span>
						<span
							style={{
								transform: 'rotate(calc(36deg * 7))',
								animationDelay: 'calc(-0.25s * 7)'
							}}
						></span>
						<span
							style={{
								transform: 'rotate(calc(36deg * 8))',
								animationDelay: 'calc(-0.25s * 8)'
							}}
						></span>
						<span
							style={{
								transform: 'rotate(calc(36deg * 9))',
								animationDelay: 'calc(-0.25s * 9)'
							}}
						></span>
						<span
							style={{
								transform: 'rotate(calc(36deg *10))',
								animationDelay: 'calc(-0.25s * 10)'
							}}
						></span>
					</HoverContact> */}
                </ContactContainer>
                <ContactForm />
            </ContactSection>
        </>
    );
}

export default Contact;
