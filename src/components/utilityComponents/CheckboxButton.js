import React from "react";
import './css/CheckboxButton.css';
import Form from 'react-bootstrap/Form';

const CheckboxButton = ({ id, value, onChange, checked, label }) => {
    return (
        <Form.Check
            type="checkbox"
            id={id}
            value={value}
            className="customCheckboxBtn"
            onChange={onChange}
            checked={checked}
        />
    );
}

export default CheckboxButton;
