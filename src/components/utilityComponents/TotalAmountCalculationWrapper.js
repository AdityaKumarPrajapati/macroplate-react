import React from "react";

const TotalAmountCalculationWrapper = ({ subtotalAmount, checkoutData, dailyDeliveryFee, discountAmount, totalAmount }) => {
    return (
        <div className="totalAmountCalculationWrapper">
            <div className="reviewPageContentBox">
                <div className="reviewPlanContentConatiner">
                    <p className="reviewPlanContent marginZero">Subtotal:</p>
                    <p className="reviewPlanContent marginZero">${subtotalAmount}</p>
                </div>
            </div>

            <div className="reviewPageContentBox">
                <div className="reviewPlanContentConatiner">
                    <p className="reviewPlanContent marginZero">Daily Delivery Fee:</p>
                    <p className="reviewPlanContent marginZero">${dailyDeliveryFee}(× {checkoutData.programLength})</p>
                </div>
            </div>

            {
                discountAmount &&
                <div className="reviewPageContentBox">
                    <div className="reviewPlanContentConatiner">
                        <p className="reviewPlanContent marginZero">Discount:</p>
                        <p className="reviewPlanContent marginZero">${discountAmount}</p>
                    </div>
                </div>
            }

            <div className="reviewPageContentBox">
                <div className="reviewPlanContentConatiner">
                    <p className="totalAmountText marginZero">Total:</p>
                    <p className="totalAmountPrice marginZero">${totalAmount}</p>
                </div>
            </div>
        </div>
    );
}

export default TotalAmountCalculationWrapper;