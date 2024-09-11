import React from "react";
import { IngrediantExclusionsContentData } from "../../../../dataContentObjects/IngrediantExclusionsContent";
import AccordionComponent from "../../../utilityComponents/AccordionComponent";
import MealSelectionWrapper from "./MealSelectionWrapper";
import '../../css/DietaryExclusions.css'

const DietaryExclusions = ({ checkoutData, setCheckoutData }) => {
    const handleChange = (e) => {
        console.log('----e', e);
    }
    return (
        <div className="mealSelectionWrapper dietaryExclusionsWrapper">
            <MealSelectionWrapper
                dataObj={IngrediantExclusionsContentData}
                headetText='INDIVIDUAL INGREDIENT EXCLUSIONS'
                inputComponent={<AccordionComponent name="mealsPerDay" />}
                onChange={handleChange}
                checkedValues={checkoutData.abc}
                componentType='accordion'
            />
        </div>
    );
}

export default DietaryExclusions;