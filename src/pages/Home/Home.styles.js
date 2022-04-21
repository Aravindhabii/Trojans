import styled from 'styled-components';

export const HeroSection = styled.section`
	background-color: #1e1e1e;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const HeroVideo = styled.video`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
	position: absolute;
	top: 0;
	left: 0;
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
		font-size: 3rem;
		font-weight: bold;
		margin-bottom: 1rem;
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
