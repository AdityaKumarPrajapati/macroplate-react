// src/components/utilityComponents/RadioButton.js
import React from "react";
import './css/RadioButton.css';
import Form from 'react-bootstrap/Form';

const RadioButton = ({ name, id, value, onChange, checked }) => {
    return (
        <Form.Check
            type="radio"
            name={name}
            id={id}
            value={value} // Ensure the value is set for each radio button
            className="customRadioBtn"
            onChange={onChange}
            checked={checked} // The checked state should be based on the selected value
        />
    );
}

export default RadioButton;
