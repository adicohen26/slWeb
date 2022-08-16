import React from "react";
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
// import { EffectCreative } from "swiper";
import { EffectCoverflow } from "swiper";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Testimonials(props){
 return <div className="testimonials container">
    <h2 className="darkHeading mainHeading">ולקינוח</h2>
    <h3 className="darkHeading mainHeading"> לקוחות מספרים על החוויה שלנו יחד </h3>
    <Swiper
      // install Swiper modules
    //   modules={[Navigation, EffectFade, Pagination]}
    //   slidesPerView={3}
    //   navigation
    //   speed={800}
    //   pagination={{ clickable: true }}
    //   effect



    effect={"coverflow"}
    modules={[EffectCoverflow, Pagination]}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        className="mySwiper"
        
      loop
    >
        {props.reviews.map((review, index) => <SwiperSlide>
                <ReviewCard key={index} review={review} />
            </SwiperSlide>)}
    </Swiper>
 </div>
}

export default Testimonials;