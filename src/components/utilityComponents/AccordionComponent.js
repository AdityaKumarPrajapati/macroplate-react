import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import MealSelectionWrapper from "../SideBar/components/SelectYourPlanPage/MealSelectionWrapper";
import CheckboxButton from "./CheckboxButton";

const AccordionComponent = ({ data, checked, checkoutData, onChange }) => {
    return (
        <Accordion defaultActiveKey={[]} alwaysOpen>
            {data && Object.keys(data).map((category, index) => {
                // Count the number of selected values for the current category
                const selectedCount = checkoutData.allergies.filter(item => 
                    data[category].some(option => option.dataValue === item)
                ).length;

                return (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>
                            {category} {selectedCount !== 0 && <span className="accordion-header-count">{selectedCount}</span>}
                        </Accordion.Header>
                        <Accordion.Body>
                            <MealSelectionWrapper
                                dataObj={data[category]}
                                inputComponent={<CheckboxButton />}
                                onChange={onChange}
                                checkedValues={checkoutData.allergies}
                                checkoutData={checkoutData}
                            />
                        </Accordion.Body>
                    </Accordion.Item>
                );
            })}
        </Accordion>
    );
};

export default AccordionComponent;
