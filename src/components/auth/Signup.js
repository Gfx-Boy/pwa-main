// src/Login.js
import React, { useState } from "react";
import "../auth/Login.css";
import logo from "../../images/logo.png";
import google from "../../images/google.png";
import { FaEnvelope, FaLock } from "react-icons/fa";

function Login() {
  // State to manage form inputs and response messages
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  // Handler for form submission
  const handleSignUp = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      // Send data to the backend
      const response = await fetch("https://your-backend-url.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      // Parse the JSON response
      const data = await response.json();

      if (response.ok) {
        // Handle successful signup
        setMessage("Signup successful! Please log in.");
      } else {
        // Handle signup error
        setMessage(data.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="Login Graphic" className="login-image" />
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="input-group">
            <FaEnvelope className="icon" />
            <input
              type="text"
              placeholder="Username or Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Sign Up
          </button>
        </form>

        {message && <p className="message">{message}</p>}

        <div className="separator">- OR -</div>
        <button className="google-login">
          <img src={google} alt="Google Icon" />
          Sign Up with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
