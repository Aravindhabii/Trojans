import React from 'react';

import { HeroSection, HeroVideo, HeroContent } from './Home.styles';

import Navbar from '../../components/Navbar/Navbar.component';

import Hero1Video from '../../assets/home/hero-video.mp4';

const HomePage = () => {
	return (
		<>
			<Navbar />
			<HeroSection>
				<HeroVideo src={Hero1Video} autoPlay loop />
				<HeroContent>
					<h1>Trojans</h1>
					<p>We are Trojans</p>
					<a href='/events'>View our events</a>
				</HeroContent>
			</HeroSection>
		</>
	);
};

export default HomePage;
