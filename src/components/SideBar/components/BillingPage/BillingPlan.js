import React, { useRef } from 'react';
import CardDetails from './CardDetails';
import ReviewPage from './ReviewPage';
import '../../css/BillingPlan.css';
import DeliveryInfo from '../DeliveryInfo';
import SidebarButton from '../../../utilityComponents/SidebarButton';
import axios from 'axios';

const BillingPlan = ({ checkoutData, setCheckoutData, validationErrors, setValidationErrors, currentPage }) => {
    const cardDetailsRef = useRef();

    // Define the onSubmit function here
    const handleTokenSubmission = (token) => {
        // Perform any necessary actions with the token here (e.g., sending to backend)
        console.log('Received token:', token);
    };

    const handlePlaceOrder = () => {
        // console.log(checkoutData);
        if (cardDetailsRef.current) {
            cardDetailsRef.current.handleSubmit();
        }

        axios.post("http://localhost:8000/api/signup", checkoutData, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            console.log("RESPONSE", response);
        }).catch((error) => {
            if (error.response) {
                // Request made and server responded with a status code outside the 2xx range
                console.log("Server Response Error", error.response.data);
            } else if (error.request) {
                // Request was made but no response was received
                console.log("No Response Error", error.request);
            } else {
                // Something else happened
                console.log("General Error", error.message);
            }
        });
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
            <SidebarButton
                onCheckoutClick={handlePlaceOrder}
                text='PLACE ORDER'
                currentPage={currentPage}
            />
        </div>
    );
};

export default BillingPlan;
