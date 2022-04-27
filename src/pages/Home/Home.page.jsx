import React from 'react';

import Navbar from '../../components/Navbar/Navbar.component';
import Preloader from '../../components/PreLoader/Preloader.component';
import HeroHome from '../../components/Home/Hero/HeroHome.component';
import EventsHome from '../../components/Home/Events/EventsHome.component';

const HomePage = () => (
	<div>
		<Preloader />
		<Navbar active={{ route: 'home', scroll: 0 }} />
		<HeroHome />
		<EventsHome />
	</div>
);

export default HomePage;
