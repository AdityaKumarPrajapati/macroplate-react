import React from "react";
import '../../css/MealSelectionWrapper.css'

const MealSelectionWrapper = ({ dataObj, headetText, inputComponent }) => {
    return (
        <div className="mealSelectionContentContainer">
            <div className="mealSelectionContentText">
                <p className="marginZero">{headetText}</p>
            </div>
            <div className="mealSelectionContentData">
                {
                    dataObj.map((item) => (
                        <div className="radioBtnConatiner">
                            {React.cloneElement(inputComponent, { id: item?.id })}
                            <label 
                                for={item?.id}
                                className="mealSelectionLabel"
                            >
                                {item?.label}
                            </label>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default MealSelectionWrapper;