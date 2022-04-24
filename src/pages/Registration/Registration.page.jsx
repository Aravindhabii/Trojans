import React from 'react';
import Form from '../../components/Registration/Form';
import Navbar from '../../components/Navbar/Navbar.component';
// import Boxes from "../../components/Registration/Boxes";
// import {Container} from "../../styles/container.style";
import Shadow from '../../components/Registration/Shadow';
import Video from '../../assets/Video.mp4';
import './Registration.css';

function Registration() {
	return (
		<>
			<Navbar active={{ route: 'registration', scroll: 4 }} />
			<section className='section-registration'>
				{/* <Shadow /> */}
				<Form />
			</section>
		</>
	);
}

export default Registration;
