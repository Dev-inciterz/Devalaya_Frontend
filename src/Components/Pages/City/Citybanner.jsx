import React from "react";
import './Citybanner.css'

import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Citybanner = ({ cityimages }) => {
  return (
    <div className="citybanner_top_sect">
      <div className="slide-container">
        <Fade>
          {cityimages.map((image, index) => (
            <div key={index}>
              <img
                style={{
                  width: "100%",
                  display: "block",
                  maxHeight: "80vh",
                  objectFit: "cover",
                }}
                alt="tmplebnnr"
                src={
                  index < cityimages.length
                    ? cityimages[index]
                    : image
                }
              />
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default Citybanner;




