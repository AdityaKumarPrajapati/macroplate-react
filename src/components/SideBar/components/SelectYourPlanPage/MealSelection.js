// src/components/SideBar/components/MealSelection.js
import React from "react";
import MealsPerDay from "./MealsPerDay";
import ProgramLength from "./ProgramLength";
import BreakfastSelection from "./BreakfastSelection";
import DietaryPreferencesSelection from "./DietaryPreferencesSelection";
import AddOnSelection from "./AddOnSelection";

const MealSelection = ({ checkoutData, setCheckoutData, validationErrors, setValidationErrors }) => {
    return (
        <div className="mealDaySelectionContainer">
            <MealsPerDay
                checkoutData={checkoutData}
                setCheckoutData={setCheckoutData}
                validationError={validationErrors.mealsPerDay}
                setValidationErrors={setValidationErrors} // Pass setValidationErrors here
            />
            <hr />
            <ProgramLength
                checkoutData={checkoutData}
                setCheckoutData={setCheckoutData}
                validationError={validationErrors.programLength}
                setValidationErrors={setValidationErrors} // Pass setValidationErrors here
            />
            <hr />
            <BreakfastSelection
                checkoutData={checkoutData}
                setCheckoutData={setCheckoutData}
                validationError={validationErrors.breakfastSelection}
                setValidationErrors={setValidationErrors} // Pass setValidationErrors here
            />
            <hr />
            <DietaryPreferencesSelection
                checkoutData={checkoutData}
                setCheckoutData={setCheckoutData}
                validationError={validationErrors.dietaryPreferences}
                setValidationErrors={setValidationErrors} // Pass setValidationErrors here
            />
            <hr />
            <AddOnSelection
                checkoutData={checkoutData}
                setCheckoutData={setCheckoutData}
            />
        </div>
    );
}

export default MealSelection;
