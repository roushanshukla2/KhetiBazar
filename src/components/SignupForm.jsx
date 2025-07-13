
// src/components/SignupForm.jsx
import React from "react";
import "./styles/LoginForm.css";

const SignupForm = ({ onFlip }) => {
  return (
    <div className="card signup-form">
      <div className="title">Signup Form</div>
      <form action="#">
        <div className="field">
          <i className="fas fa-user"></i>
          <input type="text" required />
          <label>Nickname</label>
        </div>
        <div className="field">
          <i className="fas fa-phone"></i>
          <input type="tel" required />
          <label>Phone Number</label>
        </div>
        <div className="field">
          <i className="fas fa-key"></i>
          <input type="text" required />
          <label>Enter Your OTP</label>
        </div>
        <div className="field">
          <i className="fas fa-lock"></i>
          <input type="password" required />
          <label>Password</label>
        </div>
        <div className="field">
          <i className="fas fa-gift"></i>
          <input type="text" />
          <label>Referral Code (optional)</label>
        </div>
        <div className="field">
          <input type="submit" value="Sign Up" className="btn" />
        </div>
        <div className="signup-link">
          Already have an account? <a href="#" onClick={onFlip}>Login now</a>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
