import React, { useState, useRef, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './global.style.js';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import ThemeContext from './Theme.context.jsx';
import 'react-toastify/dist/ReactToastify.css';

import Sponser from './pages/Sponser/Sponser.page';
import Cursor from './components/Cursor/Cursor.component.jsx';
import HomePage from './pages/Home/Home.page.jsx';
import EventsPage from './pages/Events/Events.page';
import GuidelinesPage from './pages/Guidelines/Guidelines.page';
import RegistrationPage from './pages/Registration/Registration.page';
import Pay from './pages/Pay.jsx';
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
				<ToastContainer
					position='top-right'
					autoClose={5000}
					hideProgressBar
					newestOnTop
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme='dark'
				/>
				<Cursor cursorRef={cursorRef} />
				<GlobalStyles />
				{/* {showCountdown ? (
					<Countdown setShowCountdown={setShowCountdown} />
				) : ( */}
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route exact path='/events' element={<EventsPage page=''/>} />
						<Route exact path='/workshop' element={<EventsPage page='workshop'/>}/>
						<Route exact path='/nontechnical' element={<EventsPage page='nontechnicalevents'/>}/>
						<Route exact path='/technical' element={<EventsPage page='technicalevents'/>}/>
						<Route exact path='/gamming' element={<EventsPage page='gamming'/>}/>
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
