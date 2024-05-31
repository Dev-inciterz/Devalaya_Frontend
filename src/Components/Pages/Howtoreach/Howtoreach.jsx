import React from "react";
import './Howtoreach.css'

const Howtoreach = ({temple}) => {

  console.log("thehbehebe", temple)
  return (
    <div className="howtoreach_page">
      <div className="how_to_reach_items">
        <div className="how_to_reach_item">
          <h3 className="howtoreach_heading">Bus</h3>

          <hr />

          <p className="distnnace_bybus">
            12 hr 21 min (842.8 km) via Agra - Lucknow Expy
          </p>

          <a href={temple.city.bus ? temple.city.bus : "/"  } target="_blank" rel="noreferrer">Click here to Book Bus</a>
        </div>

        <div className="how_to_reach_item">
          <h3 className="howtoreach_heading">Train</h3>

          <hr />

          <p className="distnnace_bybus">
            The approximate travel distance between New Delhi to Varanasi is 745
            kms.
          </p>
        </div>

        <div className="how_to_reach_item">
          <h3 className="howtoreach_heading">Flight</h3>

          <hr />

          <p className="distnnace_bybus">
            New Delhi – Varanasi IndiGo flight is 01 Hours & 15 Minutes.
          </p>

          <a href={temple.city.flight ? temple.city.flight : "/"  } target="_blank" rel="noreferrer">Click here to Book Flight</a>
        </div>
      </div>
      <hr className="temple_affltlnks_hr" />

    </div>
  );
};

export default Howtoreach;
