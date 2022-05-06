import styled from 'styled-components';

export const CountdownContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	background-color: black;
	color: #fff;
	padding: 0 3rem;

	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.countdown-container {
		display: flex;
		flex-direction: row;
	}

	img {
		width: 35rem;
		margin: 0 0.5rem;
	}

	h2 {
		text-align: center;
	}

	@media (max-width: 768px) {
		h2 {
			font-size: 1.5rem;
		}

		img {
			width: 30rem;
		}
	}

	@media (max-width: 600px) {
		h2 {
			font-size: 1.2rem;
		}

		img {
			width: 25rem;
		}
	}

	@media (max-width: 460px) {
		h2 {
			font-size: 1.1rem;
		}

		img {
			width: 22rem;
		}
	}

	@media (max-width: 400px) {
		h2 {
			font-size: 1rem;
		}

		img {
			width: 18rem;
		}
	}
`;

export const CountdownCircleStyle = styled.div`
	width: 8rem;
	height: 8rem;
	position: relative;
	font-size: 1rem;

	div {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	svg {
		width: 100%;
		height: 100%;
		position: relative;
		transform: rotate(270deg);
	}

	circle {
		width: 100%;
		height: 100%;
		fill: transparent;
		stroke-width: 4;
	}

	circle:nth-child(2) {
		stroke: ${({ color }) => color};
		stroke-dasharray: 320;
		transition: all 1s linear;
	}

	.dots {
		position: absolute;
		width: 100%;
		height: 100%;
		transition: all 1s linear;
		z-index: 100;
	}

	.dots::after {
		content: '';
		position: absolute;
		width: 15px;
		height: 15px;
		top: 0;
		background-color: ${({ color }) => color};
		border-radius: 50%;
		z-index: 100;
		transform: translateY(40%);
		box-shadow: 0 0 20px ${({ color }) => color},
			0 0 60px ${({ color }) => color};
	}

	@media (max-width: 600px) {
		width: 5rem;

		svg {
			display: none;
		}

		.dots {
			display: none;
		}
	}

	@media (max-width: 350px) {
		width: 3rem;
		margin: 0 0.5rem;
	}
`;
