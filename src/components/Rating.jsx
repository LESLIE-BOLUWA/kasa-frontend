// Rating
import star from "../../public/star.svg";
import starFilled from "../../public/star_filled.svg";

export default function Rating({ rating }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="rating">
      {stars.map(
        (s) =>
          s <= rating ? (
            <img
              key={s}
              src={starFilled}
              alt="étoile remplie"
              className="star star_filled"
            />
          ) : (
            <img key={s} src={star} alt="étoile vide" className="star" />
          )

        // <span key={s} className={s <= rating ? "star star_filled" : "star"}>
        //   ★
        // </span>
      )}
    </div>
  );
}
