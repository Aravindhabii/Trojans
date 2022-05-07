import React from 'react';
import { Helmet } from 'react-helmet';

import Navbar from '../../components/Navbar/Navbar.component';
import FirstSection from '../../components/Guidelines/FirstSection';
import SecondSection from '../../components/Guidelines/SecondSection';
import Footer from '../../components/Footer/Footer';

const GuidelinesPage = () => {
	return (
		<>
        <Helmet>
            <title>TROJANS | GUIDELINES</title>
        </Helmet>
			<Navbar active={{ route: 'guidelines', scroll: 3 }} />
			<FirstSection />
			<SecondSection />
			<Footer />
		</>
	);
};

export default GuidelinesPage;
