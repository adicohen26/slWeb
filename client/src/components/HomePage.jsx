import React from "react";
import FaceVideo from "./FaceVideo";
import Navbar from "./Navbar";
import About from "./About";
import Teaser from "./Teaser";
import Testimonials from "./Testimonial";
import { useState,useEffect } from "react";

function HomePage(){

    const [previewOptions,setOptions]=useState([]);
    const [reviews,setReviews]=useState([]);
    function getData(){
        fetch("http://localhost:5000/")
        .then((response) => response.json())
        .then((data) => {
            setOptions(data.previewOptions)
            setReviews(data.reviews);
            console.log(data);
        });
    }
    useEffect(() => {getData()},[]);
    return (<div>
        <Navbar />
        <FaceVideo />
        <About />
        <Teaser preview={previewOptions}/>
        <Testimonials reviews={reviews} />
        </div>)
}

export default HomePage;