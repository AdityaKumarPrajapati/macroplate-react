import React from "react";
import './css/SideBarHeader.css'
import { useSidebar } from "./context/SidebarContext";
import SidebarHeaderActiveState from "./utilityComponents/SidebarHeaderActiveState";

const SideBarHeader = () => {
    const { toggleSidebar } = useSidebar();

    return (
        <div className="sideBarHeaderWrapper">
            <div className="sideBarHeaderContainer">
                <div className="statusBar">
                    <SidebarHeaderActiveState />
                    <p className="marginZero statusBarHeadetText">SELECT A PLAN</p>
                </div>
                <p className="marginZero">_</p>
                <div className="statusBar">
                    <SidebarHeaderActiveState />
                    <p className="marginZero statusBarHeadetText">DELIVERY</p>
                </div>
                <p className="marginZero">_</p>
                <div className="statusBar">
                    <SidebarHeaderActiveState />
                    <p className="marginZero statusBarHeadetText">CHECKOUT</p>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none" onClick={toggleSidebar} class="toprightCloseIconCheckout">
                <path d="M1 12.3637L11.0499 1" stroke="#292D32" stroke-width="0.831563" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.0499 12.3637L1 1" stroke="#292D32" stroke-width="0.831563" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    )
}

export default SideBarHeader;