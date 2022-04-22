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
