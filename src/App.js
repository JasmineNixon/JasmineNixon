import React from 'react';
import ReactDOM from 'react-dom';

import LoginAPI from './LoginAPI';
import LoginTokenAuth from './LoginTokenAuth';
const handleLogin = (username, password) => {
  console.log(`Username: ${username}, Password: ${password}`);
};

const App = () => (
  <div className="App">
    
    <LoginAPI/>
    <LoginTokenAuth/>
 
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
