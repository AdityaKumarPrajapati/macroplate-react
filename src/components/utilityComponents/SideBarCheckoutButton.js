import React from "react";
import Button from 'react-bootstrap/Button';
import './css/SideBarCheckoutButton.css'

const SideBarCheckoutButton = ({ onCheckoutClick }) => {
    return (
        <div className="SideBarStep1CheckoutBtnContainer">
            <Button variant="dark" onClick={onCheckoutClick}>CHECKOUT</Button>
        </div>
    );
}

export default SideBarCheckoutButton;
