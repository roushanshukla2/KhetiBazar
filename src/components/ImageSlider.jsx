import React, { useEffect, useState } from 'react';
import './styles/ImageSlider.css'; // Make sure this CSS file exists

import img1 from '../assets/tractor.png';
import img2 from '../assets/tractor.png';
import img3 from '../assets/tractor.png';
import img4 from '../assets/tractor.png';

const sliderImages = [img1, img2, img3, img4];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 1000); // 1-second interval

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slider-container">
      <img
        src={sliderImages[current]}
        alt={`Slide ${current}`}
        className="slider-image"
      />
    </div>
  );
};

export default ImageSlider;
