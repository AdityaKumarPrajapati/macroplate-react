import React from "react";
import Button from 'react-bootstrap/Button';
import { getTotalAmount } from "../../helperComponents/planAmountCalucation";
import './css/SideBarCheckoutButton.css';

const SideBarCheckoutButton = ({ onCheckoutClick, checkoutData }) => {
    // Compute the total amount once to avoid multiple function calls
    const totalAmount = getTotalAmount({ checkoutData });

    return (
        <div className="SideBarStep1CheckoutBtnContainer">
            <Button variant="dark" onClick={onCheckoutClick}>
                CHECKOUT
                {/* Only show the total amount if it's greater than 0 */}
                {parseFloat(totalAmount) !== 0.00 && (
                    <span className="totalPrice"> | {totalAmount}</span>
                )}
            </Button>
        </div>
    );
}

export default SideBarCheckoutButton;
