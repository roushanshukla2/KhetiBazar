import React, { useEffect, useState } from 'react';
import '../components/styles/Loader.css';
import logo from '../assets/logo.png';

const Loader = () => {
  const [slide, setSlide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlide(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-container ${slide ? 'slide-up' : ''}`}>
      <img src={logo} alt="logo" className="logo" />
      <div className="loading-dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default Loader;
