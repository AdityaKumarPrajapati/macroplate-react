import React from "react";
import MealSelectionWrapper from "./MealSelectionWrapper";
import { BreakfastContentData } from "../../../../dataContentObjects/BreakfastContent";
import RadioButton from "../../../utilityComponents/RadioButton";

const BreakfastSelection = () => {
    return (
        <div className="mealSelectionWrapper">
            <MealSelectionWrapper
                dataObj={BreakfastContentData}
                headetText='WOULD YOU LIKE BREAKFAST AS ONE MEAL?'
                inputComponent={<RadioButton name="breakfast" />}
            />
        </div>
    );
}

export default BreakfastSelection;