import React from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import './css/TextAreaField.css'

const TextAreaField = ({ wrapperClass, value, name, id, onChange, placeHolder }) => {
    return (
        <div className='textAreaInputContainer'>
            <InputGroup className="">
                <Form.Control
                    as="textarea"
                    aria-label="With textarea"
                    value={value}
                    onChange={onChange}
                    name={name}
                    id={id}
                />
                <Form.Label htmlFor="basic-url">{placeHolder}</Form.Label>
            </InputGroup>
        </div>
    )
}

export default TextAreaField;