import React from "react";
import './css/SideBarHeader.css'
import { useSidebar } from "./context/SidebarContext";

const SideBarHeader = () => {
    const { toggleSidebar } = useSidebar();

    return (
        <div className="sideBarHeaderWrapper">
            <div className="sideBarHeaderContainer">
                <div className="statusBar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                        <path d="M14.7057 25.6667C21.1224 25.6667 26.3724 20.4167 26.3724 14C26.3724 7.58337 21.1224 2.33337 14.7057 2.33337C8.28906 2.33337 3.03906 7.58337 3.03906 14C3.03906 20.4167 8.28906 25.6667 14.7057 25.6667Z" fill="white" stroke="#09AB66" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                        <circle cx="14.7057" cy="14" r="5" fill="#09AB66" />
                    </svg>
                    <p className="marginZero statusBarHeadetText">SELECT A PLAN</p>
                </div>
                <p className="marginZero">_</p>
                <div className="statusBar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                        <path d="M14.7057 25.6667C21.1224 25.6667 26.3724 20.4167 26.3724 14C26.3724 7.58337 21.1224 2.33337 14.7057 2.33337C8.28906 2.33337 3.03906 7.58337 3.03906 14C3.03906 20.4167 8.28906 25.6667 14.7057 25.6667Z" fill="white" stroke="#09AB66" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                        <circle cx="14.7057" cy="14" r="5" fill="#09AB66" />
                    </svg>
                    <p className="marginZero statusBarHeadetText">DELIVERY</p>
                </div>
                <p className="marginZero">_</p>
                <div className="statusBar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                        <path d="M14.7057 25.6667C21.1224 25.6667 26.3724 20.4167 26.3724 14C26.3724 7.58337 21.1224 2.33337 14.7057 2.33337C8.28906 2.33337 3.03906 7.58337 3.03906 14C3.03906 20.4167 8.28906 25.6667 14.7057 25.6667Z" fill="white" stroke="#09AB66" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                        <circle cx="14.7057" cy="14" r="5" fill="#09AB66" />
                    </svg>
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