import React from "react";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import AllServices from "./AllServices";
import Service from "./Service";

function App(){
    return (
        <Router>
            {/* <Navbar /> */}
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/services" element={<AllServices />} />
                <Route path="/services/:service" element={<Service />} />
                
            </Routes>
        </Router>)
        
}

export default App;