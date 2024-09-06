import React from "react";
import RadioButton from "../../../utilityComponents/RadioButton";
import { ProgramLengthContentData } from "../../../../dataContentObjects/ProgramLengthContent";
import MealSelectionWrapper from "./MealSelectionWrapper";

const ProgramLength = () => {
    return (
        <div className="mealSelectionWrapper">
            <MealSelectionWrapper
                dataObj={ProgramLengthContentData}
                headetText='PROGRAM LENGTH'
                inputComponent={<RadioButton name="programLength" />}
            />
        </div>
    );
}

export default ProgramLength;