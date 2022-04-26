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

export const PhonesContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	height: 100vh;
	position: relative;
	background-color: black;

	.phone-container {
		width: 22%;
		aspect-ratio: 9/16;
		z-index: 2;
		background: #100c0c url(${({ phone1 }) => phone1}) no-repeat center;
		background-size: 100% 100%;
		position: relative;
		border-radius: 50px;
		left: ${({ phonesPosition }) => phonesPosition.phone1};
		transition: all 0.3s ease-in-out;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 2rem;
		box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 20px #03e9f4,
			0 0 50px #03e9f4, 0 0 200px #03e9f4;
		transform-style: preserve-3d;
		transform: perspective(2000px);
	}

	.tablet-container {
		position: relative;
		width: 42%;
		height: 64%;
		border-radius: 30px;
		background: #100c0c url(${({ tablet1 }) => tablet1}) no-repeat center;
		box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 20px #03e9f4,
			0 0 50px #03e9f4, 0 0 200px #03e9f4;
		transform-style: preserve-3d;
		transform: perspective(2000px);
		left: ${({ phonesPosition }) => phonesPosition.tablet1};
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;

		div {
			width: 93%;
			height: 92%;
			border-radius: 5px;
			background-color: blue;
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
	cursor: pointer;
	transform: translateZ(30px);

	&:hover {
		background-color: ${({ bgColor }) => bgColor};
		color: black;
		box-shadow: 0 0 5px ${({ bgColor }) => bgColor},
			0 0 25px ${({ bgColor }) => bgColor}, 0 0 20px ${({ bgColor }) => bgColor},
			0 0 50px ${({ bgColor }) => bgColor},
			0 0 200px ${({ bgColor }) => bgColor};
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
