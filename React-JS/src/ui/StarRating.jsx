import { useState } from "react";
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";

export default function StarRating() {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  function handleRatingChange(rate) {
    setRating(rate);
  }

  function handleTempRatingChange(rate) {
    setTempRating(rate);
  }

  return (
    <div className="flex gap-8 items-center bg-gray-900 text-gray-100 p-2 rounded max-w-[500px] h-[50px] mx-auto">
      <div className="flex gap-2 items-center">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            starNumber={i + 1}
            rating={rating}
            onRatingChange={() => handleRatingChange(i + 1)}
            tempRating={tempRating}
            onTempRatingMove={() => handleTempRatingChange(i + 1)}
            onTempRatingOut={() => handleTempRatingChange(0)}
          />
        ))}
      </div>

      {tempRating || rating ? (
        <p>Your Rated this: {tempRating || rating} Stars</p>
      ) : null}
    </div>
  );
}

function Star({
  starNumber,
  rating,
  onRatingChange,
  tempRating,
  onTempRatingMove,
  onTempRatingOut,
}) {
  return (
    <span
      role="button"
      onMouseMove={onTempRatingMove}
      onMouseOut={onTempRatingOut}
      onClick={onRatingChange}
    >
      {tempRating ? (
        starNumber <= tempRating ? (
          <FaStar />
        ) : (
          <FaRegStar />
        )
      ) : starNumber <= rating ? (
        <FaStar />
      ) : (
        <FaRegStar />
      )}
    </span>
  );
}
