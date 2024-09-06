import React from "react";
import { MealPerDayContentData } from "../../../../dataContentObjects/MealPerDayContent"; 
import MealSelectionWrapper from "./MealSelectionWrapper";
import RadioButton from "../../../utilityComponents/RadioButton";

const MealsPerDay = () => {
    return (
        <div className="mealSelectionWrapper">
            <MealSelectionWrapper 
                dataObj={MealPerDayContentData}
                headetText='MEALS PER DAY'
                inputComponent={<RadioButton name="mealsPerDay" />}
            />
        </div>
    );
}

export default MealsPerDay;