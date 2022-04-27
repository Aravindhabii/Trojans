import { createGlobalStyle } from 'styled-components';
import Assassin from './assets/fonts/Assassin.ttf';
import ShareTechMono from './assets/fonts/Share_Tech_Mono/ShareTechMono-Regular.ttf';
import EdhanMartine from './assets/fonts/edhan-martine-font/EdhanMartine-0WrVv.ttf';

export const GlobalStyles = createGlobalStyle`
	*{
		padding: 0;
		margin: 0;
		box-sizing:border-box;
		scroll-behavior: smooth;
		cursor: none;
		overflow-x: hidden;
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

	body{
		overflow-x: hidden;
	}
`;
