import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
//import './StarRating.css';

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return (
        <div className="starRating">
            {
                [...Array(5)].map((star, i) => {
                    const ratingValue = i + 1
                    return (
                        <label>
                            <input
                                type="radio"
                                name="rating"
                                classNames="radio"
                                value={ratingValue}
                                onClick={() => setRating(ratingValue)}

                            />
                            <AiFillStar
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)}
                                className="star" size={32}
                                color={ratingValue <= (hover || rating) ? "ffc107" : "#e4e5e9"}
                            />
                        </label>
                    )
                })
            }
        </div>
    )
}
export default StarRating;