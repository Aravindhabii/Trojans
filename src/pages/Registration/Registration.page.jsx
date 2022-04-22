import React from 'react';
import Form from '../../components/Registration/Form';
import Navbar from '../../components/Navbar/Navbar.component';
// import Boxes from "../../components/Registration/Boxes";
// import {Container} from "../../styles/container.style";
import './Registration.css';

function Registration() {
	return (
		<>
			<Navbar active={{ route: 'register', scroll: 4 }} />
			<section className='section-registration'>
				{/* <div className="box-main-div">
                <Boxes />
            </div> */}
				<Form />
			</section>
		</>
	);
}

// name
// phone
// email
// clg
// dapartment
// qr code / gpay no
// technical events
// non technical events
// workshop

export default Registration;
