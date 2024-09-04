// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './css/Navbar.css'; // Import CSS for styling the Navbar

function LoginAndAccount() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/login" className="nav-links">LOG IN</Link>
                    </li>
                    <li>
                        <button className='getStartedBtn'>Get Started</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default LoginAndAccount;
