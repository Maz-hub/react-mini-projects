export default function StarRating({ numOfStars = 5 }) {
    return <div className="star-rating">{[...Array(numOfStars)].map()}</div>;
}
