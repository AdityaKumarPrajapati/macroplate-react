import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './css/DropdownComponent.css'

const DropdownComponent = () => {
    const CustomArrow = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clip-path="url(#clip0_5330_1122)">
                <path d="M7.41 8.58984L12 13.1698L16.59 8.58984L18 9.99984L12 15.9998L6 9.99984L7.41 8.58984Z" fill="#020202" />
            </g>
            <defs>
                <clipPath id="clip0_5330_1122">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
    return (
        <div className="dropDownContainer">
            <DropdownButton
                variant="outline-secondary"
                title={<span className="dropdownArrow">Dropdown <CustomArrow /></span>}
                id="input-group-dropdown-1"
            >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </DropdownButton>
        </div>
    );
}

export default DropdownComponent;