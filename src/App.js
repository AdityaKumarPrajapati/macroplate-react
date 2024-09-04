// src/App.js

import React from 'react';
import './App.css'; // Import any required CSS
import Navbar from './components/Navbar'; // Import the Navbar component
import FixedComponent from './components/FixedComponent';
import HOWITWORKS from './components/HOWITWORKS';
import OurApproach from './components/OurApproach';
import Home from './components/Home'; // Import the Home component
// import About from './components/About'; // Import the About component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponents from './components/NavBarComponents';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <FixedComponent />
        <NavbarComponents />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HOWITWORKS />} />
            <Route path="/our-approach" element={<OurApproach />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
