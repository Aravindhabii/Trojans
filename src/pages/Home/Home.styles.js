import styled, { keyframes } from 'styled-components';

export const HeroSection = styled.section`
	background-color: black;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const heroKeyframes = keyframes`
	 from {
        text-shadow:
          0 0 43px rgba(0, 123, 255, .7),
          0 0 73px rgba(0, 123, 255, .7),
          0 0 133px rgba(0, 123, 255, .7);
      }
      to {
        text-shadow:
          0 0 38px rgba(0, 123, 255, .7),
          0 0 53px rgba(0, 123, 255, .7),
          0 0 93px rgba(0, 123, 255, .7);
      }
`;

export const HeroBackgroundRectangle = styled.div`
	/* width: ${({ height }) => height}vw;
	height: ${({ height }) => height}vh; */
	border: 3px solid ${({ color }) => color};
	position: absolute;
	/* top: 50%;
	left: 50%;
	transform: translate(-50%, -50%) rotate(${({ rotate }) => rotate}deg); */
	-webkit-box-shadow: 0px 0px 30px 0px ${({ color }) => color},
		0px 0px 30px 0px inset ${({ color }) => color};
	-moz-box-shadow: 0px 0px 30px 0px ${({ color }) => color},
		0px 0px 30px 0px inset ${({ color }) => color};
	box-shadow: 0px 0px 30px 0px ${({ color }) => color},
		0px 0px 30px 0px inset ${({ color }) => color};
	animation: ${heroKeyframes} 10s linear infinite
		${({ delay }) => -delay * 0.8}s;
`;

export const HeroBackgroundRectangleContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	transform-style: preserve-3d;
	transform: perspective(500px);
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
		animation: ${heroKeyframes} 3.5s alternate-reverse infinite;
	}

	h1 img {
		width: 10rem;
		margin: 0 0.5rem;
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
