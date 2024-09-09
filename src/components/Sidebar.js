// src/components/Sidebar.js
import React, { useEffect, useState } from 'react';
import './css/Sidebar.css';
import '../components/SideBar/css/SelectYourPlan.css';
import { useSidebar } from './context/SidebarContext';
import SideBarHeader from './SideBarHeader';
import SelectYourPlanPage from './SideBar/components/SelectYourPlanPage/SelectYourPlanPage';
import SideBarCheckoutButton from './utilityComponents/SideBarCheckoutButton';
import BackButtonSvg from './utilityComponents/BackButtonSvg';
import SidebarButton from './utilityComponents/SidebarButton';
import ShippingPlan from './SideBar/components/ShippingPage/ShippingPlan';

const Sidebar = () => {
    const { isSidebarOpen } = useSidebar();

    // Function to get initial data from localStorage or set default values
    const getInitialData = () => {
        const savedData = localStorage.getItem('checkoutData');
        return savedData
            ? JSON.parse(savedData)
            : {
                mealPerDay: "2",
                programLength: '5',
                breakfastSelection: null,
                dietary: [],
                email: '',
                zipCode: '',
                firstName: '',
                lastName: '',
                phone: '',
                address: '',
                suite: '',
                city: '',
                state: '',
                deliveryNotes: ''
            };
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [checkoutData, setCheckoutData] = useState(getInitialData);

    const [validationErrors, setValidationErrors] = useState({});

    useEffect(() => {
        // Save checkoutData to localStorage whenever it changes
        localStorage.setItem('checkoutData', JSON.stringify(checkoutData));
    }, [checkoutData]);

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateSelections = () => {
        const errors = {};
        if (currentPage === 1) {
            if (!checkoutData.mealPerDay) errors.mealPerDay = 'Please select meals per day';
            if (!checkoutData.programLength) errors.programLength = 'Please select a program length';
            if (!checkoutData.breakfastSelection) errors.breakfastSelection = 'Please select a breakfast option';
            if (checkoutData.dietary.length === 0) errors.dietary = 'Please select at least one dietary preference';
            if (!checkoutData.email) {
                errors.email = 'Please enter your email address';
            } else if (!isValidEmail(checkoutData.email)) {
                errors.email = 'Please enter a valid email address'; // Email format validation
            }
            if (!checkoutData.zipCode) errors.zipCode = 'Please enter your ZIP code';
        } else if (currentPage === 2) {
            if (!checkoutData.firstName) errors.firstName = 'Please enter your First Name';
            if (!checkoutData.lastName) errors.lastName = 'Please enter your Last Name';
            if (!checkoutData.phone) errors.phone = 'Please Enter Your Phone Number';
            if (!checkoutData.address) errors.address = 'Please Enter Your Address';
            if (!checkoutData.city) errors.city = 'Please Enter Your City';
            if (!checkoutData.state) errors.state = 'Please Enter Your State';
            if (!checkoutData.zipCode) errors.zipCode = 'Please enter your ZIP code';
        }

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
            <SideBarHeader
                currentPage={currentPage}
            />
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
                            <ShippingPlan
                                checkoutData={checkoutData}
                                setCheckoutData={setCheckoutData}
                                validationErrors={validationErrors}
                                setValidationErrors={setValidationErrors}
                            />
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
