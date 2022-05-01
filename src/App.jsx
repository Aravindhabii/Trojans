import React, { useState, useRef, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './global.style.js';
import { ThemeProvider } from 'styled-components';
import ThemeContext from './Theme.context.jsx';

import Sponser from './pages/Sponser/Sponser.jsx';
import Cursor from './components/Cursor/Cursor.component.jsx';
import HomePage from './pages/Home/Home.page.jsx';
import EventsPage from './pages/Events/Events.page';
import GuidelinesPage from './pages/Guidelines/Guidelines.page';
import RegistrationPage from './pages/Registration/Registration';
// import Countdown from './pages/Countdown/Countdown.page.jsx';

const App = () => {
	const theme = useContext(ThemeContext);
	// const [showCountdown, setShowCountdown] = useState(true);
	const cursorRef = useRef();

	return (
		<ThemeProvider theme={theme}>
			<div
				onMouseMove={(e) =>
					(document.querySelector(
						'.cursor'
					).style.transform = `translate(${e.clientX}px, ${e.clientY}px)`)
				}
			>
				<Cursor cursorRef={cursorRef} />
				<GlobalStyles />
				{/* {showCountdown ? (
					<Countdown setShowCountdown={setShowCountdown} />
				) : ( */}
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route exact path='/events' element={<EventsPage />} />
						<Route exact path='/guidelines' element={<GuidelinesPage />} />
						<Route exact path='/registration' element={<RegistrationPage />} />
						<Route exact path='/sponser' element={<Sponser />} />
					</Routes>
				{/* )} */}
			</div>
		</ThemeProvider>
	);
};
export default App;
