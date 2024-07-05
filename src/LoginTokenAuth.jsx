import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './styles.css';

const LoginTokenAuth = ({ onLogin,redirectForgotPassword, redirectRegistration, rememberMe }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className='container'>
    <div className='row'>
    <div className='col-login'>
      <div className='card'>
    <h2 className='border-bottom m0 p-3 card-title'>Login- OpenID Connect</h2>
    <div className='card-body'>
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Username:</label>
        <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="form-group">
        <label className="form-label">Password:</label>
        <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="form-group options1">
          <a href={redirectForgotPassword} className='link1' >
            Forgot Password?
          </a>
          <label className='link1'>
          <input type="checkbox" checked={rememberMe}  />
          Remember Me
        </label>
        </div>
        <div style={{display:'flex'}}>
      <button type="submit" className="btn btn-sec">Login</button><button type="submit" className="btn btn-sec">Sign In with OpenID</button></div>
      
    </form>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};

LoginTokenAuth.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginTokenAuth;
