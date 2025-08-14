import { useState } from "react";
import Star from "./Star.jsx";

const Rating = ({
  heading = "Rate Your Experience",
  feedbackMessages = ["Terrible", "Poor", "Fair", "Good", "Excellent"],
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  // feedback
  // const feedbackMessages = ["Terrible", "Poor", "Fair", "Good", "Excellent"];

  return (
    <>
      <div className="rating-container">
        <h2>{heading}</h2>
        <div className="stars">
          {stars.map((star) => (
            <Star
              key={star}
              star={star}
              rating={rating}
              hover={hover}
              color="gold"
              ratingClick={setRating}
              hoverEnter={setHover}
              hoverLeave={() => setHover(null)}
            />
            /* 
            <span
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              key={star}
              className={`star ${star <= (hover || rating) ? "active" : ""}`}
            >
              {"\u2605"}
            </span>
            */
          ))}
        </div>
        {/* feedback messages */}
        {rating > 0 && (
          <p className="feedback">{feedbackMessages[rating - 1]}</p>
        )}
      </div>
    </>
  );
};

export default Rating;
