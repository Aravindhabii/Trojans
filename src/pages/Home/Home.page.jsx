import React from 'react';
import gsap from 'gsap';
import { Helmet } from 'react-helmet';

import Navbar from '../../components/Navbar/Navbar.component';
import Preloader from '../../components/PreLoader/Preloader.component';
import HeroHome from '../../components/Home/Hero/HeroHome.component';
import EventsHome from '../../components/Home/Events/EventsHome.component';
import Contact from '../../components/Home/Contact/Contact';
import AboutHome from '../../components/Home/About/About.component';
import Footer from '../../components/Footer/Footer';

const HomePage = () => (
	<div
		onMouseMove={(e) => {
			gsap.to('.bg', {
				duration: 1,
				x: e.clientX - 150,
				y: e.clientY - 150
			});
		}}
	>
		<Helmet>
			<title>TROJANS | HOME</title>
		</Helmet>
		<Preloader />
		<Navbar active={{ route: 'home', scroll: 0 }} />
		<HeroHome />
		<AboutHome />
		<EventsHome />
		<Contact />
		<Footer />
	</div>
);

export default HomePage;
