import React from "react";
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Autoplay } from 'swiper';
// import { EffectCreative } from "swiper";
import { EffectCoverflow } from "swiper";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Testimonials(props){
 return <div className="section-container">
  <h2 className="darkHeading mainHeading">ולקינוח</h2>
    <h3 className="darkHeading mainHeading"> לקוחות מספרים על החוויה שלנו יחד </h3>
 <div className="testimonials ">
    
    <div className="testimonials-swiper">
    <Swiper
    effect={"coverflow"}
    modules={[EffectCoverflow, Pagination,Autoplay,Navigation]}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={1}
    speed={800}
    autoplay={{
      delay: 5000,
      disableOnInteraction: true,
    }}
    pagination={{ clickable: true }}
    navigation
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
   }}
    className="mySwiper"
    loop
    >
        {props.reviews.map((review, index) => {
       return <SwiperSlide key={index} >
                <ReviewCard key={review._id} review={review} />
            </SwiperSlide>})}
            
    </Swiper>
    </div>
 </div>
 </div>
}

export default Testimonials;