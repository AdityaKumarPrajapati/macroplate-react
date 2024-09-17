import React from "react";
import '../../css/MealSelectionWrapper.css';

const MealSelectionWrapper = ({ dataObj, headetText, inputComponent, onChange, checkedValues, componentType, checkoutData }) => {
    return (
        <div className="mealSelectionContentContainer">
            {headetText && (
                <div className={`mealSelectionContentText ${componentType === 'counter' ? 'addonSelectionContentText' : ''}`}>
                    <p className="marginZero">{headetText}</p>
                </div>
            )}
            <div className="mealSelectionContentData">
                {componentType === 'accordion' && (
                    <p className="marginZero dietaryExclisionsContentDesc">
                        Macro Plate prides itself on our extremely customizable meals. Check any foods you don't want included in your meal.
                    </p>
                )}
                {dataObj.map((item) => (
                    <div className={`radioBtnContainer ${componentType === 'accordion' ? 'radioBtnAccordionContainer' : ''}`} key={item?.id}>
                        {React.cloneElement(inputComponent, {
                            key: `input-${item?.id}`, // Add unique key here for inputComponent
                            id: item?.id,
                            value: componentType === 'counter' ? (checkoutData[item?.name] || 0) : item?.dataValue, // Pass dataValue as the value
                            onChange: onChange,
                            checked: componentType !== 'accordion' && Array.isArray(checkedValues)
                                ? checkedValues.includes(item?.dataValue) // For checkboxes
                                : checkedValues === item?.dataValue, // For radio buttons, compare to dataValue
                            count: componentType === 'counter' ? item.count : undefined,
                            inputName: componentType === 'counter' ? item?.name : undefined,
                            data: componentType === 'accordion' ? item : undefined,
                            checkoutData: componentType === 'accordion' ? checkoutData : undefined,
                        })} 
                        <div className="labelContainer">
                            <label
                                htmlFor={item?.id}
                                className={`mealSelectionLabel ${componentType === 'counter' ? 'addonLabel' : ''}`}
                            >
                                {item?.label}
                            </label>
                            {componentType === 'counter' && <label className="addonLabel">{item?.price}</label>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MealSelectionWrapper;
