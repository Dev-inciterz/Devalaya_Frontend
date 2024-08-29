import React from "react";
import kedarnath from "../Assets/Kedarnath.jpg";
import "./BrandCard.css";

const BrandCard = () => {

  return (
    <div>
      <div className="States_branding">
        <div className="States_brand-image">
          <img src={kedarnath} alt="brands" />
        </div>
        <div className="States_brand-content">
          <p>
            A Digital Solutions Company where technology and marketing
            intertwine to shape your digital success story.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;

