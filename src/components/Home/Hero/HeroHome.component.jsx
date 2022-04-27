import React from 'react';
import gsap from 'gsap';

import HeroHex from '../../../assets/home/Hexagon.svg';
import OnlyLogo_White from '../../../assets/Trojans_logo/OnlyLogo_White.png';

import { HeroSection, HeroContent } from './HeroHome.style';

const HeroHome = () => {
	return (
		<HeroSection
			onMouseMove={(e) => {
				gsap.to('.hero-bg', {
					duration: 1,
					x: e.clientX - 150,
					y: e.clientY - 150
				});
			}}
			heroHex={HeroHex}
		>
			<div className='hero-bg-container'>
				<div className='hero-hex'></div>
				<div className='hero-bg'></div>
			</div>
			<HeroContent>
				<p>DEPARTMENT OF INFORMATION TECHNOLOGY</p>
				<p> PRESENTS</p>
				<h1 className='trojans-logo'>
					TR
					<img src={OnlyLogo_White} alt='Trojans' />
					JANS
				</h1>
				<p>A NATIONAL LEVEL TECHNICAL SYMOPOSIUM</p>
				<p>EXPLORE</p>
				<a href='#events'>
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
