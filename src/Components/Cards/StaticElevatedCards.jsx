import React from "react";
import "./StaticElevatedCards.css";
import { useNavigate } from "react-router-dom";

const StaticElevatedCards = ({ ItemData }) => {

  console.log("eknklenvkenv;ev klnebv", ItemData)

 


  const navigate = useNavigate();

  if (!ItemData || ItemData.length === 0) {
    return <div>Loading</div>;
  }

  const HandleSendToSingleState = (ItemId) => {

    navigate(`/state/${ItemId}` )
  }

  return (

    <div className="elevatedcradswhole">

      <p className="staticelevatedheadings">{ItemData[0].state ? 'CITIES' : 'STATES' }</p>

    <div className="allitems">

      {ItemData.map((item) => {
        return (
          <div
            key={item.title} // Add a key for each element
            className="card_item"
            style={{
              "--bg-image": `url(${item.pictures[0]})`, // Set background image via CSS variable
            }}

            onClick={() => HandleSendToSingleState(item._id)}
          >
            <p className="item_title">{item.title}</p>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default StaticElevatedCards;
