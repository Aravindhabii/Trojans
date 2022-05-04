import { createContext } from 'react';

const initialState = {
	isDark: false,
	setIsDark: () => {}
};
const ThemeContext = createContext(initialState);

export default ThemeContext;
