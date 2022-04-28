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
	activeScroll,
	color
}) => (
	<Navlink
		activeRoute={activeRoute}
		onMouseEnter={() => setScrollDiv(scroll)}
		onMouseLeave={() => setScrollDiv(activeScroll)}
		body={body}
		color={color}
	>
		<a href={url}>{body}&nbsp;</a>
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
					body='&nbsp;Home'
					setScrollDiv={setScrollDiv}
					scroll={0}
					activeScroll={active.scroll}
					color='red'
				/>
				<NavLinkComponent
					activeRoute={active.route === 'events' ? true : false}
					url='/events'
					body='&nbsp;Events'
					setScrollDiv={setScrollDiv}
					scroll={1}
					activeScroll={active.scroll}
					color='blue'
				/>
				<NavLinkComponent
					activeRoute={active.route === 'guidelines' ? true : false}
					url='/guidelines'
					body='&nbsp;Guidelines'
					setScrollDiv={setScrollDiv}
					scroll={2}
					activeScroll={active.scroll}
					color='green'
				/>
				<NavLinkComponent
					activeRoute={active.route === 'registration' ? true : false}
					url='/registration'
					body='&nbsp;Register'
					setScrollDiv={setScrollDiv}
					scroll={3}
					activeScroll={active.scroll}
					color='yellow'
				/>
			</NavLinksContainer>
			<NavRight>
				<div>
					{images.map((image, index) => (
						<NavRightImages src={image} scroll={scrollDiv} left key={index} />
					))}
				</div>
				<div>
					{images.map((image, index) => (
						<NavRightImages src={image} scroll={scrollDiv} key={index} />
					))}
				</div>
			</NavRight>
		</FullScreenNavbarStyle>
	);
};

export default FullScreenNavbar;