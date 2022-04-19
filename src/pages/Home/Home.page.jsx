import React from 'react';

import { HeroSection } from './Home.styles';

import Navbar from '../../components/Navbar/Navbar.component';

const HomePage = () => {
	return (
		<>
			<Navbar />
			<HeroSection>
				<h1>Trojans</h1>
				<p>We are Trojans</p>
				<a href='/events'>View our events</a>
			</HeroSection>
		</>
	);
};

export default HomePage;
