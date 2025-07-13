import React, { useState, useEffect } from "react";
import "./styles/AutoImageSlider.css";

// Import local images
import Tractor from "../assets/tractorBanner.jpeg";
import FruiteBasket from "../assets/fruite-basket-banner.jpeg";

const images = [Tractor, FruiteBasket, Tractor, Tractor];

export default function AutoImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade out

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); // fade back in
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="auto-image-slider-wrapper">
      <div className="auto-image-slider-container">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className={`auto-image-slider-image ${fade ? "" : "auto-image-slider-fade-out"}`}
        />
      </div>
    </div>
  );
}
