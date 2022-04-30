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

	img {
		width: 35rem;
		margin: 0 0.5rem;
		transition: all 0.3s ease-in-out;

		@media (max-width: 700px) {
			width: 80%;
		}

		@media (max-width: 400px) {
			width: 100%;
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
