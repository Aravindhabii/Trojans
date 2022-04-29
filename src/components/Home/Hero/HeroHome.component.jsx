import React from 'react';
import Tilt from 'react-parallax-tilt';

import TrojansGold from '../../../assets/Trojans_logo/trojans-full-gold-min.png';

import { HeroSection, HeroContent } from './HeroHome.style';

import HexBg from '../HexBg/HexBg.component';

const HeroHome = () => {
	return (
		<HeroSection>
			<HexBg direction='to bottom' />
			<HeroContent>
				<h3>DEPARTMENT OF INFORMATION TECHNOLOGY</h3>
				<h3> PRESENTS</h3>
				<img src={TrojansGold} alt='Trojans' />
				<h3>A NATIONAL LEVEL TECHNICAL SYMOPOSIUM</h3>
				<h3>EXPLORE</h3>
				{/* <a href='#events'> */}
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
				{/* </a> */}
			</HeroContent>
		</HeroSection>
	);
};

export default HeroHome;
