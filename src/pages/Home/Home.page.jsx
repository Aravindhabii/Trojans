import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Tilt from 'react-parallax-tilt';
import {
	HeroSection,
	HeroContent,
	PhonesContainer,
	PhoneButtonStyles
} from './Home.styles';

import Navbar from '../../components/Navbar/Navbar.component';
import Preloader from '../../components/PreLoader/Preloader.component';

import OnlyLogo_White from '../../assets/Trojans_logo/OnlyLogo_White.png';
import Phone1 from '../../assets/home/phonepng.png';
import Tablet1 from '../../assets/home/tabletpng.png';

const PhoneButton = ({ text, bgColor, url, handlePhoneButtonClick }) => (
	<PhoneButtonStyles
		bgColor={bgColor}
		onClick={() => handlePhoneButtonClick(url)}
	>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		{text}
	</PhoneButtonStyles>
);

const HomePage = () => {
	const trojansRef = useRef();
	const [phonesPosition, setPhonesPosition] = useState({
		phone1: '40%',
		tablet1: '150%'
	});
	const [tabletImage, setTabletImage] = useState(null);

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

	const handlePhoneButtonClick = (url) => {
		console.log(url);
	};

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
			<PhonesContainer
				phone1={Phone1}
				tablet1={Tablet1}
				phonesPosition={phonesPosition}
			>
				<Tilt className='phone-container' perspective={4000}>
					<PhoneButton
						text='Technical Events'
						bgColor='#03e9f4'
						url='https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg'
						handlePhoneButtonClick={handlePhoneButtonClick}
					/>
					<PhoneButton
						text='Non Technical Events'
						bgColor='#03e9f4'
						url='https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg'
						handlePhoneButtonClick={handlePhoneButtonClick}
					/>
					<PhoneButton
						text='Workshops'
						bgColor='#03e9f4'
						url='https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg'
						handlePhoneButtonClick={handlePhoneButtonClick}
					/>
				</Tilt>
				<Tilt className='tablet-container' perspective={4000}>
					<div></div>
				</Tilt>
			</PhonesContainer>
		</>
	);
};

export default HomePage;
