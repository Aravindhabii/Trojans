import { createGlobalStyle } from 'styled-components';
import Assassin from './assets/fonts/Assassin.ttf';
import ShareTechMono from './assets/fonts/Share_Tech_Mono/ShareTechMono-Regular.ttf';
import EdhanMartine from './assets/fonts/edhan-martine-font/EdhanMartine-0WrVv.ttf';
import MontserratMedium from './assets/fonts/Montserrat/Montserrat-Medium.ttf';
import StrongBrain from './assets/fonts/strong_brain.otf';

export const GlobalStyles = createGlobalStyle`
	*{
		padding: 0;
		margin: 0;
		box-sizing:border-box;
		scroll-behavior: smooth;
		cursor: none;
		user-select: none;
	}

	body {
		overflow: overlay;
	}

	::-webkit-scrollbar-thumb {
		background: red; 
		border-radius: 10px;
	}

	h1,h2,h3,h4,h5,h6{
		font-family: 'EdhanMartine', sans-serif;
	}

	h1 {
		font-size: 2.5rem;
		
      @media (max-width:950px) {
			font-size: 1.2rem !important;
		}

		@media (max-width:700px) {
			font-size: 1.3rem !important;
		}
	}

	p{
		font-size: 1rem;
		font-family: 'MontserratMedium' ,cursive;

		@media (max-width:950px) {
			font-size: 1rem !important;
		}

		@media (max-width:700px) {
			font-size: .9rem !important;
			
		}
	}

	@font-face {
		font-family: 'trojans';
		src: url(${Assassin});
	}

	@font-face {
		font-family: 'ShareTechMono';
		src: url(${ShareTechMono});
	}

	@font-face {
		font-family: 'EdhanMartine';
		src: url(${EdhanMartine});
	}

	@font-face {
		font-family: 'MontserratMedium';
		src: url(${MontserratMedium});

	}

	@font-face {
		font-family: 'StrongBrain';
		src: url(${StrongBrain}) format('opentype');
	}

	body{
		overflow-x: hidden;
	}
`;
