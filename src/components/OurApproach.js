import React from "react";
import OurApproachTittle from "./OurApproachTittle";
import OurApproachContetntData from "../dataContentObjects/ourPageDataContent";
import Nutritionist from "./Nutritionist";
import './css/OurApproach.css';

const OurApproach = () => {
  return (
    <div className="">
      <OurApproachTittle />

      {Object.entries(OurApproachContetntData).map(([key, item], index) => (
        <div key={key} className={`${key} container`}>
          <div className={item.imageClassName}>
            {item.imageTitle}
          </div>
          <div className="SustainableContent">
            <div className="SustainableLeft">
              <p className="SustainableLeftText marginZero paddingZero">
                {item.leftText}
              </p>
            </div>
            <div className="SustainableRightText marginZero paddingZero">
              {item.rightText}
            </div>
          </div>
        </div>
      ))}

      <Nutritionist />
    </div>
  );
}

export default OurApproach;