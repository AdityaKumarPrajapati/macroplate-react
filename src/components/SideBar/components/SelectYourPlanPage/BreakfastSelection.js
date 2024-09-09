// src/components/SideBar/components/BreakfastSelection.js
import React from "react";
import { BreakfastContentData } from "../../../../dataContentObjects/BreakfastContent";
import MealSelectionWrapper from "./MealSelectionWrapper";
import RadioButton from "../../../utilityComponents/RadioButton";

const BreakfastSelection = ({ checkoutData, setCheckoutData, validationError, setValidationErrors }) => {

    const handleChange = (e) => {
        const selectedValue = e.target.value;
        setCheckoutData(prev => ({ ...prev, breakfastSelection: selectedValue }));
        setValidationErrors(prev => ({ ...prev, breakfastSelection: null }));
    };

    return (
        <div className="mealSelectionWrapper">
            {validationError && <p className="error-text marginZero">{validationError}</p>}
            <MealSelectionWrapper
                dataObj={BreakfastContentData}
                headetText='WOULD YOU LIKE BREAKFAST AS ONE MEAL?'
                inputComponent={<RadioButton name="breakfastSelection" />}
                onChange={handleChange}
                checkedValues={checkoutData.breakfastSelection} // Single selected value
            />
        </div>
    );
}

export default BreakfastSelection;
