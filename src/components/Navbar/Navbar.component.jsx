import React from 'react';

import {
	NavbarContainer,
	NavbarLogo,
	NavLinksContainer,
	Navlink
} from './Navbar.styles';

const NavLinkComponent = ({ body, url }) => (
	<Navlink>
		<a href={url}>{body}</a>
	</Navlink>
);

const Navbar = () => {
	return (
		<NavbarContainer>
			<NavbarLogo>
				<h1>Trojans</h1>
			</NavbarLogo>
			<NavLinksContainer>
				<NavLinkComponent url='/' body='Home' />
				<NavLinkComponent url='/about' body='About' />
				<NavLinkComponent url='/events' body='Events' />
				<NavLinkComponent url='/guidelines' body='Guidelines' />
			</NavLinksContainer>
		</NavbarContainer>
	);
};

export default Navbar;
