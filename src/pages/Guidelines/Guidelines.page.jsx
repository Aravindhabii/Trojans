import React from 'react';

import Navbar from '../../components/Navbar/Navbar.component';

const GuidelinesPage = () => {
	return (
		<>
			<Navbar active={{ route: 'guidelines', scroll: 3 }} />
			<div>GuidelinesPage</div>
		</>
	);
};

export default GuidelinesPage;
