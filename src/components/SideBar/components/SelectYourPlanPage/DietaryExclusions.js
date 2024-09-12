import React from "react";
import { IngrediantExclusionsContentData } from "../../../../dataContentObjects/IngrediantExclusionsContent";
import AccordionComponent from "../../../utilityComponents/AccordionComponent";
import MealSelectionWrapper from "./MealSelectionWrapper";
import '../../css/DietaryExclusions.css';
import InputField from "../../../utilityComponents/InputField";

const DietaryExclusions = ({ checkoutData, setCheckoutData }) => {
    const valueToLabelMap = IngrediantExclusionsContentData.reduce((acc, category) => {
        Object.values(category).flat().forEach(item => {
            acc[item.dataValue] = item.label;
        });
        return acc;
    }, {});

    const handleChange = (e) => {
        const selectedValue = e.target.value;
        setCheckoutData(prev => {
            const isSelected = prev.allergies.includes(selectedValue);
            const newPreferences = isSelected
                ? prev.allergies.filter(item => item !== selectedValue)
                : [...prev.allergies, selectedValue];
            return { ...prev, allergies: newPreferences };
        });
    };

    const handleAllergyNotesChange = (e) => {
        const allergyNotes = e.target.value;
        setCheckoutData(prev => ({ ...prev, allergyNotes }));
    }

    // Map selected dataValues to labels
    const selectedLabels = checkoutData.allergies.map(value => valueToLabelMap[value] || value);

    return (
        <div className="mealSelectionWrapper dietaryExclusionsWrapper">
            <MealSelectionWrapper
                dataObj={IngrediantExclusionsContentData}
                headetText='INDIVIDUAL INGREDIENT EXCLUSIONS'
                inputComponent={<AccordionComponent />}
                onChange={handleChange}
                componentType='accordion'
                checkoutData={checkoutData}
            />
            <InputField
                placeHolder='Meal Preferences'
                value={checkoutData.allergyNotes}
                onChange={handleAllergyNotesChange}
                wrapperClass='mealPreferenceTextareaWrapper'
                id='food_preferences'
                type='textarea'
            />
            <span className="selectedAllergyLabels">
                {selectedLabels.join(', ')}
            </span>
        </div>
    );
}

export default DietaryExclusions;
