import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);  
  const navigate = useNavigate();


  const handleSignIn = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));


    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setError('');
      setSuccess(true); 
      console.log("Login successful!");
      setTimeout(() => navigate('/profile'), 1500);  
    } else {
      setError("Invalid credentials. Please try again.");
      setSuccess(false); 
    }
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
      Login successful!
    </div>
      )}
      <h2>Welcome Back!</h2>
      <form className="auth-form" onSubmit={handleSignIn}>
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
        <button type="submit">Sign In</button>
      </form>
      {error && <p className="error">{error}</p>}
      <div className="auth-footer">
        <p>Forgot password?</p>
        <p>
          New here? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
