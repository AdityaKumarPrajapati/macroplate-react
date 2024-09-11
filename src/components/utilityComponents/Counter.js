import React, { useState } from "react";
import './css/Counter.css'

const Counter = ({ id, inputName, value = 0, onChange }) => {
    const [count, setCount] = useState(0);

    const Increment = () => {
        const newCount = count + 1;
        setCount(newCount);
        onChange(inputName, newCount);
    }

    const Decrement = () => {
        const newCount = count > 0 ? count - 1 : 0;
        setCount(newCount);
        onChange(inputName, newCount);
    }
    return (
        <div class="">
            <div class="quantity">
                <a href="#" class="quantity__minus" onClick={Decrement}><span>-</span></a>
                <input name={inputName} type="text" class="quantity__input" value={count} readOnly />
                <a href="#" class="quantity__plus" onClick={Increment}><span>+</span></a>
            </div>
            <p className="marginZero priceLabel">Per Day</p>
        </div>
    );
}

export default Counter