import React from 'react';

import TrojansGold from '../../../assets/Trojans_logo/trojans-compressed.webp';

import { HeroSection, HeroContent } from './HeroHome.style';

import HexImg from '../../../assets/home/Hexagon.svg';
import HexBg from '../HexBg/HexBg.component';

const HeroHome = () => {
	return (
		<HeroSection>
			<HexBg direction='to bottom' svg={HexImg} />
			<HeroContent>
				<h3>DEPARTMENT OF INFORMATION TECHNOLOGY</h3>
				<h3> PRESENTS</h3>
				<img src={TrojansGold} alt='Trojans' />
				<h3>A NATIONAL LEVEL TECHNICAL SYMPOSIUM</h3>
				{/* <h3>EXPLORE</h3> */}
				<a href='/registration'>
					<h1 className='registration_link'>REGISTER</h1>
				</a>
				<a href='#about'>
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
	);
};

export default HeroHome;
