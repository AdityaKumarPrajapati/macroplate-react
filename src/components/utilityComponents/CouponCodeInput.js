import React from "react";
import InputField from "./InputField";
import { Button } from "react-bootstrap";
import './css/CouponCodeInput.css'

const CouponCodeInput = () => {
    return (
        <div className="couponCodeWrapper">
            <InputField
                placeHolder='Enter Your Promo or Gift Code'
                wrapperClass='promoCodeWrapper'
                name='firstName'
                type='text'
            />
            <Button className="promoCodeApplyBtn" variant="dark">Apply</Button>
        </div>
    );
}

export default CouponCodeInput;