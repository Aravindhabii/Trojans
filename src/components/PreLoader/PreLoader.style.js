import styled from 'styled-components';

import GoldTexture from '../../assets/Trojans_logo/gold_texture.webp';

export const PreLoaderContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: black;
	z-index: 9999;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	color: white;
	font-family: 'trojans';
	font-size: 8rem;

	img {
		width: 11rem;
	}

	span {
		color: transparent;
		background: url(${GoldTexture});
		background-clip: text;
		-webkit-background-clip: text;
	}

	@media (max-width: 700px) {
		img {
			width: 8rem;
		}

		span {
			font-size: 6rem;
		}
	}

	@media (max-width: 550px) {
		span {
			font-size: 5rem;
		}
		img {
			width: 6rem;
		}
	}

	@media (max-width: 450px) {
		span {
			font-size: 4rem;
		}
		img {
			width: 5rem;
		}
	}

	@media (max-width: 350px) {
		span {
			font-size: 3rem;
		}
		img {
			width: 4rem;
		}
	}
`;
