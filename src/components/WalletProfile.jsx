// src/components/WalletProfile.jsx
import React from 'react';
import './styles/WalletProfile.css';
import profileImg from '../assets/profile.png';
import { useNavigate } from 'react-router-dom';

const WalletProfile = ({
  name = 'Gopal Bishnoi',
  phone = '9024451514',
  balance = 567.0,
  stats = {
    recharge: 0,
    withdraw: 23076,
    welfare: 0,
  },
  menuLinks = [
    { icon: 'fa-user', label: 'About Company', href: '/about-company' },
    { icon: 'fa-file-invoice-dollar', label: 'Income Record', href: '/income-record' },
    { icon: 'fa-wallet', label: 'Withdraw Record', href: '/withdraw-record' },
    { icon: 'fa-gift', label: 'Redeem Code', href: '/redeem-code' },
    { icon: 'fa-download', label: 'App Download', href: '/app-download' },
  ],
}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // Or sessionStorage.clear() based on your auth logic
    navigate('/login');   // Redirect to login page
  };

  return (
    <>
      <div className="main-wrapper">
        <div className="profile-container">
          <div className="user-information-container">
            <img src={profileImg} alt="profile" />
            <p>{name}</p>
            <p>{phone}</p>
          </div>
          <div className="account-balance">
            <div className="account-balance-text">
              <span>Account Balance</span>
              <span>₹{balance.toFixed(2)}</span>
            </div>
            <button>Recharge</button>
          </div>
        </div>
      </div>

      <div className="wallet-container">
        <div className="wallet-top-boxes">
          <div className="wallet-box">
            <strong>₹{stats.recharge}</strong>
            <p>Recharge</p>
          </div>
          <div className="wallet-box">
            <strong>₹{stats.withdraw}</strong>
            <p>Withdraw</p>
          </div>
          <div className="wallet-box">
            <strong>₹{stats.welfare}</strong>
            <p>Welfare</p>
          </div>
        </div>

        <div className="wallet-menu">
          {menuLinks.map((item, index) => (
            <a key={index} className="wallet-menu-item" href={item.href}>
              <i className={`fas ${item.icon}`}></i> {item.label}
              <i className="fas fa-chevron-right right-arrow"></i>
            </a>
          ))}
        </div>

        <button className="exit-button" onClick={handleLogout}>Exit App</button>
      </div>
    </>
  );
};

export default WalletProfile;
