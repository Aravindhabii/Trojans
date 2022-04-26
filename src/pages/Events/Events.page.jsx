import React, { useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Navbar from '../../components/Navbar/Navbar.component';
import Threed from './threed';
import {
	HeroSection,
	Button,
	Threeddiv,
	Righttwo,
	Rightone
} from './Events.styles';
import Technical from '../../components/events/Technical';
// import {nontechnicalevents,workshops } from "../../datas/technical.data";
import {
	technicalevents,
	nontechnicalevents,
	workshops
} from '../../datas/technical.data';

const EventsPage = () => {
	const [currentPage, setCurrentPage] = useState([]);
	const [isphoneopen, setisphoneopen] = React.useState(false);

	const click = (e) => {
		if (e.target.value != currentPage) {
			setCurrentPage(e.target.value);
			setisphoneopen(true);
		} else {
			setisphoneopen(false);
			setCurrentPage('');
		}
	};

	return (
		<>
			<Navbar active={{ route: 'events', scroll: 2 }} />
			<HeroSection>
				<div className='left'>
					<Button value='technicalevents' onClick={click}>
						Technical
					</Button>
					<Button value='nontechnicalevents' onClick={click}>
						Non-Technical
					</Button>
					<Button value='workshops' onClick={click}>
						Workshops
					</Button>
				</div>
				<div className='right'>
					<Rightone>
						<Threeddiv openorclose={isphoneopen}>
							<Threed />
						</Threeddiv>
					</Rightone>
					<Righttwo openorclose={isphoneopen}>
						<Technical
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
						/>
					</Righttwo>
				</div>
			</HeroSection>
		</>
	);
};

export default EventsPage;
