import styled, { keyframes } from 'styled-components';

export const HeroSection = styled.section`
	background-color: black;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	scroll-snap-align: start;
`;

const exploreSVG = keyframes`

	0% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(10px);
	}
	100% {
		transform: translateY(0);
	}
`;

export const HeroContent = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	position: relative;
	z-index: 2;
	letter-spacing: 3px;

	h1 {
		color: #fff;
		font-size: 7rem;
		font-weight: bold;
		margin-bottom: 1rem;
		font-family: 'trojans';
		display: flex;
		align-items: center;
		justify-content: center;
		text-shadow: 0 0 5px rgba(255, 255, 255, 0.3),
			0 0 10px rgba(255, 255, 255, 0.3), 0 0 25px rgba(255, 255, 255, 0.3);

		@media (max-width: 1050px) {
			font-size: 6.5rem;
		}

		@media (max-width: 650px) {
			font-size: 6rem;
		}

		@media (max-width: 550px) {
			font-size: 4rem;
		}

		@media (max-width: 400px) {
			font-size: 3rem;
		}
	}

	h1 img {
		width: 10rem;
		margin: 0 0.5rem;
		transition: all 0.3s ease-in-out;

		@media (max-width: 1050px) {
			width: 9rem;
		}

		@media (max-width: 1050px) {
			width: 8.5rem;
		}

		@media (max-width: 650px) {
			width: 7.5rem;
		}

		@media (max-width: 550px) {
			width: 6rem;
		}

		@media (max-width: 400px) {
			width: 5rem;
		}
	}

	h3 {
		color: #fff;
		font-size: 1.2rem;
		font-weight: bold;
		margin-bottom: 1rem;
		text-align: center;

		@media (max-width: 650px) {
			font-size: 1rem;
		}
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

	svg {
		width: 2rem;
		height: 2rem;
		color: white;
		animation: ${exploreSVG} 1s ease-in-out infinite;
	}
`;
