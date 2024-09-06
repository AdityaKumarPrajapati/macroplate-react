import React from "react";

const BackButtonSvg = ({ pageNumber, setCurrentPage }) => {
    const moveToPreviousPage = () => {
        setCurrentPage(pageNumber);
    }
    return (
        <div className="backBtnSvgContainer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="backBtnSVG" onClick={moveToPreviousPage}>
                <g clip-path="url(#clip0_3895_17549)">
                    <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" fill="black" />
                </g>
                <defs>
                    <clipPath id="clip0_3895_17549">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}

export default BackButtonSvg;
