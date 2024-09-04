// src/components/LoginAndAccount.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSidebar } from './context/SidebarContext';

function LoginAndAccount() {
  const { toggleSidebar } = useSidebar();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/login" className="nav-links">LOG IN</Link>
          </li>
          <li>
            <button className='getStartedBtn' onClick={toggleSidebar}>GET STARTED</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default LoginAndAccount;
