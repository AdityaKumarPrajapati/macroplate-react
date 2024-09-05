import React from "react";
import OurApproachTittle from "./OurApproachTittle";
import './css/OurApproach.css';
import Nutritionist from "./Nutritionist";

const OurApproach = () => {
  return (
    <div className="">
      <OurApproachTittle />
      <div className="SustainableWrapper container"> 
        <div className="SustainableImage">
          Sustainable-IMG
        </div>
        <div className="SustainableContent">
          <div className="SustainableTitle">
            <p className="SustainableTitleText marginZero paddingZero">
            At the core of what we do is providing you with delicious, nutritious meals that not only nourish your body but also respect our environment.
            </p>
          </div>
          <div className="SustainableText marginZero paddingZero">
          Our recipes are hand-picked to be non-inflammatory and optimize overall health while supporting a wide range of diets. We take care in sourcing all animal proteins from farms where no antibiotics or hormones were used, and seafood comes from sustainable sources that protect marine life.
          </div>
        </div>
      </div>
      <div className="ReducingWrapper container">
        <div className="SustainableImage">
          Reducing-IMG
        </div>
        <div className="ReducingContent">
          <div className="ReducingTitle">
            <p className="ReducingTitleText marginZero paddingZero">
            We plan and order our ingredients before meals are produced to keep our food waste below 1%.
            </p>
          </div>
          <div className="ReducingText marginZero paddingZero">
            The US food supply is being squandered, with an estimated 30-40% of it ending up in landfills. Wholesome food that could have helped feed families in need is sent to landfills. By signing up for meal programs in advance, clients help us to minimize the number of resources utilized when it comes time to create their delicious dishes.
          </div>
        </div>
      </div>
      <Nutritionist />
    </div>
  );
}

export default OurApproach;