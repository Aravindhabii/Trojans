import styled from 'styled-components';

// import GoldTexture from '../../assets/Trojans_logo/gold_texture.jpg';
import LogoTrojans from '../../assets/Trojans_logo/trojans-compressed.webp';

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 1rem;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 100;
	height: 6rem;
	color: white;
	padding: 0 5rem;
	width: 100%;

	@media (max-width: 800px) {
		padding: 0 5rem;
	}

	@media (max-width: 700px) {
		padding: 0 4rem;
	}

	@media (max-width: 550px) {
		padding: 0 2rem;
	}
`;

export const NavbarLogo = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 1rem;
	text-decoration: none;
	background: url(${LogoTrojans}) center/contain no-repeat;
	width: 13rem;
	height: 5rem;

	/* h1 {
		color: transparent;
		background-clip: text;
		-webkit-background-clip: text;
	} */

	@media (max-width: 800px) {
		width: 11rem;
	}

	@media (max-width: 600px) {
		width: 9rem;
	}
`;

export const MenuButton = styled.div`
	width: 3rem;
	height: 1.5rem;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;

	span {
		background-color: white;
		width: 100%;
		height: 2px;
		border-radius: 10px;
	}
`;
