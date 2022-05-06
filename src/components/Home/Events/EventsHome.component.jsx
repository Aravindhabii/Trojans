import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';

import {
	PhonesContainer,
	PhoneButtonStyles,
	TabImgContainer
} from './EventsHome.style';

import HexBg from '../HexBg/HexBg.component';

import Phone1 from '../../../assets/home/phonepng.png';
import Tablet1 from '../../../assets/home/tabletpng.png';
import TechnicalBg from '../../../assets/home/events/1.jpg';
import NonTechnicalBg from '../../../assets/home/events/2.jpg';
import WorkshopsBg from '../../../assets/home/events/3.jpg';
import HexImg from '../../../assets/home/Hexagon.svg';
import NonTechEventsPoster from '../../../assets/home/events/non-tech-events-poster.png';
import TechEventsPoster from '../../../assets/home/events/tech-events-poster.png';
import WorkshopsPoster from '../../../assets/home/events/workshops-poster.png';

const PhoneButton = ({ text, bgColor, url, handlePhoneButtonClick }) => (
	<>
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
	</>
);

const EventsHome = () => {
	const [phonesPosition, setPhonesPosition] = useState({
		phone1: 50,
		tablet1: -150
	});
	const [tabletImage, setTabletImage] = useState('');

	const handlePhoneButtonClick = (slug) => {
		setPhonesPosition({
			phone1: 20,
			tablet1: 10
		});

		setTabletImage(slug);
	};

	return (
		<PhonesContainer
			phone1={Phone1}
			tablet1={Tablet1}
			phonesPosition={phonesPosition}
			id='events'
			url={TechnicalBg}
		>
			<HexBg direction='to top' svg={HexImg} />
			<main
				onClick={() =>
					setPhonesPosition({
						phone1: 50,
						tablet1: -150
					})
				}
			></main>
			{tabletImage.length > 0 && window.innerWidth < 800 && (
				<div
					className='phone-container-popup'
					onClick={() => setTabletImage('')}
				>
					{/* <svg
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
							d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
						/>
					</svg> */}
					<img
						src={
							tabletImage === 'technical'
								? TechEventsPoster
								: tabletImage === 'non-technical'
								? NonTechEventsPoster
								: WorkshopsPoster
						}
						alt='phone'
					/>
				</div>
			)}
			<Tilt
				tiltEnable={!(window.innerWidth < 900)}
				className='phone-container'
				perspective={4000}
			>
				<PhoneButton
					text='Technical Events'
					bgColor='#03e9f4'
					handlePhoneButtonClick={() => handlePhoneButtonClick('technical')}
				/>
				<PhoneButton
					text='Non Technical Events'
					bgColor='#03e9f4'
					handlePhoneButtonClick={() => handlePhoneButtonClick('non-technical')}
				/>
				<PhoneButton
					text='Workshops'
					bgColor='#03e9f4'
					handlePhoneButtonClick={() => handlePhoneButtonClick('workshops')}
				/>
			</Tilt>
			{window.innerWidth > 500 && (
				<Tilt
					tiltEnable={!(window.innerWidth < 900)}
					className='tablet-container'
					perspective={4000}
				>
					{tabletImage.length > 0 && tabletImage === 'technical' && (
						<TabImgContainer imgUrl={TechnicalBg}>
							<div className='events-bg-content'>
								<h1>TECHNICAL EVENTS</h1>
								<div>
									<p>Paper bytes</p>
									<p>Goose Chase</p>
									<p>Master minds</p>
									<p>Coder's Chemistry</p>
									<p>Trojan's Throttle</p>
									<p>Trojan's CTF</p>
									<p>Site-ing</p>
								</div>
								<a href='/technical'>View more</a>
							</div>
						</TabImgContainer>
					)}
					{tabletImage.length > 0 && tabletImage === 'non-technical' && (
						<TabImgContainer imgUrl={NonTechnicalBg}>
							<div className='events-bg-content'>
								<h1>NON - TECHNICAL EVENTS</h1>
								<div>
									<p>SHUTTER STOP</p>
									<p>SQUID GAME</p>
									<p>BOX CRICKET</p>
									<p>TALENT FEST</p>
									<p>SHIP WRECK</p>
									<p>GAMERS PARADISE UNITED</p>
									<p>ENNA ENNA SOLRAN PAARUNGA</p>
								</div>
								<a href='/nontechnical'>View more</a>
							</div>
						</TabImgContainer>
					)}
					{tabletImage.length > 0 && tabletImage === 'workshops' && (
						<TabImgContainer imgUrl={WorkshopsBg}>
							<div className='events-bg-content'>
								<h1>WORKSHOPS</h1>
								<div>
									<p>
										<span>HANDS ON</span>
										<br />
										MACHINE LEARNING
									</p>
									<br />
									<p>
										<span>HANDS ON</span>
										<br />
										BLOCKCHAIN TECHNOLOGY
									</p>
									<br />
									<p>
										START-UP AND <br /> ENTREPRENEURSHIP
									</p>
								</div>
								<a href='/workshop'>View more</a>
							</div>
						</TabImgContainer>
					)}
				</Tilt>
			)}
		</PhonesContainer>
	);
};

export default EventsHome;
