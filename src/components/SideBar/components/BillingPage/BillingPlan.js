import React, { useRef } from 'react';
import CardDetails from './CardDetails';
import ReviewPage from './ReviewPage';
import '../../css/BillingPlan.css';
import DeliveryInfo from '../DeliveryInfo';
import SidebarButton from '../../../utilityComponents/SidebarButton';

const BillingPlan = ({ checkoutData, setCheckoutData, validationErrors, setValidationErrors, currentPage }) => {
    const cardDetailsRef = useRef();

    // Define the onSubmit function here
    const handleTokenSubmission = (token) => {
        // Perform any necessary actions with the token here (e.g., sending to backend)
        console.log('Received token:', token);
    };

    const handlePlaceOrder = () => {
        if (cardDetailsRef.current) {
            cardDetailsRef.current.handleSubmit();
        }
    };

    return (
        <div className="billingPlanPageContainer">
            <ReviewPage checkoutData={checkoutData} />
            {/* Pass handleTokenSubmission as onSubmit */}
            <CardDetails ref={cardDetailsRef} onSubmit={handleTokenSubmission} />
            <DeliveryInfo
                checkoutData={checkoutData}
                setCheckoutData={setCheckoutData}
                validationErrors={validationErrors}
                setValidationErrors={setValidationErrors}
                currentPage={currentPage}
                headerText='BILLING ADDRESS'
            />
            <SidebarButton onCheckoutClick={handlePlaceOrder} text='PLACE ORDER' />
        </div>
    );
};

export default BillingPlan;
