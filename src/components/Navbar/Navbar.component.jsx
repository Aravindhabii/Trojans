import React, { useState } from 'react';

import { NavbarContainer, NavbarLogo, MenuButton } from './Navbar.styles';
import FullScreenNavbar from './FullScreenNavbar.component';

const Navbar = ({ active }) => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<>
			<FullScreenNavbar
				active={active}
				isNavOpen={isNavOpen}
				setIsNavOpen={setIsNavOpen}
			/>
			<NavbarContainer>
				<NavbarLogo href='/'>
					<h1>Trojans</h1>
				</NavbarLogo>
				<MenuButton onClick={() => setIsNavOpen(true)}>
					<span></span>
					<span></span>
					<span></span>
				</MenuButton>
			</NavbarContainer>
		</>
	);
};

export default Navbar;
