import React from 'react';

import Navbar from '../../components/Navbar/Navbar.component';
import Preloader from '../../components/PreLoader/Preloader.component';
import HeroHome from '../../components/Home/Hero/HeroHome.component';
import AboutPage from '../About/About.page';
import EventsHome from '../../components/Home/Events/EventsHome.component';

const HomePage = () => (
	<>
		<Preloader />
		<Navbar active={{ route: 'home', scroll: 0 }} />
		<HeroHome />
		<AboutPage/>
		<EventsHome />

	</>
);

export default HomePage;
