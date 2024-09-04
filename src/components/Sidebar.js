// src/components/Sidebar.js
import React from 'react';
import './css/Sidebar.css';
import { useSidebar } from './context/SidebarContext';
import SideBarHeader from './SideBarHeader';

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
       <SideBarHeader />
    </div>
  );
};

export default Sidebar;
