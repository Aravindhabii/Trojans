import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

import { NavbarContainer, NavbarLogo, MenuButton } from './Navbar.styles';
import FullScreenNavbar from './FullScreenNavbar.component';

const Navbar = ({ active }) => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const navRef = useRef();

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 500) {
				gsap.to(navRef.current, {
					duration: 0.5,
					backgroundColor: 'rgba(0,0,0,0.8)'
				});
			} else {
				gsap.to(navRef.current, {
					duration: 0.5,
					backgroundColor: 'rgba(0,0,0,0)'
				});
			}
		});
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
					{/* <h1>Trojans</h1> */}
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
