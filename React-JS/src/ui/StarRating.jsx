import { useState } from "react";
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { hasPointedHalf } from "../utils/helpers";

const allRatingsData = [
  { half: 0.5, full: 1 },
  { half: 1.5, full: 2 },
  { half: 2.5, full: 3 },
  { half: 3.5, full: 4 },
  { half: 4.5, full: 5 },
];

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
        {allRatingsData.map((rate, i) => (
          <Star
            key={i}
            starNumber={i + 1}
            rate={rate}
            rating={rating}
            onRatingChange={handleRatingChange}
            tempRating={tempRating}
            onTempRatingMove={handleTempRatingChange}
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
  rate,
  rating,
  onRatingChange,
  tempRating,
  onTempRatingMove,
  onTempRatingOut,
}) {
  function handleClick(e) {
    if (hasPointedHalf(e)) onRatingChange(rate.half);
    else onRatingChange(rate.full);
  }

  function handleHover(e) {
    if (hasPointedHalf(e)) onTempRatingMove(rate.half);
    else onTempRatingMove(rate.full);
  }

  return (
    <span
      role="button"
      style={{ width: "20px", height: "20px", display: "block" }}
      onMouseMove={handleHover}
      onMouseOut={onTempRatingOut}
      onClick={handleClick}
    >
      {tempRating ? (
        <DisplayRating rating={tempRating} rate={rate} />
      ) : (
        <DisplayRating rating={rating} rate={rate} />
      )}

      {/* {tempRating ? (
        starNumber <= tempRating ? (
          <FaStar style={{ width: "100%", height: "100%", display: "block" }} />
        ) : (
          <FaRegStar
            style={{ width: "100%", height: "100%", display: "block" }}
          />
        )
      ) : starNumber <= rating ? (
        <FaStar style={{ width: "100%", height: "100%", display: "block" }} />
      ) : (
        <FaRegStar
          style={{ width: "100%", height: "100%", display: "block" }}
        />
      )} */}
    </span>
  );
}

function DisplayRating({ rating, rate }) {
  return (
    <>
      {rating === rate.half && (
        <FaRegStarHalfStroke
          style={{ width: "100%", height: "100%", display: "block" }}
        />
      )}
      {rating >= rate.full && (
        <FaStar style={{ width: "100%", height: "100%", display: "block" }} />
      )}
      {rating !== rate.half && rating < rate.full && (
        <FaRegStar
          style={{ width: "100%", height: "100%", display: "block" }}
        />
      )}
    </>
  );
}
