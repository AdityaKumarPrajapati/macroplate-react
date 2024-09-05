import React from "react";
import './css/Nutritionist.css'
import Icon1 from '../asset/images/createdbychefs_1.png'
import Icon2 from '../asset/images/portioncontrolled_1.png'
import Icon3 from '../asset/images/locallysourced_1.png'
import Icon4 from '../asset/images/dailydelivery_1.png'
import { useSidebar } from "./context/SidebarContext";

const Nutritionist = () => {
    const { toggleSidebar } = useSidebar();
    return (
        <section className="nutritionWrapper">
            <div className="nutritionContainer">
                <div className="nutritionContentContainer container">
                    <div className="personalChefContainer">
                        <div className="personalChefContentContainer">
                            <div className="personalChefContentSection1">
                                <p className="marginZero presonalChefText">Personal Chef meets Nutritionist.</p>
                                <button
                                    onClick={toggleSidebar}
                                >GET STARTED</button>
                            </div>
                            <div className="personalChefContentSection2">
                                <div className="personalChefIconSection">
                                    <img className="personalChefIconImage" src={Icon1}></img>
                                    <p className="marginZero personalChefIconText">CREATED BY CHEF</p>
                                </div>
                                <div className="personalChefIconSection">
                                    <img className="personalChefIconImage" src={Icon2}></img>
                                    <p className="marginZero personalChefIconText">PORTION CONTROLLED</p>
                                </div>
                                <div className="personalChefIconSection">
                                    <img className="personalChefIconImage" src={Icon3}></img>
                                    <p className="marginZero personalChefIconText">LOCALLY SOURCED</p>
                                </div>
                                <div className="personalChefIconSection">
                                    <img className="personalChefIconImage" src={Icon4}></img>
                                    <p className="marginZero personalChefIconText">DAILY DELIVERY</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Nutritionist;