import React from 'react';
import Navbar from '../../components/Navbar/Navbar.component';
import RegistrationForm from '../../components/Registration/RegistrationForm.component';
import Footer from '../../components/Footer/Footer';

import { RegistrationContainer } from './Registration.style';

const Registration = () => {
	console.log(process.env.BASE_URL);
	return (
		<RegistrationContainer>
			<Navbar active={{ route: 'registration', scroll: 0 }} />
			<RegistrationForm />
		</RegistrationContainer>
	);
};

export default Registration;
