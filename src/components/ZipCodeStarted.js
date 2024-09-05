import React, { useState } from "react";
import './css/ZipCodeStarted.css'
import { useSidebar } from "./context/SidebarContext";

const ZipCodeStarted = () => {
    const [zipCode, setZipCode] = useState('');
    const { toggleSidebar } = useSidebar();

    const handleZipCodeChange = (e) => {
        setZipCode(e.target.value);
    }

    const handleZipCodeSubmit = (e) => {
        e.preventDefault();
        toggleSidebar();
        console.log('----zipCode---', zipCode);
    }

    return (
        <form className="zipCodeWrapper" onSubmit={handleZipCodeSubmit}>
            <div className="zipCodeInputContainer">
                <input
                    type="text"
                    placeholder="Enter your ZIP code"
                    onChange={handleZipCodeChange}
                    required
                />
            </div>
            <button type="submit">GET STARTED</button>
        </form>
    );
}

export default ZipCodeStarted;