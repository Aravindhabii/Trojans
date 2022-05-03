import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

import './about.css';
import CITImg from '../../../assets/Trojans_logo/CIT_Logo_white.png';

import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
import { HeroSection } from './About.styles';

const AboutHome = () => {
	const [display, setDisplay] = useState(1);
	const [contentTrigger, setContentTrigger] = useState(false);
	gsap.registerPlugin(ScrollTrigger);

	const tab = useRef();
	useEffect(() => {
		if (window.innerWidth < '1280') {
			setContentTrigger(true);
		}
		let t1 = gsap.timeline();
		const element = tab.current;

		ScrollTrigger.refresh();
		if (window.innerWidth < '950') {
			t1.to(element.querySelectorAll('.para'), {
				x: 0,
				ease: 'easeInOut',
				duration: 1
			}).to(
				element.querySelectorAll('.about-title'),
				{
					x: 0,
					ease: 'easeInOut',
					duration: 1
				},
				'-=1'
			);
		} else {
			t1.to(element.querySelectorAll('.para'), {
				y: 0,
				ease: 'easeInOut',
				duration: 1
			}).to(
				element.querySelectorAll('.about-title'),
				{
					y: 0,
					ease: 'easeInOut',
					duration: 1
				},
				'-=1'
			);
		}
	}, [display]);
	const handleClick = (type) => {
		if (type == 'goBack') {
			return display == 1 ? null : setDisplay(display - 1);
		} else {
			return display == 3 ? null : setDisplay(display + 1);
		}
	};
	return (
		<>
			<HeroSection contentTrigger={contentTrigger} id='about'>
				{/* <video className='video' loop autoPlay muted>
					<source src={video} type="video/mp4"/>
				</video> */}
				<div ref={tab} className='tab'>
					<span className='btn1' onClick={() => handleClick('goDown')}></span>
					<span className='btn2' onClick={() => handleClick('goBack')}></span>
					<span className='speaker'></span>
					<span className='cam1'></span>
					<span className='cam2'></span>
					<span className='cam3'></span>
					{display == 1 ? (
						<main>
							<h1 className='about-title'>TROJANS</h1>
							<p className='para para1'>
								Trojans is a national level technical symposium organised by the
								IT department of Chennai Institute of Technology. Trojans were
								first launched on the day of 13th March, 2022. Trojans aim to
								make the process of gaining technical knowledge into a more
								interactive and fun activity by organising various events in
								their symposium. Trojans take their name from the hollow wooden
								horse that the Greeks hid inside of during the Trojan War. The
								Trojans, thinking the horse was a gift, opened their walled city
								to accept it, allowing the Greeks to come out of hiding at night
								to attack the sleeping people of Troy. Likewise we Trojans of
								Chennai Institute of Technology want to create a place for
								encouraging the young minds of this generation to invoke the
								creative and tactical side of thinking.
							</p>
						</main>
					) : null}
					{display == 2 ? (
						<main>
							<h1 className='about-title'>
								Chennai Institute of Technology{' '}
								<img src={CITImg} alt='CIT Logo' />
							</h1>
							<p className='para para2'>
								Chennai Institute of Technology (CIT Chennai) is an Industry
								Connected Institute, affiliated to Anna University and is a
								co-educational engineering college located at Kundrathur,
								Chennai, Tamil Nadu, India. It was established in 2010 and was
								established with an objective of providing quality technical
								education with adequate industrial exposure than any other
								college in Chennai. Apart from interactive classroom scenario,
								Chennai Institute of Technology also offer periodic guest
								lectures by experts from many top industries and academic
								background which prepares the students for the ready-to-serve
								industrial requirements.
								{!contentTrigger && (
									<span className='contentextra'>
										Chennai Institute of Technology(CIT) has been approved by
										the AICTE, New Delhi affiliated to Anna University. CIT has
										tie-ups with various company all around the globe for
										students placement, till now CIT holds a placement record of
										92%(Till March,2020) having a highest salary package of 22
										Lakhs per annum.
									</span>
								)}
							</p>
						</main>
					) : null}
					{display == 3 ? (
						<main>
							<h1 className='about-title'>About IT Department of CIT</h1>
							<p className='para para2'>
								The department of Information Technology in Chennai Institute of
								Technology has existed since the year 2019. It’s main aim is to
								develop Engineers who are capable of creating software
								applications for different industries and to manage the
								software, hardware and networks in other industries. The
								department laboratories of IT deparment are interconnected
								through a well designed seamless internet facility with the
								speed of 155 Mbps to facilitate the students with access to web
								resources. The students of IT CIT have participated in various
								national and international level technical events and have
								brought laurel to the department.
							</p>
						</main>
					) : null}
				</div>
			</HeroSection>
		</>
	);
};

export default AboutHome;
