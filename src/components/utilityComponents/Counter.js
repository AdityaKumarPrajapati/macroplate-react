import React, { useState, useEffect } from "react";
import './css/Counter.css'

const Counter = ({ id, inputName, value = 0, onChange }) => {
    // Initialize the counter with the value from props (which is from checkoutData)
    const [count, setCount] = useState(value);

    // Update the internal state if the value from props changes
    useEffect(() => {
        setCount(value);
    }, [value]);

    const Increment = () => {
        const newCount = count + 1;
        setCount(newCount);
        onChange(inputName, newCount);  // Notify parent of the change
    }

    const Decrement = () => {
        const newCount = count > 0 ? count - 1 : 0;
        setCount(newCount);
        onChange(inputName, newCount);  // Notify parent of the change
    }

    return (
        <div>
            <div className="quantity">
                <a href="#" className="quantity__minus" onClick={Decrement}><span>-</span></a>
                <input name={inputName} type="text" className="quantity__input" value={count} readOnly />
                <a href="#" className="quantity__plus" onClick={Increment}><span>+</span></a>
            </div>
            <p className="marginZero priceLabel">Per Day</p>
        </div>
    );
}

export default Counter;
