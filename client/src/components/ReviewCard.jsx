import React from "react";

function ReviewCard(props){
    const review=props.review;
    return  <div className="testimonials">
    <div className="rectangle"></div>
    <h1 className="darkHeading">״</h1>
    <p className="darkHeading review">{review.testimonial}</p>
    <h1 className="darkHeading">״</h1>
    <p>{props.role}</p>
    <h4 className="darkHeading">{review.name}</h4>
    <img src="" alt="" />
    </div>
}

export default ReviewCard;