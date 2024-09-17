import React from "react";
import MealSelectionWrapper from "./MealSelectionWrapper";
import { AddonContentData } from "../../../../dataContentObjects/AddonContent";
import Counter from "../../../utilityComponents/Counter";

const AddOnSelection = ({ checkoutData, setCheckoutData }) => {
    const handleCountChange = (name, newCount) => {
        setCheckoutData(prev => ({
            ...prev,
            [name]: newCount
        }));
    };

    return (
        <div className="mealSelectionWrapper">
            <MealSelectionWrapper
                dataObj={AddonContentData}
                headetText="ADD ONS"
                // Pass Counter directly as the component and handle value passing
                inputComponent={
                    <Counter 
                        onChange={handleCountChange} 
                    />
                }
                onChange={handleCountChange}
                checkedValues={[]}
                componentType="counter"
                checkoutData={checkoutData}  // Make sure to pass checkoutData here
            />
        </div>
    );
}

export default AddOnSelection;
