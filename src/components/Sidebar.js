// src/components/Sidebar.js
import React, { useState } from 'react';
import './css/Sidebar.css';
import '../components/SideBar/css/SelectYourPlan.css';
import { useSidebar } from './context/SidebarContext';
import SideBarHeader from './SideBarHeader';
import SelectYourPlanPage from './SideBar/components/SelectYourPlanPage/SelectYourPlanPage';
import SideBarCheckoutButton from './utilityComponents/SideBarCheckoutButton';
import BackButtonSvg from './utilityComponents/BackButtonSvg';
import SidebarButton from './utilityComponents/SidebarButton';

const Sidebar = () => {
    const { isSidebarOpen } = useSidebar();

    const [currentPage, setCurrentPage] = useState(1);
    const [checkoutData, setCheckoutData] = useState({
        mealPerDay: null,
        programLength: null,
        breakfastSelection: null,
        dietary: [],
    });

    const [validationErrors, setValidationErrors] = useState({});

    const validateSelections = () => {
        const errors = {};
        if (!checkoutData.mealPerDay) errors.mealPerDay = 'Please select meals per day';
        if (!checkoutData.programLength) errors.programLength = 'Please select a program length';
        if (!checkoutData.breakfastSelection) errors.breakfastSelection = 'Please select a breakfast option';
        if (checkoutData.dietary.length === 0) errors.dietary = 'Please select at least one dietary preference';
        return errors;
    };

    const handleCheckoutClick = (nextPage) => {
        const errors = validateSelections();
        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
        } else {
            setValidationErrors({});
            setCurrentPage(nextPage); // Proceed to next page
        }
    };

    return (
        <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
            <SideBarHeader />
            {currentPage === 1 && (
                <div className='step1Wrapper'>
                    <div className='step-1'>
                        <SelectYourPlanPage
                            checkoutData={checkoutData}
                            setCheckoutData={setCheckoutData}
                            validationErrors={validationErrors}
                            setValidationErrors={setValidationErrors}
                        />
                    </div>
                    <SideBarCheckoutButton onCheckoutClick={() => handleCheckoutClick(2)} />
                </div>
            )}
            {currentPage === 2 && (
                <div className='step2Wrapper'>
                    <BackButtonSvg 
                        pageNumber={currentPage - 1}
                        setCurrentPage={setCurrentPage}
                    />
                    <div className=''>
                        <div className='step-2'>

                        </div>
                        <SidebarButton onCheckoutClick={() => handleCheckoutClick(3)} text='CONTINUE TO CHECKOUT' />
                    </div>
                </div>
            )}
            {currentPage === 3 && (
                <div className='step3Wrapper'>
                    <BackButtonSvg 
                        pageNumber={currentPage - 1}
                        setCurrentPage={setCurrentPage}
                    />
                    <div>
                        Hellooo
                        <SidebarButton onCheckoutClick={() => handleCheckoutClick(3)} text='PLACE ORDER' />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
