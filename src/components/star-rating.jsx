/* eslint-disable react/prop-types */
const StarRating = ({ rating = 0, onChange, size = 5 }) => {
  return (
    <div className="star-rating">
      {Array(size)
        .fill("")
        .map((_, index) => {
          const starValue = index + 1;

          return (
            <span
              key={index}
              className={starValue <= rating ? "star active" : "star"}
              onClick={() => onChange && onChange(starValue)}
            >
              &#9733;
            </span>
          );
        })}
    </div>
  );
};

export default StarRating;
