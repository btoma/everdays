import React from "react";
import starColor from "../images/star-color.png"
import starWhite from "../images/star-white.png"

const StarRating = ({ ratings }) => {
   
    const { combinedAvg, average } = ratings;
   
    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                index += 1;
                const rating = combinedAvg || average;
                const addColor = rating ? rating * 5 : 0;
                
                return (
                    
                    <span className='star'>
                        <img className="color-star" src={index <= addColor ? starColor : starWhite} alt="starIcon" /> 
                    </span> 
                   
                );
            })}
        </div>
    );
};

export default StarRating;