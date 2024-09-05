import React from "react";
import HomePageBanner from './HomePageBanner';
import ReadyEatComponent from './ReadyEatComponent';
import CustomerSay from "./CustomerSay";
import Nutritionist from "./Nutritionist";

function HomePage() {
    return (
        <div className="home">
            <HomePageBanner />
            <ReadyEatComponent />
            <CustomerSay />
            <Nutritionist />
        </div>
    )
}

export default HomePage;
