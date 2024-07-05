// src/components/Login.js
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Replace this URL with the actual authentication API endpoint
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(response);
    const users = await response.json();
    console.log(users);
    
    // Simulate authentication by checking if the username exists in the fetched users
    const user = users.find(user => user.username === username);

    if (user && password === 'password') { // Simulating password check
      setMessage('Login successful!');
    } else {
      setMessage('Login failed. Please check your username and password.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
