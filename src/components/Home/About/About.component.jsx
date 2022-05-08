import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

import './about.css';
import CITImg from "../../../assets/Trojans_logo/CIT_Logo_white.webp";

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
								Trojans is a National Level Technical Symposium organized by the
								department of Information Technology, Chennai Institute of
								Technology. Trojans emerged from the shadows on March 13th,
								2022. Trojans aims to provide a platform for students to explore
								and exhibit their talents as well as learn about various
								technologies that persist in the IT industry. Our name is
								inspired from the historical trojan horse, which was a clever
								instrument used in the trojan war to turn the tides of the war.
								Our symposium, was also conceived by similar clever maneuvers
								and has now become a phenomenon of great significance and flair.
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
								college in Chennai.
							</p>
						</main>
					) : null}
					{display == 3 ? (
						<main>
							<h1 className='about-title'>IT Department of CIT</h1>
							<p className='para para2'>
								The department of Information Technology at Chennai Institute of
								Technology came into existence in the year 2019. Our mission is
								to develop industry-ready engineers who excel in the various
								domains of IT. The department also encourages innovative
								projects and quality research in various interrelated domains.
								They are exposed to various opportunities such as implant
								training, internships, and workshops during their course of
								study.
							</p>
						</main>
					) : null}
				</div>
			</HeroSection>
		</>
	);
};

export default AboutHome;
