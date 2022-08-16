import React from "react";
import FaceVideo from "./FaceVideo";
import Navbar from "./Navbar";
import About from "./About";
import Teaser from "./Teaser";
import Testimonials from "./Testimonial";

function HomePage(){
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
    ];
    const reviews=[{
        name:"עדי כהן",
        role:"מפתחת אתר",
        testimonial:"ביקורת מעולה כי הוא נהנה מאוד , איזה  כיף היהביקורת מעולה כי נהנה מאוד , איזה כיף היהביקורת מעולה  כי הוא נהנה מאוד , איזה כיף  היהביקורת מעולה כי הוא נהנה מאוד ,  איזה כיף היהביקורת מעולה כי הוא ",
        imgName:""
    },
    {
        name:"עדי כהן",
        role:"מפתחת אתר",
        testimonial:"ביקורת מעולה כי הוא נהנה מאוד , איזה  כיף היהביקורת מעולה כי נהנה מאוד , איזה כיף היהביקורת מעולה  כי הוא נהנה מאוד , איזה כיף  היהביקורת מעולה כי הוא נהנה מאוד ,  איזה כיף היהביקורת מעולה כי הוא ",
        imgName:""
    },{
        name:"עדי כהן",
        role:"מפתחת אתר",
        testimonial:"ביקורת מעולה כי הוא נהנה מאוד , איזה  כיף היהביקורת מעולה כי נהנה מאוד , איזה כיף היהביקורת מעולה  כי הוא נהנה מאוד , איזה כיף  היהביקורת מעולה כי הוא נהנה מאוד ,  איזה כיף היהביקורת מעולה כי הוא ",
        imgName:""
    },{
        name:"עדי כהן",
        role:"מפתחת אתר",
        testimonial:"ביקורת מעולה כי הוא נהנה מאוד , איזה  כיף היהביקורת מעולה כי נהנה מאוד , איזה כיף היהביקורת מעולה  כי הוא נהנה מאוד , איזה כיף  היהביקורת מעולה כי הוא נהנה מאוד ,  איזה כיף היהביקורת מעולה כי הוא ",
        imgName:""
    }]
    return (<div>
        <Navbar />
        <FaceVideo />
        <About />
        <Teaser preview={previewOptions}/>
        <Testimonials reviews={reviews} />
        </div>)
}

export default HomePage;