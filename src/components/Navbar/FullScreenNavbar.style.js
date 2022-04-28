import styled, { keyframes } from 'styled-components';

export const FullScreenNavbarStyle = styled.div`
	position: fixed;
	width: 100%;
	height: 100vh;
	background-color: black;
	z-index: 1000;
	display: flex;
	color: white;
	padding-left: 5rem;
	justify-content: space-between;
	overflow: hidden;
	transition: all 0.3s ease-in-out;
	opacity: ${({ isNavOpen }) => (isNavOpen ? 1 : 0)};
	z-index: ${({ isNavOpen }) => (isNavOpen ? 100 : -1)};
`;

export const NavLinksContainer = styled.ul`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	list-style: none;
	flex-direction: column;
`;

export const Navlink = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 1rem;
	margin: 0.5rem 0;
	a {
		font-size: 3rem;
		text-decoration: none;
		font-weight: bold;
		color: transparent;
		-webkit-text-stroke: 0.1px
			${({ color, activeRoute }) =>
				activeRoute ? color : 'rgba(255, 255, 255)'};
		transition: all 0.2s ease-in;
		position: relative;
		font-family: 'ShareTechMono';
	}
	a::before {
		content: '${({ body }) => body}';
		position: absolute;
		color: ${({ color }) => color};
		overflow: hidden;
		width: ${({ activeRoute }) => (activeRoute ? '100%' : '0%')};
		height: 100%;
		transition: all 0.2s ease-in;
		border-right: 5px solid ${({ color }) => color};
		filter: drop-shadow(
			${({ color, activeRoute }) =>
				activeRoute ? '0 0 25px' : '0 0 0 ' + color}
		);
	}

	a:hover::before {
		width: 100%;
		-webkit-text-stroke: 1px ${({ color }) => color};
		border-right: 4px solid ${({ color }) => color};
		filter: drop-shadow(0 0 25px ${({ color }) => color});
	}
`;

export const MenuButton = styled.div`
	width: 3rem;
	height: 2.5rem;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	top: 3rem;

	span {
		background-color: white;
		width: 100%;
		height: 2px;
		border-radius: 10px;
		transform-origin: center;
		position: absolute;
	}

	span:nth-of-type(1) {
		transform: rotate(-45deg);
	}

	span:nth-of-type(2) {
		display: none;
	}

	span:nth-of-type(3) {
		transform: rotate(45deg);
	}
`;

export const NavRight = styled.div`
	width: 60%;
	height: 100%;
	position: relative;
	display: flex;

	div {
		transition: all 0.5s ease-in-out;
		position: relative;
		height: 100%;
		width: 50%;
	}

	div:nth-of-type(1) {
		margin-right: 4rem;
	}

	@media (max-width: 900px) {
		display: none;
	}
`;

const navImageAnimation = keyframes`
0%{
	box-shadow: 0 0 5px blue, 0 0 25px blue;
}

100%{
	box-shadow: 0 0 5px blue, 0 0 55px blue;

}
`;

export const NavRightImages = styled.div`
	width: 100% !important;
	height: 70vh !important;
	position: relative;
	background: url(${({ src }) => src}) center/cover;
	margin: 4rem 0;
	border-radius: 10px;
	transform: translateY(
		${({ scroll, left }) =>
			(left ? -100 - scroll * 110 : -340 + scroll * 110) + '%'}
	);
	animation: ${navImageAnimation} 1s ease;
`;