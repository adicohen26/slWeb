import React from "react";

function ReviewCard(props){
    const review=props.review;
    return  <div className="testimonials">
    <div className="rectengle"></div>
        <h1 className="darkHeading review-quote review-quote-right">״</h1>
        <p className="darkHeading review">{review.testimonial}</p>
        <h1 className="darkHeading review-quote review-quote-left">״</h1>
        <p>{props.role}</p>
        <p className="darkHeading review-name">{review.role}</p>
        <h4 className="darkHeading review-name">{review.name}</h4>
        <img src="" alt="" />
        </div>
}

export default ReviewCard;