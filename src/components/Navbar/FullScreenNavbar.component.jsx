import React, { useState } from 'react';

import {
	FullScreenNavbarStyle,
	NavLinksContainer,
	Navlink,
	MenuButton,
	NavRight,
	NavRightImages
} from './FullScreenNavbar.style';

const NavLinkComponent = ({
	body,
	url,
	activeRoute,
	setScrollDiv,
	scroll,
	activeScroll
}) => (
	<Navlink
		activeRoute={activeRoute}
		onMouseEnter={() => setScrollDiv(scroll)}
		onMouseLeave={() => setScrollDiv(activeScroll)}
	>
		<a href={url}>{body}</a>
	</Navlink>
);

const FullScreenNavbar = ({ active, isNavOpen, setIsNavOpen }) => {
	const images = [
		'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
		'https://images.pexels.com/photos/11041919/pexels-photo-11041919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		'https://images.pexels.com/photos/5818628/pexels-photo-5818628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		'https://images.pexels.com/photos/8910626/pexels-photo-8910626.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		'https://images.pexels.com/photos/2166694/pexels-photo-2166694.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
	];

	const [scrollDiv, setScrollDiv] = useState(active.scroll);

	return (
		<FullScreenNavbarStyle isNavOpen={isNavOpen}>
			<MenuButton onClick={() => setIsNavOpen(false)}>
				<span></span>
				<span></span>
				<span></span>
			</MenuButton>
			<NavLinksContainer>
				<NavLinkComponent
					activeRoute={active.route === 'home' ? true : false}
					url='/'
					body='Home'
					setScrollDiv={setScrollDiv}
					scroll={0}
					activeScroll={active.scroll}
				/>
				<NavLinkComponent
					activeRoute={active.route === 'about' ? true : false}
					url='/about'
					body='About'
					setScrollDiv={setScrollDiv}
					scroll={1}
					activeScroll={active.scroll}
				/>
				<NavLinkComponent
					activeRoute={active.route === 'events' ? true : false}
					url='/events'
					body='Events'
					setScrollDiv={setScrollDiv}
					scroll={2}
					activeScroll={active.scroll}
				/>
				<NavLinkComponent
					activeRoute={active.route === 'guidelines' ? true : false}
					url='/guidelines'
					body='Guidelines'
					setScrollDiv={setScrollDiv}
					scroll={3}
					activeScroll={active.scroll}
				/>
				<NavLinkComponent
					activeRoute={active.route === 'register' ? true : false}
					url='/registration'
					body='Register'
					setScrollDiv={setScrollDiv}
					scroll={4}
					activeScroll={active.scroll}
				/>
			</NavLinksContainer>
			<NavRight>
				<div>
					{images.map((image) => (
						<NavRightImages src={image} scroll={scrollDiv} left />
					))}
				</div>
				<div>
					{images.map((image, index) => (
						<NavRightImages src={image} scroll={scrollDiv} />
					))}
				</div>
			</NavRight>
		</FullScreenNavbarStyle>
	);
};

export default FullScreenNavbar;
