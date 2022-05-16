import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
// import { useSpring } from 'react-spring';
import gsap from 'gsap';

import Navbar from '../../components/Navbar/Navbar.component';
// import Threed from './threed';
import LaptopModel from './RenderModels/LaptopModel';
import GamingModel from './RenderModels/GamingModel';
import SquidModel from './RenderModels/SquidModel';
import BitCoinModel from './RenderModels/BitCoinModel';
import svg from '../../assets/events/binarynumber.svg';
// import rain from '../../assets/events/rain.svg';
import rain from '../../assets/events/rain.svg';
import HexBg from '../../components/Home/HexBg/HexBg.component';

import {
	HeroSection,
	Button,
	Threeddiv,
	Righttwo,
	Rightone,
	Tabletdiv
} from './Events.styles';
import {
	CodersChemistry,
	MasterMinds,
	SiteIng,
	PaperBytes,
	GooseChase,
	TrojansThrottle,
	ShutterStop,
	ShipWreck,
	TalentFest,
	SquidGame,
	BoxCricket,
	Entrepreneur,
	ShutterStopOffline,
	Advertisement,
	TrojansCtf,
	Blockchain,
	MachineLearning,
	BGMI,
	Valorant,
	FreeFireMax
} from '../../datas/events.data';

import Technical from '../../components/events/Technical';
import Tablet from '../../components/events/Tablet';
import {
	technicalevents,
	nontechnicalevents,
	workshops,
	gaming
} from '../../datas/technical.data';

const EventsPage = (props) => {
	const { page } = props;
	const [currentPage, setCurrentPage] = useState(technicalevents);
	const [isphoneopen, setisphoneopen] = useState(false);
	const [currentEvent, setCurrentEvent] = useState(CodersChemistry);
	const [clickedEvent, setClickedEvent] = useState('');
	const [selectedEvent, setSelectedEvent] = useState('');
	const [isTabletOpen, setisTabletOpen] = useState(false);

	// const animation = useSpring({
	// 	from: {
	// 		opacity: 0
	// 	},
	// 	to: {
	// 		opacity: 1
	// 	}
	// });

	const closetab = () => {
		setisTabletOpen(false);
	};

	const phoneClick = (e) => {
		if (isphoneopen === true && window.screen.width < 910) {
			setisphoneopen(false);
			setClickedEvent('');
		}
	};

	useEffect(() => {
		if (page === 'technicalevents') {
			setCurrentPage(technicalevents);
			setClickedEvent('technicalevents');
			setisphoneopen(true);
		} else if (page === 'nontechnicalevents') {
			setCurrentPage(nontechnicalevents);
			setClickedEvent('nontechnicalevents');
			setisphoneopen(true);
		} else if (page === 'gaming') {
			setCurrentPage(gaming);
			setClickedEvent('gaming');
			setisphoneopen(true);
		} else if (page === 'workshops') {
			setCurrentPage(workshops);
			setClickedEvent('workshops');
			setisphoneopen(true);
		}
	}, [page]);

	useEffect(() => {
		if (selectedEvent === 'CODERS CHEMISTRY') {
			setCurrentEvent(CodersChemistry);
		} else if (selectedEvent === 'MASTER MINDS') {
			setCurrentEvent(MasterMinds);
		} else if (selectedEvent === 'SITE-ING') {
			setCurrentEvent(SiteIng);
		} else if (selectedEvent === 'PAPER BYTES') {
			setCurrentEvent(PaperBytes);
		} else if (selectedEvent === 'GOOSE CHASE') {
			setCurrentEvent(GooseChase);
		} else if (selectedEvent === "TROJAN'S THROTTLE") {
			setCurrentEvent(TrojansThrottle);
		} else if (selectedEvent === 'TROJANSCTF') {
			setCurrentEvent(TrojansCtf);
		} else if (selectedEvent === 'SHUTTER STOP ONLINE') {
			setCurrentEvent(ShutterStop);
		} else if (selectedEvent === 'SHUTTER STOP OFFLINE') {
			setCurrentEvent(ShutterStopOffline);
		} else if (selectedEvent === 'SHIP WRECK') {
			setCurrentEvent(ShipWreck);
		} else if (selectedEvent === 'TALENT FEST') {
			setCurrentEvent(TalentFest);
		} else if (selectedEvent === 'SQUID GAME') {
			setCurrentEvent(SquidGame);
		} else if (selectedEvent === 'ENNA ENNA SOLRAN PARUNGA') {
			setCurrentEvent(Advertisement);
		} else if (selectedEvent === 'BOX CRICKET') {
			setCurrentEvent(BoxCricket);
		} else if (selectedEvent === 'MACHINE LEARNING') {
			setCurrentEvent(MachineLearning);
		} else if (selectedEvent === 'BLOCKCHAIN') {
			setCurrentEvent(Blockchain);
		} else if (selectedEvent === 'ENTREPRENEUR') {
			setCurrentEvent(Entrepreneur);
		} else if (selectedEvent === 'VALORANT') {
			setCurrentEvent(Valorant);
		} else if (selectedEvent === 'BGMI') {
			setCurrentEvent(BGMI);
		} else if (selectedEvent === 'FREE FIRE') {
			setCurrentEvent(FreeFireMax);
		}
	}, [selectedEvent]);

	const ThreedModel = () => {
		if (clickedEvent === 'technicalevents') {
			return <LaptopModel />;
		} else if (clickedEvent === 'nontechnicalevents') {
			return <SquidModel />;
		} else if (clickedEvent === 'gaming') {
			return <GamingModel />;
		} else if (clickedEvent === 'workshops') {
			return <BitCoinModel />;
		} else {
			return <GamingModel />;
		}
	};

	const click = (e) => {
		if (e.target.value !== clickedEvent) {
			setClickedEvent(e.target.value);
			setisphoneopen(true);
		} else {
			setisphoneopen(false);
			setClickedEvent('');
		}
	};

	return (
		<section
			style={{
				height: '100vh',
				width: '100vw',
				overflow: 'hidden',
				position: 'relative'
			}}
			onMouseMove={(e) => {
				gsap.to('.bg', {
					duration: 1,
					x: e.clientX - 150,
					y: e.clientY - 150
				});
			}}
		>
			<HexBg direction='to bottom' svg={svg} color='rgba(3, 233, 244, 0.9)' />
			<Helmet>
				<title>TROJANS | EVENTS</title>
			</Helmet>
			<Navbar active={{ route: 'events', scroll: 2 }} />
			<HeroSection isphoneopen={isphoneopen}>
				<div className='left'>
					<Button value='technicalevents' onClick={click} rain={rain}>
						Technical
					</Button>
					<Button value='nontechnicalevents' onClick={click} rain={rain}>
						Non-Technical
					</Button>
					<Button value='gaming' onClick={click} rain={rain}>
						Gaming
					</Button>
					<Button value='workshops' onClick={click}>
						Workshops
					</Button>
				</div>
				<div className='right' onClick={phoneClick}>
					<Rightone isphoneopen={isphoneopen}>
						<Threeddiv openorclose={isphoneopen}>
							{/* <div> */}

							<ThreedModel />

							{/* </div> */}
						</Threeddiv>
					</Rightone>
					<Righttwo openorclose={isphoneopen}>
						<Technical
							setCurrentEvent={setCurrentEvent}
							currentEvent={currentEvent}
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
							clickedEvent={clickedEvent}
							setClickedEvent={setClickedEvent}
							selectedEvent={selectedEvent}
							setSelectedEvent={setSelectedEvent}
							isTabletOpen={isTabletOpen}
							setisTabletOpen={setisTabletOpen}
						/>
					</Righttwo>
				</div>
			</HeroSection>
			<Tabletdiv isTabletOpen={isTabletOpen} setisTabletOpen={setisTabletOpen}>
				<div onClick={closetab} className='forclose'></div>
				<Tablet
					currentEvent={currentEvent}
					isTabletOpen={isTabletOpen}
					setisTabletOpen={setisTabletOpen}
				/>
			</Tabletdiv>
		</section>
	);
};

export default EventsPage;
