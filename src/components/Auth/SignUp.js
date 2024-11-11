import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';


const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();


  const handleSignUp = (e) => {
    e.preventDefault();


    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill out all fields");
      setSuccess(false);
      return;
    }


    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setSuccess(false);
      return;
    }


    localStorage.setItem('user', JSON.stringify({ name, email, password }));
    setError('');
    setSuccess(true);
    setTimeout(() => navigate('/signin'), 1500);
  };


  return (
    <div className="auth-container">
      <div className="auth-logo">InspireHub</div>
      {success && (
        <div className="success-message">
        <span className="success-tick">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path fill="#4CAF50" d="M10 15l-5-5 1.41-1.41L10 12.17l7.29-7.29L19 6l-9 9z" />
          </svg>
        </span>
        Account created successfully!
      </div>
      )}
      <h2>Create an Account</h2>
      <form className="auth-form" onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      {error && <p className="error">{error}</p>}
      <div className="auth-footer">
        <p>Already have an account? <Link to="/signin">Sign In</Link></p>
      </div>
    </div>
  );
};

export default SignUp;

