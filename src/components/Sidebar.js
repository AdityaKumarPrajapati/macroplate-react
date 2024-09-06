// src/components/Sidebar.js
import React from 'react';
import './css/Sidebar.css';
import '../components/SideBar/css/SelectYourPlan.css'
import { useSidebar } from './context/SidebarContext';
import SideBarHeader from './SideBarHeader';
import SelectYourPlanPage from './SideBar/components/SelectYourPlanPage/SelectYourPlanPage';

const Sidebar = () => {
    const { isSidebarOpen, toggleSidebar } = useSidebar();

    return (
        <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
            <SideBarHeader />
            <div className='step1Wrapper'>
                <div className='step-1'>
                    <SelectYourPlanPage />
                </div>
                
            </div>
        </div>
    );
};

export default Sidebar;
