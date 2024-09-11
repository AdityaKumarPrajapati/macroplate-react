// src/components/SideBar/components/SelectYourPlanPage/SelectYourPlanPage.js
import React from "react";
import SelectYourPlan from "./SelectYourPlan";
import MealSelection from "./MealSelection";
import InputField from "../../../utilityComponents/InputField";

const SelectYourPlanPage = ({ checkoutData, setCheckoutData, validationErrors, setValidationErrors }) => {
    const handleEmailChange = (e) => {
        const email = e.target.value;
        setCheckoutData((prev) => ({ ...prev, email }));
        setValidationErrors((prev) => ({ ...prev, email: null })); // Clear error on change
    };

    const handleZipCodeChange = (e) => {
        const zipCode = e.target.value;
        setCheckoutData((prev) => ({ ...prev, zipCode }));
        setValidationErrors((prev) => ({ ...prev, zipCode: null })); // Clear error on change
    };
    return (
        <>
            <SelectYourPlan 
                checkoutData={checkoutData}
                setCheckoutData={setCheckoutData}
                validationError={validationErrors.vanityName}
                setValidationErrors={setValidationErrors}
            />
            <div className="mealDay">
                <MealSelection
                    checkoutData={checkoutData}
                    setCheckoutData={setCheckoutData}
                    validationErrors={validationErrors}
                    setValidationErrors={setValidationErrors} // Pass setValidationErrors here
                />
                <hr />
                <InputField
                    placeHolder='Email Address'
                    value={checkoutData.email || ''}
                    onChange={handleEmailChange}
                    validationError={validationErrors.email}
                    wrapperClass='selectEmailWrapper'
                    name='email'
                    id='email_field'
                    type='text'
                />
                <InputField
                    placeHolder='ZIP Code'
                    value={checkoutData.zipCode}
                    onChange={handleZipCodeChange}
                    validationError={validationErrors.zipCode}
                    wrapperClass='selectEmailWrapper'
                    name='zipCode'
                    id='email_field'
                    type='text'
                />
            </div>
        </>
    );
}

export default SelectYourPlanPage;
