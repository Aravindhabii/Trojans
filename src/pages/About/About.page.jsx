import React from 'react';

import Navbar from '../../components/Navbar/Navbar.component';
import { HeroSection } from './About.styles';
const AboutPage = () => {
	return (
		<>
			<Navbar />
			<HeroSection>
				<div>
					<h1>We Introduce Ourselves.</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsam, quos aspernatur qui corporis
            odit. Aut voluptas rerum minima veniam natus molestiae. Omnis sit maxime exercitationem hic consequatur
            corrupti ratione. Quaerat repellat corporis ab enim dolorum veniam consectetur suscipit totam nisi quo
            doloribus perspiciatis officiis non, molestias libero quisquam reiciendis harum? Aut, minus voluptates? Sit
            optio ex officia consequatur non saepe error excepturi, quas autem, exercitationem atque. Voluptatum quidem
            iusto molestias, consequuntur fugiat possimus minima quasi aliquam! Necessitatibus obcaecati doloribus
            dolores vel ut autem numquam. Autem, earum delectus mollitia natus blanditiis laborum in cumque sequi dolore
            ut neque, et minus.</p>
				</div>
			</HeroSection>
			
		</>
	);
};

export default AboutPage;
