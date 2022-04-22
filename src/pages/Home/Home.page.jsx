import React from 'react';

import { HeroSection, HeroContent } from './Home.styles';

import Navbar from '../../components/Navbar/Navbar.component';
import OnlyLogo_White from '../../assets/Trojans_logo/OnlyLogo_White.png';

const HomePage = () => {
	return (
		<>
			<Navbar active={{ route: 'home', scroll: 0 }} />
			<HeroSection>
				<HeroContent>
					<h1>
						TR
						<img src={OnlyLogo_White} alt='Trojans' />
						JANS
					</h1>
					<p>We are Trojans</p>
					<a href='/events'>View our events</a>
				</HeroContent>
			</HeroSection>
		</>
	);
};

export default HomePage;
