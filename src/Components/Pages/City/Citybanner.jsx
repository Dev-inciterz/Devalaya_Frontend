import React from "react";

import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Citybanner = ({ cityimages, title }) => {
  return (
    <div>
      <div className="slide-container">
        <Fade>
          {cityimages.map((image, index) => (
            <div key={index}>
              {/* <img style={{ width: '100%' ,display:"block", maxHeight:"80vh"}} alt="tmplebnnr" src={index < cityimages.length ? `${process.env.REACT_APP_BACKEND_URL}/${cityimages[index]}` : image} /> */}
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
                    ? `${process.env.REACT_APP_BACKEND_URL}/${cityimages[index]}`
                    : image
                }
              />
              {/* <h2>{title}</h2> */}
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default Citybanner;
