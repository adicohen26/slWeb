import React from "react";
import FaceVideo from "./homepage/FaceVideo";
import Navbar from "./Navbar";
import About from "./homepage/About";
import Teaser from "./homepage/Teaser";
import Testimonials from "./homepage/Testimonial";
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