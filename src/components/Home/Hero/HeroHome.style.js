import styled, { keyframes } from 'styled-components';

export const HeroSection = styled.section`
	background-color: black;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	scroll-snap-align: start;

	.hero-bg-container {
		height: 100vh;
		background: #000;
		z-index: 1;
		position: absolute;
		width: 100%;

		.hero-hex {
			background: url(${({ heroHex }) => heroHex}) repeat;
			background-size: 30%;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-size: 350px;
			z-index: 1;
			display: flex;
			justify-content: center;
			align-items: center;

			&::after {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background: linear-gradient(
					to bottom,
					rgba(0, 0, 0, 0) 70%,
					rgba(0, 0, 0, 1) 100%
				);
				z-index: -1;
			}

			&::before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background: rgba(0, 0, 0, 0.3);
				z-index: -1;
			}
		}
		.hero-bg {
			position: absolute;
			height: 300px;
			width: 300px;
			background: linear-gradient(90deg, #9500ff 0%, #ff41df 100%);
			filter: blur(20px);
			z-index: 0;
		}
	}
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

	svg {
		width: 2rem;
		height: 2rem;
		color: white;
		animation: ${exploreSVG} 1s ease-in-out infinite;
	}
`;
