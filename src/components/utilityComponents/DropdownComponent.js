import React, { useEffect, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { getNextMondays, formatDate, formatDateWithYear } from "../../helperComponents/sidebarFirstDeliverDates";
import './css/DropdownComponent.css'

const DropdownComponent = ({ onSelect }) => {
    const [mondays, setMondays] = useState([]);
    const [selectedDate, setSelectedDate] = useState("");

    useEffect(() => {
        const fetchedMondays = getNextMondays();
        setMondays(fetchedMondays);
        // Set the default selected date to the first Monday
        if (fetchedMondays.length > 0 && selectedDate === '') {
            const firstMonday = formatDate(fetchedMondays[0]);
            setSelectedDate(firstMonday);
        }
    }, [onSelect]);

    const handleSelectDate = (monday) => {
        const formattedDate = formatDate(monday);
        setSelectedDate(formattedDate);
        onSelect(formatDateWithYear(monday)); // Pass selected date to parent
    };

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
                title={<span className="dropdownArrow">{selectedDate} <CustomArrow /></span>}
                id="input-group-dropdown-1"
            >
                {mondays.map((monday, index) => (
                    <Dropdown.Item
                        key={index}
                        value={formatDateWithYear(monday)}
                        onClick={() => handleSelectDate(monday)}
                    // onSelect={onSelect}
                    >
                        {formatDate(monday)}
                    </Dropdown.Item>
                ))}
            </DropdownButton>
        </div>
    );
}

export default DropdownComponent;