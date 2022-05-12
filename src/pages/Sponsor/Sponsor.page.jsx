import React from 'react';

import Footer from '../../components/Footer/Footer';
import { SponsorSection, MembersSection, MembersDiv } from './sponsor.styles';
import img2 from '../../assets/about/4.jpg';
import Navbar from '../../components/Navbar/Navbar.component';
import Tilt from 'react-parallax-tilt';
import Techiegen from '../../assets/Sponsors/Techiegen.png';

function Sponsor() {
	return (
		<>
			<Navbar active={{ route: 'sponsor', scroll: 0 }} />
			<SponsorMainSection />
			<DevelopersSection />
			<Footer />
		</>
	);
}

const SponsorMainSection = () => {
	return (
		<SponsorSection>
			<h1>Sponsors</h1>
			<div className='mainmain'>
				<CardComponent url={Techiegen} alt={'techiegen'} name={'Techiegen'} />
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
			{/* <div className='overlay'>
				<h2>{name}</h2>
			</div> */}
			{/* <div className='overlay2'></div> */}
		</div>
	);
};

const DevelopersSection = () => {
    return (
        <>
            <h1 style={{color: "white", textAlign: "center"}}>Developers</h1>
            <MembersSection>
                <DevelopersCard
                    name={"Solomon Santhosh I"}
                    description={"Full Stack"}
                    instagram={"https://www.instagram.com/solomon_santy/?hl=en"}
                    linkedin={
                        "https://www.linkedin.com/in/solomon-santhosh-i-4854a3212/"
                    }
                    color={"#ff9933"}
                />
                <DevelopersCard
                    name={"Abii Aravindh R"}
                    description={"Full Stack"}
                    instagram={"https://www.instagram.com/aravindh_abii/?hl=en"}
                    linkedin={
                        "https://www.linkedin.com/in/aravindh-r-9834a6202/"
                    }
                    color={"#fc74fd"}
                />
                <DevelopersCard
                    name={"Lohith R"}
                    description={"Full Stack"}
                    instagram={
                        "https://www.instagram.com/_lohith_s.r.k_/?hl=en"
                    }
                    linkedin={"https://www.linkedin.com/in/lohith-r-518112210/"}
                    color={"#0ff0fc"}
                />
                <DevelopersCard
                    name={"Prasanna"}
                    description={"Full Stack"}
                    instagram={"https://www.instagram.com/prasanna_rv/?hl=en"}
                    linkedin={
                        "https://www.linkedin.com/in/prasanna-rv-a3233a1ba/"
                    }
                    color={"#fe4164"}
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
				style={{ transformStyle: 'preserve-3d', height: '15rem' }}
				perspective={4000}
			>
				<MembersDiv color={color}>
					<div className='shadow_conatiner'></div>
					<div className='image_div'>
						<h2>{name}</h2>
					</div>
					<div className='content_div'>
						<p>{description}</p>
						<div>
							<a href={instagram}>
								<img
									alt='img'
									src='https://img.icons8.com/ios/30/ffffff/instagram-new--v1.png'
								/>
							</a>
							<a href={linkedin}>
								<img
									alt='img'
									src='https://img.icons8.com/ios/30/ffffff/linkedin.png'
								/>
							</a>
						</div>
					</div>
				</MembersDiv>
			</Tilt>
		</>
	);
};

export default Sponsor;
