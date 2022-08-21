import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";


function PhotoCarousel(props){
    return <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="swiper-photo-container"
      >
        <SwiperSlide ><img className="swiper-photo" src="../../images/about-img.jpg" /></SwiperSlide>
        <SwiperSlide ><img className="swiper-photo" src="../../images/desertWithBackground.jpg" /></SwiperSlide>
        <SwiperSlide ><img className="swiper-photo" src="../../images/about-img.jpg" /></SwiperSlide>
        <SwiperSlide ><img className="swiper-photo" src="../../images/desertWithBackground.jpg" /></SwiperSlide>
      </Swiper>
    </>
}



export default PhotoCarousel;