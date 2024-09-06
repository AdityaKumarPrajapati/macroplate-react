// src/components/SideBar/components/MealsPerDay.js
import React from "react";
import { MealPerDayContentData } from "../../../../dataContentObjects/MealPerDayContent";
import MealSelectionWrapper from "./MealSelectionWrapper";
import RadioButton from "../../../utilityComponents/RadioButton";

const MealsPerDay = ({ checkoutData, setCheckoutData, validationError, setValidationErrors }) => {

    const handleChange = (e) => {
        const selectedValue = e.target.value; // Capture the selected value
        setCheckoutData(prev => ({ ...prev, mealPerDay: selectedValue })); // Update the selected value
        setValidationErrors(prev => ({ ...prev, mealPerDay: null })); // Clear error if selected
    };

    return (
        <div className="mealSelectionWrapper">
            <MealSelectionWrapper
                dataObj={MealPerDayContentData}
                headetText='MEALS PER DAY'
                inputComponent={<RadioButton name="mealsPerDay" />}
                onChange={handleChange}
                checkedValues={checkoutData.mealPerDay}  // Pass the current selected value (not an array)
            />
            {validationError && <p className="error-text">{validationError}</p>}
        </div>
    );
}

export default MealsPerDay;
