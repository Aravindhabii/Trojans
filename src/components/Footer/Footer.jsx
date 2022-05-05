import React from 'react';

import Trojans from '../../assets/Trojans_logo/trojans_logo.png';
import { FooterContainer } from './Footer.styles';

const FooterlLinksContainer = ({ title, links }) => {
	return (
		<div className='footer-links-container'>
			<h2>{title}</h2>
			<ul>
				{links.map((link, index) => (
					<li key={index}>
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
				<div className='footer-logo-container'>
					<div>
						<img src={Trojans} alt='Trojans' />
					</div>
					<div>
						<img src={Trojans} alt='Trojans' />
					</div>
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
					<FooterlLinksContainer
						title='About'
						links={[
							{ url: '/', name: 'Trojans' },
							{ url: '/', name: 'Deparmant' },
							{ url: '/', name: 'College' }
						]}
					/>
					<FooterlLinksContainer
						title='Connect'
						links={[
							{
								url: 'https://www.instagram.com/trojans_cit/',
								name: 'Instagram'
							},
							{ url: '/#contact', name: 'Contact' }
						]}
					/>
				</div>
			</div>
			<div className='copyright'>
				<p>COPYRIGHT © TROJANS</p>
			</div>
		</FooterContainer>
	);
}

export default Footer;
