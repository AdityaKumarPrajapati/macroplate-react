// src/components/SideBar/components/ProgramLength.js
import React from "react";
import { ProgramLengthContentData } from "../../../../dataContentObjects/ProgramLengthContent";
import MealSelectionWrapper from "./MealSelectionWrapper";
import RadioButton from "../../../utilityComponents/RadioButton";

const ProgramLength = ({ checkoutData, setCheckoutData, validationError, setValidationErrors }) => {

    const handleChange = (e) => {
        const selectedValue = e.target.value;
        setCheckoutData(prev => ({ ...prev, programLength: selectedValue }));
        setValidationErrors(prev => ({ ...prev, programLength: null }));
    };

    return (
        <div className="mealSelectionWrapper">
            <MealSelectionWrapper
                dataObj={ProgramLengthContentData}
                headetText='PROGRAM LENGTH'
                inputComponent={<RadioButton name="programLength" />}
                onChange={handleChange}
                checkedValues={checkoutData.programLength}  // Single selected value (dataValue)
            />
            {validationError && <p className="error-text">{validationError}</p>}
        </div>
    );
};

export default ProgramLength;
