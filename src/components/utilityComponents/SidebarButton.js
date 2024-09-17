import React from "react";
import Button from 'react-bootstrap/Button';
import './css/SidebarButton.css'
import { Link } from "react-router-dom";

const SidebarButton = ({ onCheckoutClick, text, currentPage }) => {
    return (
        <div className="sideBarContinueBtnContainer">
            <Button variant="dark" onClick={onCheckoutClick}>{text}</Button>
            {
                currentPage && currentPage === 3 &&
                <p className="marginZero tNcCondition">By clicking Place Order you agree to the <Link to='#' className="termsLink">Terms & Conditions.</Link></p>
            }
        </div>
    );
}

export default SidebarButton;