import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/LoginForm.css";

const LoginForm = ({ onFlip }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(phone)) {
      setError("Phone number must be exactly 10 digits.");
      return;
    }

    if (!password) {
      setError("Password is required.");
      return;
    }

    const userData = {
      phone,
      password,
      loggedInAt: Date.now(),
    };

    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/home");
  };

  return (
    <div className="card login-form">
      <div className="title">Login Form</div>
      <form onSubmit={handleLogin}>
        <div className="field">
          <i className="fas fa-phone"></i>
          <input
            type="text"
            inputMode="numeric"
            pattern="\d*"
            maxLength="10"
            value={phone}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, "");
              setPhone(val.slice(0, 10));
              setError("");
            }}
            required
          />
          <label>Phone</label>
        </div>

        <div className="field">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            required
          />
          <label>Password</label>
        </div>

        {error && (
          <p
            style={{
              color: "red",
              fontSize: "14px",
              marginTop: "8px",
              marginBottom: "0",
            }}
          >
            {error}
          </p>
        )}

        <div className="content">
          <div className="checkbox">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <div className="pass-link">
            <a href="#">Forgot password?</a>
          </div>
        </div>

        <div className="field">
          <input type="submit" value="Login" className="btn" />
        </div>

        <div className="signup-link">
          Not a member?{" "}
          <a
            href="#"
            onClick={onFlip}
            style={{
              color: "#007BFF",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Signup now
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
