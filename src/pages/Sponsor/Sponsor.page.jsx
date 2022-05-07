import React from 'react';

import Footer from '../../components/Footer/Footer';
import {
	SponsorSection
	// , MembersSection, MembersDiv
} from './sponsor.styles';
// import img from '../../assets/about/1.jpg';
import img2 from '../../assets/about/4.jpg';
// import img3 from '../../assets/about/5.jpg';
import Navbar from '../../components/Navbar/Navbar.component';
// import Tilt from 'react-parallax-tilt';

function Sponsor() {
	return (
		<>
			<Navbar active={{ route: 'sponsor', scroll: 0 }} />
			<SponsorMainSection />
			{/* <DevelopersSection /> */}
			<Footer />
		</>
	);
}

const SponsorMainSection = () => {
	return (
		<SponsorSection>
			<h1>Sponsors</h1>
			<div className='mainmain'>
				<CardComponent url={img2} alt={'poorvika'} name={'Poorvika'} />
			</div>
		</SponsorSection>
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

// const DevelopersSection = () => {
// 	return (
// 		<>
// 			<MembersSection>
// 				<DevelopersCard
// 					name={'Prasanna'}
// 					description={'Developer'}
// 					instagram={'https://www.instagram.com/'}
// 					linkedin={'https://www.linkedin.com/'}
// 					color={'#fffff0'}
// 				/>
// 			</MembersSection>
// 		</>
// 	);
// };

// const DevelopersCard = ({ name, description, instagram, linkedin, color }) => {
// 	return (
// 		<>
// 			<Tilt
// 				tiltEnable={!(window.innerWidth < 900)}
// 				style={{ transformStyle: 'preserve-3d' }}
// 				perspective={4000}
// 			>
// 				<MembersDiv color={color}>
// 					<div className='shadow_conatiner'></div>
// 					<div className='image_div'>
// 						<img
// 							src='https://www.freeiconspng.com/thumbs/account-icon/account-icon-8.png'
// 							alt=''
// 						/>
// 					</div>
// 					<div className='content_div'>
// 						<h2>{name}</h2>
// 						<p>{description}</p>
// 						<div>
// 							<a href={instagram} rel='noopener'>
// 								<img
// 									alt='img'
// 									src='https://img.icons8.com/ios/30/ffffff/instagram-new--v1.png'
// 								/>
// 							</a>
// 							<a href={linkedin} rel='noopener'>
// 								<img
// 									alt='img'
// 									src='https://img.icons8.com/ios/30/ffffff/linkedin.png'
// 								/>
// 							</a>
// 						</div>
// 					</div>
// 				</MembersDiv>
// 			</Tilt>
// 			<Footer />
// 		</>
// 	);
// };

export default Sponsor;
