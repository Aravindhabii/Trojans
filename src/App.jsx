import React, {useRef, useContext, lazy, Suspense, useState} from "react";
import {Routes, Route} from "react-router-dom";
import {GlobalStyles} from "./global.style.js";
import {ThemeProvider} from "styled-components";
import {ToastContainer} from "react-toastify";
import ThemeContext from "./Theme.context.jsx";
import "react-toastify/dist/ReactToastify.css";

import Countdown from "./pages/Countdown/Countdown.page";

// import Trojans from "./assets/Trojans_logo/trojans-compressed.png";

const Preloader = lazy(() =>
    import("./components/PreLoader/Preloader.component")
);

const Loading = lazy(() => import("./components/Loading/Loading.jsx"));
const Sponsor = lazy(() => import("./pages/Sponsor/Sponsor.page"));
const Cursor = lazy(() => import("./components/Cursor/Cursor.component.jsx"));
const HomePage = lazy(() => import("./pages/Home/Home.page.jsx"));
const EventsPage = lazy(() => import("./pages/Events/Events.page"));
const GuidelinesPage = lazy(() => import("./pages/Guidelines/Guidelines.page"));
const RegistrationPage = lazy(() =>
    import("./pages/Registration/Registration.page")
);

const App = () => {
    const theme = useContext(ThemeContext);
    const [showCountdown, setShowCountdown] = useState(true);
    const cursorRef = useRef();

    return (
        <Suspense fallback={<Loading />}>
            <ThemeProvider theme={theme}>
                <div
                    onMouseMove={(e) =>
                        (document.querySelector(
                            ".cursor"
                        ).style.transform = `translate(${e.clientX}px, ${e.clientY}px)`)
                    }
                >
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar
                        newestOnTop
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                    />
                    <Cursor cursorRef={cursorRef} />
                    <GlobalStyles />
                    {/* {showCountdown ? (
						<Countdown setShowCountdown={setShowCountdown} />
					) : ( */}
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route
                            exact
                            path="/events"
                            element={<EventsPage page="" />}
                        />
                        <Route
                            exact
                            path="/workshop"
                            element={<EventsPage page="workshops" />}
                        />
                        <Route
                            exact
                            path="/nontechnical"
                            element={<EventsPage page="nontechnicalevents" />}
                        />
                        <Route
                            exact
                            path="/technical"
                            element={<EventsPage page="technicalevents" />}
                        />
                        <Route
                            exact
                            path="/gaming"
                            element={<EventsPage page="gaming" />}
                        />
                        <Route
                            exact
                            path="/guidelines"
                            element={<GuidelinesPage />}
                        />
                        <Route
                            exact
                            path="/registration"
                            element={<RegistrationPage />}
                        />
                        <Route exact path="/sponsor" element={<Sponsor />} />
                    </Routes>
                    {/* )} */}
                </div>
            </ThemeProvider>
        </Suspense>
    );
};
export default App;
