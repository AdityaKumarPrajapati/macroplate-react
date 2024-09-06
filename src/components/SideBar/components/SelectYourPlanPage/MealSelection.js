import React from "react";
import MealsPerDay from "./MealsPerDay";
import ProgramLength from "./ProgramLength";
import BreakfastSelection from "./BreakfastSelection";
import DietaryPreferencesSelection from "./DietaryPreferencesSelection";

const MealSelection = () => {
    return (
       <div className="mealDay">
            <MealsPerDay />
            <hr />
            <ProgramLength />
            <hr />
            <BreakfastSelection />
            <hr />
            <DietaryPreferencesSelection />
       </div>
    );
}

export default MealSelection;