import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
import '../../css/CardDetails.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            color: '#000',
            fontSize: '16px',
            fontSmoothing: 'antialiased',
            '::placeholder': {
                color: '#aab7c4',
            },
            backgroundColor: '#ffffff',
            borderColor: '#e0e0e0',
        },
        invalid: {
            color: '#fa755a',
            iconColor: '#fa755a',
        },
    },
};

// Use forwardRef to expose handleSubmit to parent component
const CardDetails = forwardRef(({ onSubmit }, ref) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardBrand, setCardBrand] = useState('');

    const handleCardChange = (event) => {
        if (event.brand) {
            setCardBrand(event.brand);
        }
    };

    const handleSubmit = async () => {
        if (!stripe || !elements) {
            return;
        }

        const cardNumberElement = elements.getElement(CardNumberElement);
        const { token, error } = await stripe.createToken(cardNumberElement);

        if (error) {
            console.error(error.message);
        } else {
            console.log('----tokennn---', token);
            onSubmit(token); // Pass the token back to the parent component
        }
    };

    // Expose the handleSubmit function to parent via ref
    useImperativeHandle(ref, () => ({
        handleSubmit
    }));

    const getBrandIconClass = (brand) => {
        switch (brand) {
            case 'visa':
                return 'fab fa-cc-visa';
            case 'mastercard':
                return 'fab fa-cc-mastercard';
            case 'amex':
                return 'fab fa-cc-amex';
            case 'discover':
                return 'fab fa-cc-discover';
            default:
                return '';
        }
    };

    return (
        <div className="card-details-wrapper">
            <p className='marginZero personalInfoText'>CARD INFO</p>

            <div className="card-details-container">
                <div className="card-number-container">
                    <CardNumberElement
                        id="card-number"
                        options={CARD_ELEMENT_OPTIONS}
                        onChange={handleCardChange}
                        className="card-number"
                    />
                    {cardBrand && (
                        <i
                            className={`card-brand-icon ${getBrandIconClass(cardBrand)}`}
                            aria-hidden="true"
                        ></i>
                    )}
                </div>
                <div className="expiry-cvc-container">
                    <CardExpiryElement
                        id="card-expiry"
                        options={CARD_ELEMENT_OPTIONS}
                        className="expiry"
                    />
                    <CardCvcElement
                        id="card-cvc"
                        options={CARD_ELEMENT_OPTIONS}
                        className="cvc"
                    />
                </div>
            </div>
        </div>
    );
});

export default CardDetails;
