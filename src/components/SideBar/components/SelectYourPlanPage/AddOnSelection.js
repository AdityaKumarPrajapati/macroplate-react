import React from "react";
import MealSelectionWrapper from "./MealSelectionWrapper";
import { AddonContentData } from "../../../../dataContentObjects/AddonContent";
import Counter from "../../../utilityComponents/Counter";

const AddOnSelection = ({ checkoutData, setCheckoutData }) => {
    const handleCountChange = (name, newCount) => {
        console.log('---newCount---', newCount, name);
        setCheckoutData(prev => ({
            ...prev,
            [name]: newCount
        }));
    };
    
    return (
        <div className="mealSelectionWrapper">
            <MealSelectionWrapper
                dataObj={AddonContentData}
                headetText='ADD ONS'
                inputComponent={<Counter onChange={handleCountChange} />}
                onChange={handleCountChange}
                checkedValues={[]}
                componentType='counter'
            />
        </div>
    );
}

export default AddOnSelection;