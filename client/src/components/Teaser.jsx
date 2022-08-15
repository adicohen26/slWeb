import React,{useState} from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import PreviewProduct from "./PreviewProduct";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Teaser(props){
    console.log("in Teaser");
    // const backgroundColor=["#3B5B66","#F29E9B"];
    // const [bColor,setColor]=useState("#F29E9B"); 
    return <div className="container" style={{backgroundColor: "#F29E9B"}}>
       <h2 className="lightHeading mainHeading"> מנה עיקרית</h2>
       <h3 className="lightHeading mainHeading"> מגוון החוויות שלנו </h3>
        <Swiper
      // install Swiper modules
      modules={[Navigation, EffectFade, Pagination]}
      slidesPerView={1}
      navigation
      speed={800}
      pagination={{ clickable: true }}
      effect
    //   onSwiper={(swiper) => console.log(swiper)}
    // onSlideChange={() => console.log("on slide change")}
    // onSlideChange={() => setColor(prevValue => 
    //     {console.log("onSweip "+ prevValue);
    //     if(prevValue === "#F29E9B")
    //         {return "#3B5B66"}
    //     else {return "#F29E9B"}})}
    loop
    >
        {props.preview.map((previewItem, index) => <SwiperSlide>
            <PreviewProduct key={index} previewItem={previewItem} />
            </SwiperSlide>)}
      
      {/* <SwiperSlide>Slide 2</SwiperSlide> */}
    </Swiper>
    </div>
    
    
    
}

export default Teaser;
