import React from "react";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import AllServices from "./AllServices";

function App(){
    return (
        <Router>
            {/* <Navbar /> */}
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/services" element={<AllServices />} />
            </Routes>
        </Router>)
        
}

export default App;