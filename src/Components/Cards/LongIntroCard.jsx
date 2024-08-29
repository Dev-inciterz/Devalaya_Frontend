import React from "react";

import "./LongIntroCard.css";

const LongIntroCard = (props) => {
  const Item = props.item;
  return (
    <div>
      <div className="itemintromain">
        <div className="itemintorleft">
          <img src={Item?.pictures[0]} alt="" />
        </div>

        <div className="itemintorright">
          <p className="itemintro_heading">{Item?.title}</p>
          <p className="itemintro_about">{Item?.about}</p>
        </div>
      </div>
    </div>
  );
};

export default LongIntroCard;
