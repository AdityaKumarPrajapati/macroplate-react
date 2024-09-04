import React from "react";
import HomePageBanner from './HomePageBanner';
import ReadyEatComponent from './ReadyEatComponent';
import CustomerSay from "./CustomerSay";

function HomePage() {
    return (
        <div className="home">
            <HomePageBanner />
            <ReadyEatComponent />
            <CustomerSay />
        </div>
    )
}

export default HomePage;
