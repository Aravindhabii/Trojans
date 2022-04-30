import React from 'react';
import { Helmet } from 'react-helmet';

import Navbar from '../../components/Navbar/Navbar.component';
import FirstSection from '../../components/Guidelines/FirstSection';
import Footer from '../../components/Footer/Footer';

const GuidelinesPage = () => {
	return (
		<>
        <Helmet>
            <title>GUIDELINES | TROJANS</title>
        </Helmet>
			<Navbar active={{ route: 'guidelines', scroll: 3 }} />
			<FirstSection />
			{/* <Footer /> */}
		</>
	);
};

export default GuidelinesPage;
