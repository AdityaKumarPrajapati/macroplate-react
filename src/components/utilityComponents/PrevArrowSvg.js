import React from "react";

const PrevArrowSvg = (props) => {
    const { className, style, onClick } = props;
    return (
        <svg className={className} style={{ ...style, display: "block", background: "green" }} onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M17.6802 20.7068L12.9868 16.0001L17.6802 11.2935" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
}

export default PrevArrowSvg;