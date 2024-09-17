import React from "react";
import { getTotalAmount, mealPlanPrice, proteinSnackPrice, proteinSmoothyPrice, juicePrice, coffeePrice, getTotalAmountWithDeliveryFeeAndDiscount } from "../../../../helperComponents/planAmountCalucation";
import '../../css/ReviewPage.css'
import TotalAmountCalculationWrapper from "../../../utilityComponents/TotalAmountCalculationWrapper";
import CouponCodeInput from "../../../utilityComponents/CouponCodeInput";

const ReviewPage = ({ checkoutData }) => {
    const mealPlanPriceData = mealPlanPrice({ checkoutData });
    const subTotalAmount = getTotalAmount({ checkoutData });
    const totalAmountWithDeliveryFee = getTotalAmountWithDeliveryFeeAndDiscount(subTotalAmount, checkoutData.programLength, '6.80')

    return (
        <div className="reviewScreenWrapperContainer">
            <div className="summaryContainer">
                <p className="marginZero">Summary</p>
            </div>

            <div className="calculationWrapper">
                <div className="reviewPageContainer">
                    <div className="reviewPageContentBox">
                        <div className="reviewContentTitleContainer">
                            <p className="reviewTitletext marginZero">Meal Plan</p>
                        </div>
                        <div className="reviewPlanContentConatiner">
                            <p className="reviewPlanContent marginZero">{checkoutData.vanityName} - {checkoutData.mealPerDay} Per Day - {checkoutData.programLength} Days</p>
                            <p className="reviewPlanContentPrice marginZero">${mealPlanPriceData}</p>
                        </div>
                    </div>

                    <hr />

                    {
                        checkoutData.snackProtein &&
                        <>
                            <div className="reviewPageContentBox">
                                <div className="reviewContentTitleContainer">
                                    <p className="reviewTitletext marginZero">Snack Plan</p>
                                </div>
                                <div className="reviewPlanContentConatiner">
                                    <p className="reviewPlanContent marginZero">Snacks - {checkoutData.mealPerDay} Per Day - {checkoutData.programLength} Days</p>
                                    <p className="reviewPlanContentPrice marginZero">${proteinSnackPrice({ checkoutData })}</p>
                                </div>
                            </div>
                            <hr />
                        </>
                    }

                    {
                        checkoutData.proteinSmoothy &&
                        <>
                            <div className="reviewPageContentBox">
                                <div className="reviewContentTitleContainer">
                                    <p className="reviewTitletext marginZero">Protein Smoothie</p>
                                </div>
                                <div className="reviewPlanContentConatiner">
                                    <p className="reviewPlanContent marginZero">Smoothies - {checkoutData.mealPerDay} Per Day - {checkoutData.programLength} Days</p>
                                    <p className="reviewPlanContentPrice marginZero">${proteinSmoothyPrice({ checkoutData })}</p>
                                </div>
                            </div>
                            <hr />
                        </>
                    }

                    {
                        checkoutData.juice &&
                        <>
                            <div className="reviewPageContentBox">
                                <div className="reviewContentTitleContainer">
                                    <p className="reviewTitletext marginZero">Cold Pressed Juice</p>
                                </div>
                                <div className="reviewPlanContentConatiner">
                                    <p className="reviewPlanContent marginZero">Juices - {checkoutData.mealPerDay} Per Day - {checkoutData.programLength} Days</p>
                                    <p className="reviewPlanContentPrice marginZero">${juicePrice({ checkoutData })}</p>
                                </div>
                            </div>
                            <hr />
                        </>
                    }

                    {
                        checkoutData.coffee &&
                        <div className="reviewPageContentBox">
                            <div className="reviewContentTitleContainer">
                                <p className="reviewTitletext marginZero">Cold Brew Coffee</p>
                            </div>
                            <div className="reviewPlanContentConatiner">
                                <p className="reviewPlanContent marginZero">Coffees - {checkoutData.mealPerDay} Per Day - {checkoutData.programLength} Days</p>
                                <p className="reviewPlanContentPrice marginZero">${coffeePrice({ checkoutData })}</p>
                            </div>
                        </div>
                    }
                </div>

                <hr />

                <div className="totalAmountAndCouponCodeWrapper">
                    <TotalAmountCalculationWrapper
                        subtotalAmount={subTotalAmount}
                        checkoutData={checkoutData}
                        dailyDeliveryFee='6.80'
                        totalAmount={totalAmountWithDeliveryFee}
                    />

                    <CouponCodeInput />
                </div>
            </div>

        </div>
    );
}

export default ReviewPage;