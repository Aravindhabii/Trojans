import styled, { keyframes } from 'styled-components';

export const HeroSection = styled.section`
	background-color: black;
	flex-direction: column;
	width: 100%;
	height: 100vh;
`;

export const HeroContent = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	position: relative;
	z-index: 1;

	h1 {
		color: #fff;
		font-size: 7rem;
		font-weight: bold;
		margin-bottom: 1rem;
		font-family: 'trojans';
		display: flex;
		align-items: center;
		justify-content: center;
	}

	h1 img {
		width: 10rem;
		margin: 0 0.5rem;
		transition: all 0.3s ease-in-out;
	}

	p {
		color: #fff;
		font-size: 1.5rem;
		font-weight: bold;
		margin-bottom: 1rem;
	}
	a {
		color: #fff;
		font-size: 1.5rem;
		font-weight: bold;
		margin-bottom: 1rem;
		text-decoration: none;
		&:hover {
			color: #fff;
		}
	}
`;

export const phonesContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: 100vh;
`;
