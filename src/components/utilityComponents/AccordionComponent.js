import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import MealSelectionWrapper from "../SideBar/components/SelectYourPlanPage/MealSelectionWrapper";
import CheckboxButton from "./CheckboxButton";

const AccordionComponent = ({ data, checkoutData, onChange }) => {
    return (
        <Accordion defaultActiveKey={[]} alwaysOpen>
            {data && Object.keys(data).map((category, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>{category}</Accordion.Header>
                    <Accordion.Body>
                        <MealSelectionWrapper
                            dataObj={data[category]}
                            // headetText='INDIVIDUAL INGREDIENT EXCLUSIONS'
                            inputComponent={<CheckboxButton name="mealsPerDay" />}
                            onChange={onChange}
                        />
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
};

export default AccordionComponent;
