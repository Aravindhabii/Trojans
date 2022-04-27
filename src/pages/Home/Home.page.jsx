import React from 'react';

import Navbar from '../../components/Navbar/Navbar.component';
import Preloader from '../../components/PreLoader/Preloader.component';
import HeroHome from '../../components/Home/Hero/HeroHome.component';
import EventsHome from '../../components/Home/Events/EventsHome.component';
import Contact from '../../components/Home/Contact/Contact';

const HomePage = () => (
	<>
		<Preloader />
		<Navbar active={{ route: 'home', scroll: 0 }} />
		<HeroHome />
		<EventsHome />
		<Contact />
	</>
);

export default HomePage;
