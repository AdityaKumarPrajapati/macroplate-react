import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Login.css';
 
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    let loginResult = await fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        email, // Your data payload for POST
        password
      })
    })
    if (loginResult.ok) {
      // Parse the loginResult JSON
      const data = await loginResult.json();
      console.log('Login successful:', data.user);

      localStorage.setItem('user', JSON.stringify(data.user));
      // Redirect to the dashboard
      navigate('/dashboard'); // Replaces history.push
    } else {
      const errorData = await loginResult.json();
      document.getElementById('errorElement').innerHTML = errorData.message
        console.error('Login failed:', errorData.message);
    }
    // if (loginResult.ok) {
    //   console.log(await loginResult.json());
    // }
    // // .then(response => response.json())
    // // .then(data => console.log(data))
    // // .catch(error => console.error('Error:', error));
    // console.log(loginResult, "loginResult");
  };

  
  return (
    <form onSubmit={handleSubmit} style={formStyle}>

      <p style={loginError} id="errorElement"></p>
        <h3>LOG IN</h3>
      <div style={formGroupStyle}>
        <input
          type="text"
          id="email"
          value={email}
          onChange={handleEmailChange}
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
const loginError = {
  color:'red'
}
export default Login;
