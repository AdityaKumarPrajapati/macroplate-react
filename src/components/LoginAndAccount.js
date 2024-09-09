import React from 'react';
import { Link } from 'react-router-dom';
import { useSidebar } from './context/SidebarContext';
import { useAuth } from './context/AuthContext'; // Import AuthContext

function LoginAndAccount() {
  const { toggleSidebar } = useSidebar();
  const { isLoggedIn, logout } = useAuth(); // Get state and logout function

  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-menu">
          {isLoggedIn ? (
            <>
              <li className="nav-item">
                <a className="nav-links" onClick={logout}>LOG OUT</a>
              </li>
              <li className="nav-item">
                <Link to="/dashboard" className="getStartedBtn">Account</Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/login" className="nav-links">LOG IN</Link>
              </li>
              <li className="nav-item">
                <button className="getStartedBtn" onClick={toggleSidebar}>GET STARTED</button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default LoginAndAccount;
