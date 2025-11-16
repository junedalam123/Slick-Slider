import React from "react";

const Slide = React.memo(({ imgSrc, title, caption }) => {
  return (
    <figure className="carousel-slide">
      <img
        src={imgSrc}
        alt={title || "Carousel image"}
        className="carousel-image"
        loading="lazy"
      />

      <figcaption className="carousel-text">
        <h2 className="carousel-title">{title}</h2>
        <p className="carousel-caption">{caption}</p>
      </figcaption>
    </figure>
  );
});

export default Slide;
