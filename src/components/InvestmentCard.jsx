import React from 'react';
import "./styles/InvestmentCard.css";
import tractorImage from "../assets/tractor.png";

const InvestmentCard = () => {
  const handleInvest = () => {
    alert('Investment Successful!');
  };

  return (
    <div className="Investment-card-wrapper">
      <div className="Investment-card">
        <div className="Investment-badge-left">⭐ Special Plan</div>
        <div className="Investment-badge-right">Days: 2</div>

        <h2 className="Investment-limited">Limited Offer</h2>

        <img src={tractorImage} alt="Red Tractor" className="Investment-tractor" />

        <div className="Investment-income-info">
          <div className="Investment-profit">
            ₹2480<br />
            <small>Daily Profit</small>
          </div>
          <div className="Investment-total">
            ₹4960<br />
            <small>Total Income</small>
          </div>
        </div>

        <div className="Investment-price">Price: ₹800</div>
        <button className="Investment-invest-btn" onClick={handleInvest}>
          Invest
        </button>
      </div>
    </div>
  );
};

export default InvestmentCard;
