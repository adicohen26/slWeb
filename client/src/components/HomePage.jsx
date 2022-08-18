import React from "react";
import FaceVideo from "./homepage/FaceVideo";
import About from "./homepage/About";
import Teaser from "./homepage/Teaser";
import Testimonials from "./homepage/Testimonial";
import useFetch from "../useFetch";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination ,Mousewheel} from "swiper";

function HomePage(){
    const {data, isPending, error}=useFetch("http://localhost:5000/");
   return (<div>
        {isPending && <h1>loading...</h1>}
        <FaceVideo />
        <About />
        {data && <Teaser id={"services"} preview={data.previewOptions}/>}
        {data && <Testimonials reviews={data.reviews} />}
        
    </div>)
}

export default HomePage;