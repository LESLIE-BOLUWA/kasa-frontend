import { useState } from "react";
import arrowBackward from "../../public/arrow_backward.png";
import arrowForward from "../../public/arrow_forward.png";

export default function Carousel({ pictures }) {
  const [index, setIndex] = useState(0);
  const total = pictures?.length ?? 0;

  if (!total) return null;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  const style = {
    backgroundImage: `url(${pictures[index]})`,
  };

  return (
    <div
      className="carousel"
      style={style}
      aria-label="Galerie photos du logement"
    >
      <div className="carousel__controls">
        <button
          className="carousel__btn carousel__btn--prev"
          onClick={prev}
          aria-label="Image précédente"
        >
          <img src={arrowBackward} alt="flèche gauche" />
        </button>
        <button
          className="carousel__btn carousel__btn--next"
          onClick={next}
          aria-label="Image suivante"
        >
          <img src={arrowForward} alt="flèche droite" />
        </button>
      </div>
      <div className="carousel__counter">
        {index + 1} / {total}
      </div>
    </div>
  );
}
