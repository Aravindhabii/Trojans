import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './global.style.js';

import HomePage from './pages/Home/Home.page.jsx';
import AboutPage from './pages/About/About.page';
import EventsPage from './pages/Events/Events.page';
import GuidelinesPage from './pages/Guidelines/Guidelines.page';
import RegistrationPage from './pages/Registration/Registration.page';

const App = () => (
	<>
		<GlobalStyles />
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route exact path='/about' element={<AboutPage />} />
			<Route exact path='/events' element={<EventsPage />} />
			<Route exact path='/guidelines' element={<GuidelinesPage />} />
			<Route exact path='/registration' element={<RegistrationPage />} />
		</Routes>
	</>
);

export default App;
