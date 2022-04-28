import { createGlobalStyle } from 'styled-components';
import Assassin from './assets/fonts/Assassin.ttf';
import ShareTechMono from './assets/fonts/Share_Tech_Mono/ShareTechMono-Regular.ttf';
import EdhanMartine from './assets/fonts/edhan-martine-font/EdhanMartine-0WrVv.ttf';
import MontserratMedium from './assets/fonts/Montserrat/Montserrat-Medium.ttf';

export const GlobalStyles = createGlobalStyle`
	*{
		padding: 0;
		margin: 0;
		box-sizing:border-box;
		scroll-behavior: smooth;
		cursor: none;
	}

	h1,h2,h3,h4,h5,h6{
		font-family: 'EdhanMartine', sans-serif;
	}

	p{
		font-family: 'MontserratMedium' ,cursive;
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

	body{
		overflow-x: hidden;
	}
`;
