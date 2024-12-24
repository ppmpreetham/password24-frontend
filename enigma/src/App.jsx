import React from "react";
import {
    Route,
    Routes,
    BrowserRouter as Router,
} from "react-router-dom";
import Home from "./Home";
import PageNotFound from "./404";
import BackgroundEffect from './components/background-hover';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route
                    path="*"
                    element={<PageNotFound />}
                />
            </Routes>
            {/* <BackgroundEffect /> */}
        </Router>

    );
}

export default App;