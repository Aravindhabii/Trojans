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

	h1 {
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
`;
