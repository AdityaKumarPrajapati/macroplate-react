import React from "react";
import './css/CheckboxButton.css'
import Form from 'react-bootstrap/Form';

const CheckboxButton = ({ id }) => {
    return (
        <>
            <Form.Check 
                type="checkbox"
                id={id}
                className="customCheckboxBtn"
            />
        </>
    );
}

export default CheckboxButton;