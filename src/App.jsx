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
	const [showCountdown, setShowCountdown] = useState(true);
	const cursorRef = useRef();

	return (
		<div
			onMouseMove={(e) => {
				gsap.to(cursorRef.current, {
					x: e.clientX,
					y: e.clientY,
					duration: 0.3,
					ease: 'ease'
				});
			}}
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
