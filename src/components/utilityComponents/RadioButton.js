import React from "react";
import './css/RadioButton.css'
import Form from 'react-bootstrap/Form';

const RadioButton = ({ name, id }) => {
    return (
        <>
            <Form.Check 
                type="radio"
                name={name}
                id={id}
                className="customRadioBtn"
            />
        </>
    );
}

export default RadioButton;