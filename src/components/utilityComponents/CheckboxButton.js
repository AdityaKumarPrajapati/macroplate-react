import React from "react";
import './css/CheckboxButton.css';
import Form from 'react-bootstrap/Form';

const CheckboxButton = ({ id, value, onChange, checked, label }) => {
    return (
        <div className="checkBoxContainer">
            <Form.Check
                type="checkbox"
                id={id}
                value={value}
                className="customCheckboxBtn"
                onChange={onChange}
                checked={checked}
            />
            {label && <Form.Check.Label className="formLabel">{label}</Form.Check.Label>}
        </div>
    );
}

export default CheckboxButton;
