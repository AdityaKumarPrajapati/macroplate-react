// src/components/Home.js

import React, { useEffect, useState } from 'react';

function CustomerDashboard() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div>
      {console.log('----user---', user)}
      <h1>Dashboard</h1>
      {user ? (
        <div>
          <h2>Welcome, {user.first_name + " " + user.last_name}!</h2>
          <p>Name: {user.first_name + " " + user.last_name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CustomerDashboard;
