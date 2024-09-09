import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './css/InputField.css'

const InputField = ({ placeHolder, value, name, id, type, wrapperClass, onChange, validationError }) => {
    return (
        <div className={wrapperClass}>
            <InputGroup className="">
                <Form.Control
                    placeholder={placeHolder}
                    aria-label=""
                    aria-describedby=""
                    value={value}
                    onChange={onChange}
                    name={name}
                    id={id}
                    type={type}
                />
                <Form.Label htmlFor="basic-url">{placeHolder}</Form.Label>
            </InputGroup>
            {validationError && <p className="error-text">{validationError}</p>}
        </div>
    );
}

export default InputField;