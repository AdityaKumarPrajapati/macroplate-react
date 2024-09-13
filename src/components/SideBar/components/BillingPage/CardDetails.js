import React from "react";
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';



const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            color: '#32325d',
            fontSize: '16px',
            fontSmoothing: 'antialiased',
            '::placeholder': {
                color: '#aab7c4',
            },
        },
        invalid: {
            color: '#fa755a',
            iconColor: '#fa755a',
        },
    },
};

const CardDetails = () => {


    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return; // Stripe.js has not loaded yet.
        }

        const cardElement = elements.getElement(CardNumberElement);
        const result = await stripe.createToken(cardElement);
        if (result.error) {
            console.error(result.error.message);
        } else {
            console.log(result.token);
            // Send the token to your server
        }
    };


return (
        <div >
            <form onSubmit={handleSubmit}>
                        <CardNumberElement id="card-number" options={CARD_ELEMENT_OPTIONS} />
            <br />
            <br />
                        
            <CardExpiryElement id="card-expiry" options={CARD_ELEMENT_OPTIONS} />
            <br />
            <br />

            
            <CardCvcElement id="card-cvc" options={CARD_ELEMENT_OPTIONS} />

            <button type="submit" disabled={!stripe}>
                PLACE ORDER
            </button>

            </form>
        </div>
)
}

export default CardDetails;
