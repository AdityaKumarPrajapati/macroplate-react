// src/components/Home.js
import React from 'react';
import './css/Home.css';
import HomePage from './HomePage';
import Sidebar from './Sidebar';
import { useSidebar } from './context/SidebarContext';

const Home = () => {
  const { isSidebarOpen, closeSidebar } = useSidebar();

  return (
    <div>
      {isSidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}
      <HomePage />
      {isSidebarOpen && <Sidebar />}
    </div>
  );
}

export default Home;
