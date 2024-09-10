import React from "react";

const NextArrowSvg = (props) => {
    const { className, style, onClick } = props;
    return (
        <svg className={className} style={{ ...style, display: "block", background: "red" }} onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M14.3198 20.7068L19.0132 16.0001L14.3198 11.2935" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
}

export default NextArrowSvg;