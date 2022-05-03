import React, { useRef } from 'react';

import {
	ContactSection,
	ContactContainer,
	ContactPerson,
	HoverContact
} from './Contact.styles';

import ContactForm from './ContactForm/ContactForm.component';

function Contact() {
	return (
		<>
			<ContactSection>
				{/* <video autoPlay loop muted>
                    <source src={NeonVideo} type="video/mp4" />
                </video> */}
				<ContactContainer>
					<h1>Contact</h1>
					<p>What to learn more about us ? Confused ?</p>
					<p>Contact us to know more about us.</p>
					<ContactPerson>
						<p>
							<span>President (Vijay)</span>
							<span>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								:
							</span>
							<a href='tel:+919500373830'> +91 95003 73830</a>
						</p>
					</ContactPerson>
					<ContactPerson>
						<p>
							<span>Vice President (Anu)</span>
							<span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span>
							<a href='tel:+919840189946'> +91 98401 89946</a>
						</p>
					</ContactPerson>
					<ContactPerson>
						<p>
							<span>Secretary (Karthikeyan)</span>
							<span> :</span>
							<a href='tel:+919962572312'> +91 99625 72312</a>
						</p>
					</ContactPerson>
					<HoverContact>
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
					</HoverContact>
				</ContactContainer>
				<ContactForm />
			</ContactSection>
		</>
	);
}

export default Contact;
