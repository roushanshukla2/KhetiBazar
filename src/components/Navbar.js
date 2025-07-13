// src/components/Navbar.js
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './styles/Navbar.css'; // Import your CSS styles

// ✅ Import images
import homeIcon from '../assets/home.png';
import productIcon from '../assets/product.png';
import promotionIcon from '../assets/product.png';
import menuIcon from '../assets/menu.svg';

function Navbar() {
  const location = useLocation();

  return (
    <div className="navbar-wrapper">
      <nav className="navbar-container">
        <div className={`nav-card ${location.pathname === '/' ? 'active' : ''}`}>
          <NavLink to="/home">
            <img src={homeIcon} alt="Home" />
            <span>Home</span>
          </NavLink>
        </div>
        <div className={`nav-card ${location.pathname === '/products' ? 'active' : ''}`}>
          <NavLink to="/products">
            <img src={productIcon} alt="Products" />
            <span>Products</span>
          </NavLink>
        </div>
        <div className={`nav-card ${location.pathname === '/promotions' ? 'active' : ''}`}>
          <NavLink to="/promotions">
            <img src={promotionIcon} alt="Promotions" />
            <span>Promotions</span>
          </NavLink>
        </div>
        <div className={`nav-card ${location.pathname === '/profile' ? 'active' : ''}`}>
          <NavLink to="/profile">
            <img src={menuIcon} alt="Mine" />
            <span>Mine</span>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
