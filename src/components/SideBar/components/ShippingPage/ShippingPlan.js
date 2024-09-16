import React from "react";
import PersonalInfo from "./PersonalInfo";
import '../../css/ShippingPlan.css'
import DeliveryInfo from "../DeliveryInfo";

const ShippingPlan = ({ checkoutData, setCheckoutData, validationErrors, setValidationErrors, currentPage }) => {
    return (
        <>
            <PersonalInfo
                checkoutData={checkoutData}
                setCheckoutData={setCheckoutData}
                validationErrors={validationErrors}
                setValidationErrors={setValidationErrors}
            />

            <DeliveryInfo
                checkoutData={checkoutData}
                setCheckoutData={setCheckoutData}
                validationErrors={validationErrors}
                setValidationErrors={setValidationErrors}
                currentPage={currentPage}
                headerText = 'DELIVERY INFO'
            />

        </>
    );
}

export default ShippingPlan;