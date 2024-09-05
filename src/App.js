// src/App.js
import React from 'react';
import './App.css';
import '../src/components/css/Global.css'
import NavBarComponents from './components/NavBarComponents';
import FixedComponent from './components/FixedComponent';
import HOWITWORKS from './components/HOWITWORKS';
import OurApproach from './components/OurApproach';
import Home from './components/Home';
import Login from './components/Login';
import CustomerDashboard from './components/CustomerDashboard';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SidebarProvider } from '../src/components/context/SidebarContext';

function App() {
  return (
    <Router>
      <SidebarProvider>
        <div className="App">
          <FixedComponent />
          <NavBarComponents />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/how-it-works" element={<HOWITWORKS />} />
              <Route path="/our-approach" element={<OurApproach />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<CustomerDashboard />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </SidebarProvider>
    </Router>
  );
}

export default App;
