import React from "react";
import FaceVideo from "./FaceVideo.jsx";
import Navbar from "./Navbar.jsx";
import ScreenSize from "./ScreenSize.jsx";
import About from "./About.jsx";
// import Fullpage from "./Fullpage.jsx";

function App(){
     
    return (<div>
        <Navbar />
        <FaceVideo />
        <About />
        {/* <Fullpage />   */}
        {/* <div id="fullpage">
                <div class="section">Section 1</div>
                <div class="section">
                    <div class="slide" data-anchor="slide1">Slide 2.1</div>
                    <div class="slide" data-anchor="slide2">Slide 2.2</div>
                </div>
                <div class="section">Section 3</div>
                <div class="section">Section 4</div>
            </div> */}
        {/* <Fullpage /> */}
        {/* <Fullpage section1={FaceVideo} section2={About} /> */}
    </div>)
}

export default App;