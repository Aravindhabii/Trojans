import React, { useState, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './global.style.js';
import gsap from 'gsap';

import Cursor from './components/Cursor/Cursor.component.jsx';
import HomePage from './pages/Home/Home.page.jsx';
import EventsPage from './pages/Events/Events.page';
import GuidelinesPage from './pages/Guidelines/Guidelines.page';
import RegistrationPage from './pages/Registration/Registration.page';
import Countdown from './pages/Countdown/Countdown.page.jsx';

const App = () => {
	const [showCountdown, setShowCountdown] = useState(false);
	const cursorRef = useRef();

	return (
		<div
			onMouseMove={(e) =>
				(document.querySelector(
					'.cursor'
				).style.transform = `translate(${e.clientX}px, ${e.clientY}px)`)
			}
		>
			<Cursor cursorRef={cursorRef} />
			<GlobalStyles />
			{showCountdown ? (
				<Countdown setShowCountdown={setShowCountdown} />
			) : (
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route exact path='/events' element={<EventsPage />} />
					<Route exact path='/guidelines' element={<GuidelinesPage />} />
					<Route exact path='/registration' element={<RegistrationPage />} />
				</Routes>
			)}
		</div>
	);
};
export default App;
