import styled, { keyframes } from 'styled-components';

export const PhonesContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	height: 100vh;
	position: relative;
	background-color: black;
	z-index: 5;
	background-size: 350px;
	position: relative;
	overflow: hidden;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0) 80%,
			rgba(0, 0, 0, 1) 100%
		);
		z-index: 2;
	}

	main {
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 2;
	}

	.phone-container-popup {
		width: 16rem;
		aspect-ratio: 9/16;
		border-radius: 10px;
		position: absolute;
		z-index: 5;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgba(0, 0, 0, 0.4);
		transition: all 0.2s ease-in-out;

		@media (max-width: 800px) {
			width: 100%;
			height: 100%;
		}

		img {
			width: 80%;
			object-fit: contain;
			border-radius: 10px;
			object-position: center center;
		}

		div {
			width: 2rem;
			height: 2rem;
		}
	}

	.phone-container {
		width: 18rem;
		aspect-ratio: 9/16;
		z-index: 2;
		background: #100c0c url(${({ phone1 }) => phone1}) no-repeat center;
		background-size: 100% 100%;
		position: relative;
		border-radius: 50px;
		left: calc(${({ phonesPosition }) => phonesPosition.phone1}% - 9rem);
		transition: all 0.3s ease-in-out;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 2rem;
		box-shadow: 0 0 5px #03e9f4, 0 0 15px #03e9f4, 0 0 5px #03e9f4;
		transform-style: preserve-3d;
		transform: perspective(2000px);

		@media (max-width: 1150px) {
			left: calc(${({ phonesPosition }) => phonesPosition.phone1 + 5}% - 8.5rem);
			width: 17rem;
		}

		@media (max-width: 800px) {
			transform: translateX(-50%) !important;
			left: 50%;
			width: 19rem;
		}

		@media (max-width: 500px) {
			background: rgba(0, 0, 0, 0.3);
			box-shadow: none;
			width: 100%;
			height: 100%;
		}
	}

	.tablet-container {
		position: absolute;
		width: 45rem;
		height: 30rem;
		border-radius: 30px;
		background: #100c0c url(${({ tablet1 }) => tablet1}) no-repeat center;
		box-shadow: 0 0 5px #03e9f4, 0 0 15px #03e9f4, 0 0 5px #03e9f4;
		transform-style: preserve-3d;
		transform: perspective(2000px);
		right: ${({ phonesPosition }) => phonesPosition.tablet1}%;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.3s ease-in-out;
		z-index: 2;

		@media (max-width: 1400px) {
			right: ${({ phonesPosition }) => phonesPosition.tablet1 - 4}%;
		}

		@media (max-width: 1250px) {
			width: 40rem;
			height: 27rem;
		}

		@media (max-width: 1150px) {
			width: 24rem;
			height: 32rem;
			right: ${({ phonesPosition }) => phonesPosition.tablet1}%;
		}

		@media (max-width: 900px) {
			right: ${({ phonesPosition }) => phonesPosition.tablet1 - 2}%;
		}

		@media (max-width: 800px) {
			display: none;
		}

		div {
			width: 93%;
			height: 92%;
			border-radius: 10px;
			background-color: blue;
			background: url(${({ url }) => url}) no-repeat center/cover;
			transform: translateZ(50px);
		}
	}
`;

const animation1 = keyframes`
0% {
    left: -100%;
}
50%, 100% {
    left: 100%;
}
`;

const animation2 = keyframes`
0% {
    top: -100%;
}
50%, 100% {
    top: 100%;
}
`;

const animation3 = keyframes`
0% {
    right: -100%;
}
50%, 100% {
    right: 100%;
}
`;

const animation4 = keyframes`
0% {
    bottom: -100%;
}
50%, 100% {
    bottom: 100%;
}
`;

export const PhoneButtonStyles = styled.h2`
	width: 100%;
	padding: 1rem 0;
	margin: 1rem;
	text-align: center;
	transition: all 0.3s ease-in-out;
	color: ${({ bgColor }) => bgColor};
	position: relative;
	overflow: hidden;
	transform: translateZ(30px);
	&:hover {
		background-color: ${({ bgColor }) => bgColor};
		color: black;
		box-shadow: 0 0 5px ${({ bgColor }) => bgColor},
			0 0 15px ${({ bgColor }) => bgColor}, 0 0 18px ${({ bgColor }) => bgColor};
	}

	span {
		display: block;
		position: absolute;
		background: linear-gradient(
			90deg,
			transparent,
			${({ bgColor }) => bgColor}
		);
	}

	span:nth-child(1) {
		top: 0;
		left: -100%;
		width: 100%;
		height: 2px;
		animation: ${animation1} 1s linear infinite;
	}

	span:nth-child(2) {
		right: 0;
		top: -100%;
		height: 100%;
		width: 3px;
		animation: ${animation2} 1s linear infinite 0.25s;
	}

	span:nth-child(3) {
		bottom: 0;
		right: -100%;
		width: 100%;
		height: 2px;
		animation: ${animation3} 1s linear infinite 0.5s;
	}

	span:nth-child(4) {
		left: 0;
		bottom: -100%;
		height: 100%;
		width: 2px;
		animation: ${animation4} 1s linear infinite 0.75s;
	}
`;
