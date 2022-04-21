import { createGlobalStyle } from 'styled-components';
import Assassin from './assets/fonts/Assassin.ttf';

export const GlobalStyles = createGlobalStyle`
	*{
		padding: 0;
		margin: 0;
		box-sizing:border-box;
	}

	@font-face {
		font-family: 'trojans';
		src: url(${Assassin});
	}
`;
