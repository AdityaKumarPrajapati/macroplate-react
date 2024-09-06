// src/components/SideBar/components/DietaryPreferencesSelection.js
import React from "react";
import { DietaryPreferencesContentData } from "../../../../dataContentObjects/DietaryPreferencesContent";
import MealSelectionWrapper from "./MealSelectionWrapper";
import CheckboxButton from "../../../utilityComponents/CheckboxButton";

const DietaryPreferencesSelection = ({ checkoutData, setCheckoutData, validationError, setValidationErrors }) => {

    const handleChange = (e) => {
        const selectedValue = e.target.value;
        setCheckoutData(prev => {
            const isSelected = prev.dietary.includes(selectedValue);
            const newPreferences = isSelected
                ? prev.dietary.filter(item => item !== selectedValue)
                : [...prev.dietary, selectedValue];
            return { ...prev, dietary: newPreferences };
        });
        setValidationErrors(prev => ({ ...prev, dietary: null }));
    };

    return (
        <div className="mealSelectionWrapper">
            <MealSelectionWrapper
                dataObj={DietaryPreferencesContentData}
                headetText='PRE-SET DIETARY PREFERENCES'
                inputComponent={<CheckboxButton />}
                onChange={handleChange}
                checkedValues={checkoutData.dietary} // Array of selected values
            />
            {validationError && <p className="error-text">{validationError}</p>}
        </div>
    );
}

export default DietaryPreferencesSelection;
