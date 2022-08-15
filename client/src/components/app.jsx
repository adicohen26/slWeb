import React from "react";
import FaceVideo from "./FaceVideo";
import Navbar from "./Navbar";
// import ScreenSize from "src/components/ScreenSize.jsx";
import About from "./About";
import Teaser from "./Teaser";

function App(){
     const previewOptions=[{
        type:"סדנא משלבת הרצאה",
        name: "לחם זברה סלק",
        productName:"סדנת דגנים",
        benefits:["מנקה כבד - נוגד חמצון","משפר תהליכי עיקול"],
        imgName:"previewImg.png"
     },{
        type:"סדנא משלבת הרצאה",
        name: "גרנולה מכוסמת ירוקה",
        productName:"סדנת קטניות",
        benefits:["מנקה את הכבד - נוגד חמצון","משפר תהליכי עיכול"],
        imgName:"previewImg.png"
     }
    ]
    return (<div>
        <Navbar />
        <FaceVideo />
        <About />
        <Teaser preview={previewOptions}/>
        </div>)
}

export default App;