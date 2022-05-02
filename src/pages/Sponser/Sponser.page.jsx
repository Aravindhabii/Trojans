import React, { useEffect, useRef, useState } from 'react';
import { SponserSection, MembersSection, MembersDiv } from './sponser.styles';
import img from '../../assets/about/1.jpg';
import img2 from '../../assets/about/4.jpg';
import img3 from '../../assets/about/5.jpg';
import Navbar from '../../components/Navbar/Navbar.component';
import gsap from 'gsap';
import Tilt from 'react-parallax-tilt';

function Sponser() {
	return (
		<>
			<Navbar active={{ route: 'sponser', scroll: 0 }} />
			<SponserMainSection />
			<DevelopersSection />
		</>
	);
}

const SponserMainSection = () => {
	return (
		<SponserSection>
			<h1>Sponsers</h1>
			<div className='mainmain'>
				<CardComponent url={img2} name={'Poorvika'} />
				<CardComponent url={img2} name={'Poorvika'} />
				<CardComponent url={img2} name={'Poorvika'} />
				<CardComponent url={img2} name={'Poorvika'} />
				<CardComponent url={img2} name={'Poorvika'} />
				<CardComponent url={img2} name={'Poorvika'} />
			</div>
		</SponserSection>
	);
};

const CardComponent = ({ url, name }) => {
	return (
		<div className='main'>
			<div className='sp1'>
				<img src={url} alt='' />
			</div>
			<div className='overlay'>
				<h2>{name}</h2>
			</div>
			<div className='overlay2'></div>
		</div>
	);
};

const DevelopersSection = () => {
	return (
		<>
			<MembersSection>
				<DevelopersCard
					name={'Prasanna'}
					description={'Developer'}
					instagram={'https://www.instagram.com/'}
					linkedin={'https://www.linkedin.com/'}
					color={'#ff3503'}
				/>
			</MembersSection>
		</>
	);
};

const DevelopersCard = ({ name, description, instagram, linkedin, color }) => {
	return (
		<>
			<Tilt
				tiltEnable={!(window.innerWidth < 900)}
				style={{ transformStyle: 'preserve-3d' }}
				perspective={4000}
			>
				<MembersDiv color={color}>
					<div className='shadow_conatiner'></div>
					<div className='image_div'>
						<img
							src='https://www.freeiconspng.com/thumbs/account-icon/account-icon-8.png'
							alt=''
						/>
					</div>
					<div className='content_div'>
						<h2>{name}</h2>
						<p>{description}</p>
						<div>
							<a href={instagram} target='_blank'>
								<img src='https://img.icons8.com/ios/30/ffffff/instagram-new--v1.png' />
							</a>
							<a href={linkedin} target='_blank'>
								<img src='https://img.icons8.com/ios/30/ffffff/linkedin.png' />
							</a>
						</div>
					</div>
				</MembersDiv>
			</Tilt>
		</>
	);
};

export default Sponser;