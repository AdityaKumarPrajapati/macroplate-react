// src/components/Navbar.js

import React from 'react';
import './css/Navbar.css'; // Import CSS for styling the Navbar
import Navbar from './Navbar';
import LoginAndAccount from './LoginAndAccount';

function NavbarComponents() {
    return (
        <div className='navBarComponents container'>
            <Navbar />
            <LoginAndAccount />
        </div>
    );
}

export default NavbarComponents;
