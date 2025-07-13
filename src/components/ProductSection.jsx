import React, { useState } from 'react';
import './styles/ProductSection.css';
import tractorImg from "../assets/tractor.png"; // Replace with actual image or path

const products = [
  {
    id: 1,
    title: 'Xbazaar-A',
    class: 'daily',
    days: 2,
    dailyIncome: 2480,
    totalIncome: 4960,
    price: 800,
    image: tractorImg,
  },
  {
    id: 2,
    title: 'Xbazaar-B',
    class: 'welfare',
    days: 5,
    dailyIncome: 1000,
    totalIncome: 5000,
    price: 1200,
    image: tractorImg,
  },
  {
    id: 3,
    title: 'AgroX',
    class: 'daily',
    days: 3,
    dailyIncome: 1800,
    totalIncome: 5400,
    price: 950,
    image: tractorImg,
  },
];

const ProductSection = () => {
  const [activeTab, setActiveTab] = useState('daily');

  const filteredProducts = products.filter((product) => product.class === activeTab);

  return (
    <div className="product-section">
      <div className="product-tab-buttons">
        <button
          className={`product-tab ${activeTab === 'daily' ? 'product-active' : ''}`}
          onClick={() => setActiveTab('daily')}
        >
          ⭐ Daily Plan
        </button>
        <button
          className={`product-tab ${activeTab === 'welfare' ? 'product-active' : ''}`}
          onClick={() => setActiveTab('welfare')}
        >
          😊 Welfare Plan
        </button>
      </div>

      <div className="product-card-wrapper">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-days-badge">Days: {product.days}</div>
            <div className="product-card-content">
              <img src={product.image} alt={product.title} className="product-image" />
              <div className="product-info">
                <h2 className="product-title">{product.title}</h2>
                <div className="product-income-info">
                  <div>
                    <h3 className="product-green-text">₹{product.dailyIncome}</h3>
                    <p>Daily Income</p>
                  </div>
                  <div>
                    <h3 className="product-green-text">₹{product.totalIncome}</h3>
                    <p>Total Income</p>
                  </div>
                </div>
                <p className="product-price">
                  Price: <strong>₹{product.price}</strong>
                </p>
              </div>
            </div>
            <button className="product-invest-btn">Invest</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
