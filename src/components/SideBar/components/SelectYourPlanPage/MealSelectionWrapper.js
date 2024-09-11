// src/components/SideBar/components/MealSelectionWrapper.js
import React from "react";
import '../../css/MealSelectionWrapper.css';

const MealSelectionWrapper = ({ dataObj, headetText, inputComponent, onChange, checkedValues, componentType }) => {
    return (
        <div className="mealSelectionContentContainer">
            <div className={`mealSelectionContentText ${componentType === 'counter' ? 'addonSelectionContentText' : ''}`}>
                <p className="marginZero">{headetText}</p>
            </div>
            <div className="mealSelectionContentData">
                {dataObj.map((item) => (
                    <div className="radioBtnConatiner" key={item?.id}>
                        {React.cloneElement(inputComponent, {
                            id: item?.id,
                            value: item?.dataValue, // Pass dataValue as the value
                            onChange: onChange,
                            checked: Array.isArray(checkedValues)
                                ? checkedValues.includes(item?.dataValue) // For checkboxes
                                : checkedValues === item?.dataValue, // For radio buttons, compare to dataValue
                            count: componentType === 'counter' ? item.count : undefined,
                            inputName: componentType === 'counter' ? item.name : undefined,
                        })}
                        <div className="labelContainer">
                            <label
                                htmlFor={item?.id}
                                className={`mealSelectionLabel ${componentType === 'counter' ? 'addonLabel' : ''}`}
                            >
                                {item?.label}
                            </label>
                            { componentType === 'counter' && <label className="addonLabel">{item?.price}</label> }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MealSelectionWrapper;
