import React from "react";
import HomePageBanner from './HomePageBanner';
import ReadyEatComponent from './ReadyEatComponent';

function HomePage() {
    return (
        <div className="home">
            <HomePageBanner />
            <ReadyEatComponent />
        </div>
    )
}

export default HomePage;
