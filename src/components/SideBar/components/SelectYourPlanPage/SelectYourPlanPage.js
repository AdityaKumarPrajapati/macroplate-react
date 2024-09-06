// src/components/SideBar/components/SelectYourPlanPage/SelectYourPlanPage.js
import React from "react";
import SelectYourPlan from "./SelectYourPlan";
import MealSelection from "./MealSelection";

const SelectYourPlanPage = ({ checkoutData, setCheckoutData, validationErrors, setValidationErrors }) => {
    return (
        <>
            <SelectYourPlan />
            <MealSelection
                checkoutData={checkoutData}
                setCheckoutData={setCheckoutData}
                validationErrors={validationErrors}
                setValidationErrors={setValidationErrors} // Pass setValidationErrors here
            />
        </>
    );
}

export default SelectYourPlanPage;
