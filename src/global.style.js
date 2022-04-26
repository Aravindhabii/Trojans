import { createGlobalStyle } from 'styled-components';
import Assassin from './assets/fonts/Assassin.ttf';

export const GlobalStyles = createGlobalStyle`
	*{
		padding: 0;
		margin: 0;
		box-sizing:border-box;
		scroll-behavior: smooth;
<<<<<<< HEAD
		cursor: none;
=======
>>>>>>> 16deef9b14b55b86b459bc42fb5051ddd19718b6
	}

	@font-face {
		font-family: 'trojans';
		src: url(${Assassin});
	}

	body{
		overflow-x: hidden;
	}
`;
