const Rating = () => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  const clicked = (index) => {
    return console.log("Clicked !", index);
  };

  const hovered = (direction, index) => {
    return console.log("Hovered", direction, index);
  };

  return (
    <>
      <div className="rating-container">
        <h2>Rate your experience</h2>
        <div className="stars">
          {stars.map((star, index) => (
            <span
              onClick={() => clicked(index)}
              onMouseEnter={() => hovered("enter", index)}
              onMouseLeave={() => hovered("leave", index)}
              key={star}
              className="star"
            >
              {"\u2605"}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Rating;
