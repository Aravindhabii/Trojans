import React from 'react';

import Trojans from '../../assets/Trojans_logo/trojans_logo.png';
import { FooterContainer } from './Footer.styles';

const FooterlLinksContainer = ({ title, links }) => {
	return (
		<div className='footer-links-container'>
			<h2>{title}</h2>
			<ul>
				{links.map((link) => (
					<li>
						<a href={link.url}>{link.name}</a>
					</li>
				))}
			</ul>
		</div>
	);
};

function Footer() {
	return (
		<FooterContainer>
			<div className='footer-top'>
				<div>
					<img src={Trojans} alt='Trojans' />
				</div>
				<div>
					<FooterlLinksContainer
						title='Events'
						links={[
							{ url: '/events', name: 'Technical' },
							{ url: '/events', name: 'Non - Technical' },
							{ url: '/events', name: 'Workshops' }
						]}
					/>
				</div>
			</div>
			<div className='copyright'>
				<p>COPYRIGHT © TROJANS 2022-2023</p>
			</div>
		</FooterContainer>
	);
}

export default Footer;
