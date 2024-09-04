import React from "react";
import './css/CustomerSay.css'
import CustomerSayImg from '../asset/images/testimonial1.png'

const CustomerSay = () => {
    return (
        <section className="customerSayContainer">
            <div className="customerImageSection">
                <img src={CustomerSayImg} alt="Banner" />
            </div>

            <div className="customerReviewSection">

            </div>
        </section>
    );
}

export default CustomerSay;