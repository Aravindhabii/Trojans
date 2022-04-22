import React from 'react';

import { NavbarContainer, NavbarLogo, MenuButton } from './Navbar.styles';
import FullScreenNavbar from './FullScreenNavbar.component';

const Navbar = ({ active }) => {
	return (
		<>
			<FullScreenNavbar active={active} />
			<NavbarContainer>
				<NavbarLogo>
					<h1>Trojans</h1>
				</NavbarLogo>
				<MenuButton>
					<span></span>
					<span></span>
					<span></span>
				</MenuButton>
			</NavbarContainer>
		</>
	);
};

export default Navbar;
