import React from "react";
import './css/ReadyEatComponent.css'
import Ready1 from '../asset/images/ready1.png'
import Ready2 from '../asset/images/ready1.png'
import Ready3 from '../asset/images/ready1.png'

function ReadyEatComponent() {
    return (
        <div className="container readyEatContainer">
            <p className="readyEatText marginZero">READY TO EAT. STOP ANYTIME.</p>
            <div className="wrapper">
                <div className="readyEatSections">
                    <div className="imageSection">
                        <img src={Ready3} alt="Ready3" />
                    </div>
                    <div className="contentSection">
                        <p className="marginZero mealTitle">OUTSTANDING, BALANCED FOOD</p>
                        <p className="marginZero mealContent">Delicious options created by award-winning LA-based chefs using only locally-grown California ingredients.</p>
                    </div>
                </div>

                <div className="readyEatSections">
                    <div className="imageSection">
                        <img src={Ready2} alt="Ready2" />
                    </div>
                    <div className="contentSection">
                        <p className="marginZero mealTitle">PERSONAL CHEF MEETS NUTRITIONIST</p>
                        <p className="marginZero mealContent">Each plan is based around your health goals. and designed alongside nutritionists and personal trainers.</p>
                    </div>
                </div>

                <div className="readyEatSections">
                    <div className="imageSection">
                        <img src={Ready1} alt="Ready1" />
                    </div>
                    <div className="contentSection">
                        <p className="marginZero mealTitle">DELIVERED DAILY TO YOUR DOOR</p>
                        <p className="marginZero mealContent">We are the only meal company offering daily delivery because we believe in raising the standards.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReadyEatComponent;