import styled from 'styled-components';

export const FullScreenNavbarStyle = styled.div`
	position: absolute;
	width: 100%;
	height: 100vh;
	background-color: black;
	z-index: 100;
	display: flex;
	color: white;
	padding-left: 3rem;
	justify-content: space-between;
	overflow: hidden;
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
		color: ${({ activeRoute }) => (activeRoute ? 'orange' : 'inherit')};
		transition: all 0.2s ease-in;
	}
	a:hover {
		color: orange;
	}
`;

export const MenuButton = styled.div`
	width: 3rem;
	height: 1.5rem;
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

	&::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.5);
	}
`;
