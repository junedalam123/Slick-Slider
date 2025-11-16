import React, {
  useMemo,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import Slider from "react-slick";
import Slide from "./Slide";
import { SLIDE_DATA } from "../../constants/slideData.js";
import { useLiveAnnouncer } from "../../hooks/useLiveAnnouncer";
import "./carousel.css";

const Carousel = ({ slides = SLIDE_DATA }) => {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);


  const currentLabel =
    slides[index]?.label || slides[index]?.title || `Slide ${index + 1}`;

  useLiveAnnouncer(`${currentLabel} — slide ${index + 1} of ${slides.length}`);

  /** Slider Settings */
  const settings = useMemo(
    () => ({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
      pauseOnHover: false,
      pauseOnFocus: false,
      beforeChange: (_, next) => setIndex(next),
    }),
    []
  );

  /** Pause / Play */
  const handlePausePlay = useCallback(() => {
    if (!sliderRef.current) return;

    if (isPaused) {
      sliderRef.current.slickPlay();
      setIsPaused(false);
    } else {
      sliderRef.current.slickPause();
      setIsPaused(true);
    }
  }, [isPaused]);

  const handlePrev = () =>
    sliderRef.current && sliderRef.current.slickPrev();

  const handleNext = () =>
    sliderRef.current && sliderRef.current.slickNext();

  /** Keyboard controls */
  useEffect(() => {
    const onKey = (e) => {
      const tag = document.activeElement?.tagName?.toLowerCase();
      if (tag === "input" || tag === "textarea") return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      } else if (e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        handlePausePlay();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handlePausePlay]);

  /** Pause autoplay when focused */
  const onFocusIn = () => {
    if (!isPaused && sliderRef.current) {
      sliderRef.current.slickPause();
    }
  };

  const onFocusOut = () => {
    if (!isPaused && sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  };

  return (
    <section
      className="hero-carousel"
      aria-label="Featured media carousel"
      onFocus={onFocusIn}
      onBlur={onFocusOut}
    >
  
      <button
        className="carousel-btn pause-btn"
        aria-pressed={isPaused}
        aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
        onClick={handlePausePlay}
      >
        {isPaused ? "▶" : "⏸"}
      </button>

      {/* Custom Arrows */}
      <div className="arrow-group">
        <button
          className="carousel-btn arrow-btn prev"
          aria-label="Previous slide"
          onClick={handlePrev}
        >
          ⬅
        </button>

        <button
          className="carousel-btn arrow-btn next"
          aria-label="Next slide"
          onClick={handleNext}
        >
          ➡
        </button>
      </div>

      {/* Slides */}
      <Slider ref={sliderRef} {...settings}>
        {slides.map((item, i) => (
          <article
            key={item.id || i}
            className="slide"
            role="group"
            aria-roledescription="slide"
            aria-label={`${item.label || item.title || `Slide ${i + 1}`} — ${
              i + 1
            } of ${slides.length}`}
          >
            <Slide
              imgSrc={item.src}
              title={item.label}
              caption={item.description}
            />
          </article>
        ))}
      </Slider>
    </section>
  );
};

export default Carousel;
