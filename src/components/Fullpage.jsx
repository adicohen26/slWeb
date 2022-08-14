import React from "react";
import fullpage from "fullpage.js";

function Fullpage(){
    console.log("hello");
    new fullpage('#fullpage', {
        //options here
        autoScrolling:true,
        // scrollHorizontally: true
    });
    return <div id="fullpage">
                <div class="section s1"> 
                    <h1> section1 </h1>
                </div>
                <div class="section">
                    <div class="slide" data-anchor="slide1"> <h1> section1 </h1></div>
                    <div class="slide" data-anchor="slide2"> <h1> section1 </h1></div>
                </div>
                <div class="section"> <h1> section1 </h1></div>
                <div class="section"> <h1> section1 </h1></div>
            </div>
    
}

export default Fullpage;