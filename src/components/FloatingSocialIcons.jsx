import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./styles/FloatingSocialIcons.css";

const FloatingSocialIcons = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const wrapperRef = useRef(null);

  const toggleIcons = () => {
    setOpen((prev) => !prev);
  };

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fab-wrapper" ref={wrapperRef}>
      <div className={`fab-button ${open ? "open" : ""}`} onClick={toggleIcons}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24">
          <path d="M12 2l-7 7h4v7h6v-7h4z" />
        </svg>
      </div>

      <div className={`social-icons ${open ? "show" : ""}`}>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
};

export default FloatingSocialIcons;
