import React, { useState } from 'react';
import './css/Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission, e.g., authenticate the user
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
        <h3>LOG IN</h3>
      <div style={formGroupStyle}>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          required
          style={inputStyle}
        />
      </div>
      <div style={formGroupStyle}>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
          style={inputStyle}
        />
      </div>
      <button type="submit" style={buttonStyle}>Login</button>
    </form>
  );
}

// Styles for the form and its elements
const formStyle = {
  maxWidth: '300px',
  margin: '0 auto',
  padding: '20px',
//   border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor: '#f9f9f9',
};

const formGroupStyle = {
  marginBottom: '15px',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  marginTop: '5px',
  boxSizing: 'border-box',
};

const buttonStyle = {
    background: '#000',
    color: '#fff',
    boxShadow: 'none !important',
    border: '2px solid #000',
    transition: '.5s',
    fontFamily: 'Montserrat',
    fontSize: '13px',
    textAlign: 'center',
    padding: '10px 25px 10px',
    cursor: 'pointer',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
};

export default Login;
