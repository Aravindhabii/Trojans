import styled from 'styled-components';

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 1rem;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 10;
	height: 4rem;
	color: white;
`;

export const NavbarLogo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 1rem;
	@media (max-width: 768px) {
		width: 3rem;
		height: 3rem;
	}
`;

export const NavLinksContainer = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	list-style: none;
	margin: 0;
	padding: 0;
	@media (max-width: 768px) {
		display: none;
	}
`;

export const Navlink = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 1rem;
	a {
		text-decoration: none;
		font-size: 1.2rem;
		font-weight: bold;
		color: inherit;
	}
`;
