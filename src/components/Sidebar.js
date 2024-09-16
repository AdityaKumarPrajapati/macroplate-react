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
import BillingPlan from './SideBar/components/BillingPage/BillingPlan';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Load your Stripe public key
const stripePromise = loadStripe('pk_test_pndCOLy4iBu4IWLtmiIiPGF5');

const Sidebar = () => {
    const { isSidebarOpen } = useSidebar();
    const [currentPage, setCurrentPage] = useState(1);
    const [validationErrors, setValidationErrors] = useState({});

    // Function to get initial data from localStorage or set default values
    const getInitialData = () => {

        const savedData = localStorage.getItem('checkoutData');
        return savedData
            ? JSON.parse(savedData)
            : {
                vanityName: '',
                mealPerDay: "2",
                programLength: '5',
                breakfastSelection: null,
                dietary: [],
                allergies: [],
                allergyNotes: '',
                email: '',
                zipCode: '',
                firstName: '',
                lastName: '',
                phone: '',
                address: '',
                suite: '',
                city: '',
                state: '',
                deliveryNotes: '',
                firstDeliveryDate: '',
                billingAddress: '',
                billingSuite: '',
                billingCity: '',
                billingState: '',
                billingZipCode: ''
            };
    };

    const [checkoutData, setCheckoutData] = useState(getInitialData);

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
            if (!checkoutData.vanityName) errors.vanityName = 'Please Select Your Plan';
            if (!checkoutData.mealPerDay) errors.mealPerDay = 'Please select meals per day';
            if (!checkoutData.programLength) errors.programLength = 'Please select a program length';
            if (!checkoutData.breakfastSelection) errors.breakfastSelection = 'Please select a breakfast option';
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
        // } else if (currentPage === 3) {
        //     let cardNumber = document.getElementById('cardNumber').value
        //     let expiryMonth = document.getElementById('expiryMonth').value
        //     let expiryYear = document.getElementById('expiryYear').value
        //     let cvv = document.getElementById('cvv').value

        //     if (!cardNumber) errors.cardNumber = 'Please enter card number';
        //     if (!expiryMonth) errors.expiryMonth = 'Please enter expiry month';
        //     if (!expiryYear) errors.expiryYear = 'Please Enter expiry year';
        //     if (!cvv) errors.cvv = 'Please Enter cvv';

        //     // console.log(errors, "errors");
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
                    <SideBarCheckoutButton 
                        onCheckoutClick={() => handleCheckoutClick(2)} 
                        checkoutData={checkoutData}
                    />
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
                                currentPage={currentPage}
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
                    <Elements stripe={stripePromise}>
                        <BillingPlan 
                            checkoutData={checkoutData}
                            setCheckoutData={setCheckoutData}
                            validationErrors={validationErrors}
                            setValidationErrors={setValidationErrors}
                            currentPage={currentPage}
                        />
                    </Elements>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
