import React, { useEffect } from "react";
import { DietaryPreferencesContentData } from "../../../../dataContentObjects/DietaryPreferencesContent";
import MealSelectionWrapper from "./MealSelectionWrapper";
import CheckboxButton from "../../../utilityComponents/CheckboxButton";
import { dietaryPreferenceRules } from "../../../../rules/dietaryPreferenceRules";

const DietaryPreferencesSelection = ({ checkoutData, setCheckoutData, validationError, setValidationErrors }) => {

    const handleChange = (e) => {
        const selectedValue = e.target.value;
        setCheckoutData(prev => {
            const isSelected = prev.dietary.includes(selectedValue);
            const newPreferences = isSelected
                ? prev.dietary.filter(item => item !== selectedValue)
                : [...prev.dietary, selectedValue];
            const updatedAllergies = updateAllergies(newPreferences);

            return { 
                ...prev, 
                dietary: newPreferences, 
                allergies: updatedAllergies,
            };
        });
        setValidationErrors(prev => ({ ...prev, dietary: null }));
    };

    const updateAllergies = (preferences) => {
        let allergies = [];

        preferences.forEach(pref => {
            if (dietaryPreferenceRules[pref]) {
                allergies = [...allergies, ...dietaryPreferenceRules[pref]];
            }
        });

        return allergies;
    };

    useEffect(() => {
        const initialAllergies = updateAllergies(checkoutData.dietary);
        setCheckoutData(prev => ({ 
            ...prev, 
            allergies: initialAllergies 
        }));
    }, [checkoutData.dietary, setCheckoutData]);

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
