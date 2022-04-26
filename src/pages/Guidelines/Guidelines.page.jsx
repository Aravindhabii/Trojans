import React from 'react';

import Navbar from '../../components/Navbar/Navbar.component';
import FirstSection from '../../components/Guidelines/FirstSection';

const GuidelinesPage = () => {
	return (
		<>
			<Navbar active={{ route: 'guidelines', scroll: 3 }} />
			<FirstSection />
		</>
	);
};

export default GuidelinesPage;
