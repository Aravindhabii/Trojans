import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { HeroSection, HeroContent, phonesContainer } from './Home.styles';

import Navbar from '../../components/Navbar/Navbar.component';
import Preloader from '../../components/PreLoader/Preloader.component';
import OnlyLogo_White from '../../assets/Trojans_logo/OnlyLogo_White.png';

const HomePage = () => {
	const trojansRef = useRef();

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		// gsap
		// 	.timeline({
		// 		scrollTrigger: {
		// 			trigger: trojansRef.current,
		// 			start: 'top top',
		// 			pin: true,
		// 			markers: true
		// 		}
		// 	})
		// 	.to('.trojans-logo img', {
		// 		scale: 50
		// 	})
		// 	.to('.trojans-logo img', {
		// 		autoAlpha: 0
		// 	});
	}, []);

	return (
		<>
			{/* <Preloader /> */}
			<Navbar active={{ route: 'home', scroll: 0 }} />
			<HeroSection ref={trojansRef}>
				<HeroContent>
					<h1 className='trojans-logo'>
						TR
						<img src={OnlyLogo_White} alt='Trojans' />
						JANS
					</h1>
					<p>We are Trojans</p>
					<a href='/events'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={2}
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M19 14l-7 7m0 0l-7-7m7 7V3'
							/>
						</svg>
					</a>
				</HeroContent>
			</HeroSection>
			<phonesContainer>
				<div className='phone-container'>
					<div>
						
					</div>
				</div>
			</phonesContainer>
		</>
	);
};

export default HomePage;
