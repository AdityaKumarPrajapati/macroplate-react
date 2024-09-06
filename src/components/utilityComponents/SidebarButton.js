import React from "react";
import Button from 'react-bootstrap/Button';
import './css/SidebarButton.css'

const SidebarButton = ({ onCheckoutClick, text }) => {
    return (
        <div className="sideBarContinueBtnContainer">
            <Button variant="dark" onClick={onCheckoutClick}>{text}</Button>
        </div>
    );
}

export default SidebarButton;