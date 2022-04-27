import { createGlobalStyle } from 'styled-components';
import Assassin from './assets/fonts/Assassin.ttf';
import ShareTechMono from './assets/fonts/Share_Tech_Mono/ShareTechMono-Regular.ttf';

export const GlobalStyles = createGlobalStyle`
	*{
		padding: 0;
		margin: 0;
		box-sizing:border-box;
		scroll-behavior: smooth;
		cursor: none;
	}

	@font-face {
		font-family: 'trojans';
		src: url(${Assassin});
	}

	@font-face {
		font-family: 'ShareTechMono';
		src: url(${ShareTechMono});
	}

	body{
		overflow-x: hidden;
	}
`;
