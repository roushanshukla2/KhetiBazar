// src/components/FlipCard.jsx
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import "./styles/FlipCard.css";

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [key, setKey] = useState(0); // unique key for resetting form

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    setKey(prev => prev + 1); // This will force remount of form
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="login-form-wrapper">
        <div className="container">
          <div className={`wrapper ${isFlipped ? "flipped" : ""}`}>
            <div className="flip-card-inner">
              <LoginForm onFlip={handleFlip} key={!isFlipped ? key : "hidden"} />
              <SignupForm onFlip={handleFlip} key={isFlipped ? key : "hidden"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
