import React from "react";
import { SelectYourPlanContentData } from '../../../../dataContentObjects/SelectYourPlanContent';
import '../../css/SelectYourPlan.css'
import RadioButton from "../../../utilityComponents/RadioButton";

// Utility function to chunk array into groups of two
const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
};

const SelectYourPlan = ({ checkoutData, setCheckoutData, validationError, setValidationErrors }) => {
    const handleChange = (e) => {
        const selectedValue = e.target.value; // Capture the selected value
        setCheckoutData(prev => ({ ...prev, vanityName: selectedValue })); // Update the selected value
        setValidationErrors(prev => ({ ...prev, vanityName: null })); // Clear error if selected
    };
    // Assuming SelectYourPlanContentData is an array of plan objects
    const chunkedData = chunkArray(Object.entries(SelectYourPlanContentData), 2);

    return (
        <div className="selectPlanImageWrapper">
            {validationError && <p className="error-text">{validationError}</p>}
            {
                chunkedData.map((chunk, chunkIndex) => (
                    <div key={chunkIndex} className="selectYouPlanWrapper">
                        {chunk.map(([key, item], itemIndex) => (
                            <div key={itemIndex} className="planImageCardWrapper">
                                <div className={`checkoutCard ${checkoutData.vanityName === item?.dataValue ? 'selected' : checkoutData.vanityName === '' ? '' : 'notSelected'}`}>
                                    <figure className="marginZero selectPlanFigure">
                                        <img src={item?.imageSource} alt={item?.planName} className={`${checkoutData.vanityName === item?.dataValue ? 'selected' : checkoutData.vanityName === '' ? '' : 'notSelected'}`} />
                                        <div className="formCheck">
                                            <RadioButton
                                                name='vanity'
                                                id={item?.id}
                                                value={item?.dataValue}
                                                onChange={handleChange}
                                                checked={Array.isArray(checkoutData.vanityName)
                                                    ? checkoutData.vanityName.includes(item?.dataValue) // For checkboxes
                                                    : checkoutData.vanityName === item?.dataValue}
                                                label=''
                                            />
                                        </div>
                                    </figure>
                                    <div className="cardDetails">
                                        <p className="marginZero planName">{item?.planName}</p>
                                        <a href="#" className="seeDetails">see details</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))
            }
        </div>
    );
};

export default SelectYourPlan;
