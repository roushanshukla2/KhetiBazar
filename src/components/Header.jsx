import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './styles/Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getTitle = () => {
    switch (location.pathname) {
      case '/home':
        return 'Kheti Bazar';
      case '/products':
        return 'Products';
      case '/promotions':
        return 'Promotions';
      case '/profile':
        return 'Profile';
      default:
        return 'Kheti Bazar';
    }
  };

  const showBagIconOnly = ['/products', '/profile'].includes(location.pathname);

  const handleBagClick = () => {
    navigate('/purchased');
  };

  return (
    <header className="upper-navbar">
      <div className="upper-nav-left-container">
        <a href="/home"><img src={logo} alt="Kheti Bazar logo" /></a>
      </div>
      <div className="upper-nav-mid-container">
        <h3>{getTitle()}</h3>
      </div>
      <div className="upper-nav-right-container">
        {showBagIconOnly ? (
          <i className="fas fa-shopping-bag" onClick={handleBagClick} style={{ cursor: 'pointer' }}></i>
        ) : (
          <>
            <i className="fas fa-globe"></i>
            <i className="fas fa-bell"></i>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
