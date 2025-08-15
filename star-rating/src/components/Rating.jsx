import { useState } from "react";
import Star from "./Star.jsx";
import Modal from "./Modal.jsx";
import Button from "./Button.jsx";

const Rating = ({
  heading = "Rate Your Experience",
  color = "gold",
  feedbackMessages = ["Terrible", "Poor", "Fair", "Good", "Excellent"],
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  // feedback
  // const feedbackMessages = ["Terrible", "Poor", "Fair", "Good", "Excellent"];

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
    }
  };

  // close Modal and reset UI
  const closeModal = () => {
    setSubmitted(false);
    setRating(0);
    setHover(0);
  };

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
              color={color}
              ratingClick={setRating}
              hoverEnter={setHover}
              hoverLeave={() => setHover(null)}
            />
          ))}
        </div>
        {/* feedback messages */}
        {rating > 0 && (
          <p className="feedback">{feedbackMessages[rating - 1]}</p>
        )}

        {/* button submit 
        <button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={rating === 0}
        >
          Submit
        </button>
*/}
        <Button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={rating === 0}
        >
          Submit
        </Button>
        <Modal isOpen={submitted} onClose={closeModal} rating={rating} />
      </div>
    </>
  );
};

export default Rating;
