import React from "react";
import CheckboxButton from "../../../utilityComponents/CheckboxButton";
import { DietaryPreferencesContentData } from "../../../../dataContentObjects/DietaryPreferencesContent";
import MealSelectionWrapper from "./MealSelectionWrapper";

const DietaryPreferencesSelection = () => {
    return (
        <div className="mealSelectionWrapper">
            <MealSelectionWrapper
                dataObj={DietaryPreferencesContentData}
                headetText='PRE-SET DIETARY PREFERENCES'
                inputComponent={<CheckboxButton />}
            />
        </div>
    );
}

export default DietaryPreferencesSelection;