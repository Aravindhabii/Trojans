import { createGlobalStyle } from 'styled-components';
import Assassin from './assets/fonts/Assassin.ttf';

export const GlobalStyles = createGlobalStyle`
	*{
		padding: 0;
		margin: 0;
		box-sizing:border-box;
		scroll-behavior: smooth;
	}

	@font-face {
		font-family: 'trojans';
		src: url(${Assassin});
	}

	body{
		overflow-x: hidden;
	}
`;
