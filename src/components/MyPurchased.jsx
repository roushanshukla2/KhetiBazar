// src/components/MyPurchased.jsx
import React, { useState } from 'react';
import './styles/MyPurchased.css';

const MyPurchased = () => {
  const [activeTab, setActiveTab] = useState('daily');

  return (
    <div className="purchased-history-wrapper">
      <div className="purchased-history-back-button" onClick={() => window.history.back()}>
        <i className="fas fa-chevron-left"></i>
      </div>

      <div className="purchased-history-title">My Purchased</div>

      <div className="purchased-history-tab-container">
        <button
          className={`purchased-history-tab ${activeTab === 'daily' ? 'active' : ''}`}
          onClick={() => setActiveTab('daily')}
        >
          <i className="fas fa-star"></i> Daily Orders
        </button>
        <button
          className={`purchased-history-tab ${activeTab === 'welfare' ? 'active' : ''}`}
          onClick={() => setActiveTab('welfare')}
        >
          <i className="fas fa-smile-beam"></i> Welfare Orders
        </button>
      </div>

      <div className="purchased-history-message-box">
        <i className="fas fa-times-circle"></i>
        <span>No! You have no active subscriptions.</span>
      </div>
    </div>
  );
};

export default MyPurchased;
