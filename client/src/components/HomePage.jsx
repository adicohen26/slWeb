import React from "react";
import FaceVideo from "./FaceVideo";
import Navbar from "./Navbar";
import About from "./About";
import Teaser from "./Teaser";
import Testimonials from "./Testimonial";
import { useState,useEffect } from "react";
import useFetch from "../useFetch";

function HomePage(){
    const {data, isPending, error}=useFetch("http://localhost:5000/");
   return (<div>
        <Navbar />
        <FaceVideo />
        <About />
        {isPending && <h1>loading...</h1>} 
        {data && <Teaser preview={data.previewOptions}/>}
        {data && <Testimonials reviews={data.reviews} />}
        
        </div>)
}

export default HomePage;