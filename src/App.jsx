import React, { useState } from "react";
import {
    Route,
    Routes,
    useLocation
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./Home";
import About from "./About";
import SignUp from "./SignUp";
import PageNotFound from "./404";
import PageTransition from "./components/PageTransition";
import { gsap } from "gsap";
import './App.css';
// import ErtdfgcvbBGprivacy from "./components/ertdfgcvbprivacy";

function App() {
    const location = useLocation();
    const [showTransition, setShowTransition] = useState(false);

    const handleEnter = (node, done) => {
        setShowTransition(true);
        gsap.fromTo(node, { opacity: 0 }, { opacity: 1, duration: 0.5, onComplete: done });
    };

    const handleExit = (node, done) => {
        setShowTransition(true);
        gsap.fromTo(node, { opacity: 1 }, { opacity: 0, duration: 0.5, onComplete: done });
    };

    return (
        <>
            {showTransition && <PageTransition onComplete={() => setShowTransition(false)} />}
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={500}
                    classNames="fade"
                    onEnter={handleEnter}
                    onExit={handleExit}
                >
                    <Routes location={location}>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/sign-up" element={<SignUp />} />
                        {/* <Route path="/privacy" element={<ErtdfgcvbBGprivacy />} /> */}
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </>
    );
}

export default App;