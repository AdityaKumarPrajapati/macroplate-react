import React from "react";
import { SelectYourPlanContentData } from '../../../../dataContentObjects/SelectYourPlanContent';
import '../../css/SelectYourPlan.css'

// Utility function to chunk array into groups of two
const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
};

const SelectYourPlan = () => {
    // Assuming SelectYourPlanContentData is an array of plan objects
    const chunkedData = chunkArray(Object.entries(SelectYourPlanContentData), 2);

    return (
        <div className="selectPlanImageWrapper">
            {
                chunkedData.map((chunk, chunkIndex) => (
                    <div key={chunkIndex} className="selectYouPlanWrapper">
                        {chunk.map(([key, item], itemIndex) => (
                            <div key={itemIndex} className="planImageCardWrapper">
                                <div className="checkoutCard">
                                    <figure className="marginZero selectPlanFigure">
                                        <img src={item?.imageSource} alt={item?.planName} />
                                        <div className="formCheck">
                                            <input type="radio" />
                                            <span className="customCheckbox"></span>
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
