import React from "react";
import CardDetails from './CardDetails'
import ReviewPage from "./ReviewPage";
import '../../css/BillingPlan.css'
import DeliveryInfo from "../DeliveryInfo";


const BillingPlan = ({ checkoutData, setCheckoutData, validationErrors, setValidationErrors, currentPage }) => {

    return (
        <div className="billingPlanPageContainer">
            <ReviewPage 
                checkoutData={checkoutData}
            />
            <CardDetails></CardDetails>
            <DeliveryInfo
                checkoutData={checkoutData}
                setCheckoutData={setCheckoutData}
                validationErrors={validationErrors}
                setValidationErrors={setValidationErrors}
                currentPage={currentPage}
                headerText = 'BILLING ADDRESS'
            />
        </div>
    );
}

export default BillingPlan;