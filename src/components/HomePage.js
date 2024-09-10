import React from "react";
import HomePageBanner from './HomePageBanner';
import ReadyEatComponent from './ReadyEatComponent';
import CustomerSay from "./CustomerSay";
import Nutritionist from "./Nutritionist";
import HomePageMealPlanSlider from "./HomePageMealPlanSlider";
import MealPlanSliderDesc from "./MealPlanSliderDesc";

function HomePage() {
    return (
        <div className="home">
            <HomePageBanner />
            <ReadyEatComponent />
            <CustomerSay />
            <div className="mealPlanHowItWorksContainer">
                <MealPlanSliderDesc />
                <HomePageMealPlanSlider />
            </div>
            <Nutritionist />
        </div>
    )
}

export default HomePage;
