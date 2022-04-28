import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';

import { PhonesContainer, PhoneButtonStyles } from './EventsHome.style';

import HexBg from '../HexBg/HexBg.component';

import Phone1 from '../../../assets/home/phonepng.png';
import Tablet1 from '../../../assets/home/tabletpng.png';

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

	const handlePhoneButtonClick = (url) => {
		setPhonesPosition({
			phone1: 20,
			tablet1: 10
		});
		setTabletImage(url);
	};

	return (
		<PhonesContainer
			phone1={Phone1}
			tablet1={Tablet1}
			phonesPosition={phonesPosition}
			url={tabletImage}
			id='events'
		>
			<HexBg direction='to top' />
			<main
				onClick={() =>
					setPhonesPosition({
						phone1: '50%',
						tablet1: '-150%'
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
					<img src={tabletImage} alt='phone' />
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
					url='https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg'
					handlePhoneButtonClick={handlePhoneButtonClick}
				/>
				<PhoneButton
					text='Non Technical Events'
					bgColor='#03e9f4'
					url='https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
					handlePhoneButtonClick={handlePhoneButtonClick}
				/>
				<PhoneButton
					text='Workshops'
					bgColor='#03e9f4'
					url='https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY='
					handlePhoneButtonClick={handlePhoneButtonClick}
				/>
			</Tilt>
			{window.innerWidth > 500 && (
				<Tilt
					tiltEnable={!(window.innerWidth < 900)}
					className='tablet-container'
					perspective={4000}
				>
					<div></div>
				</Tilt>
			)}
		</PhonesContainer>
	);
};

export default EventsHome;
