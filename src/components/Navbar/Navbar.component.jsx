import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

import { NavbarContainer, NavbarLogo, MenuButton } from './Navbar.styles';
import FullScreenNavbar from './FullScreenNavbar.component';

const Navbar = ({ active }) => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const navRef = useRef();

	useEffect(() => {
		if (window.screenY > 500) {
			gsap.to(useRef.current, {
				duration: 0.5,
				backgroundColor: 'black'
			});
		}
	}, []);

	return (
		<>
			<FullScreenNavbar
				active={active}
				isNavOpen={isNavOpen}
				setIsNavOpen={setIsNavOpen}
			/>
			<NavbarContainer ref={navRef}>
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
