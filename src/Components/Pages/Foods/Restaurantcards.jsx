import React from "react";

import Slider from "react-slick";

import "./Restaurantcards.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Restaurantcards = ({ vegrest, jainrest, nonvegrest }) => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  console.log("wertyui", vegrest[0].img);
  return (
    <div className="restcardspage">

        <p className="restcards_heading">Veg Restaurants:</p>
      <div className="restcards slider-container">
        <Slider {...settings}>
          {vegrest &&
            vegrest.map((rest) => (
              <div className="rstcard_item">
                <div className="rstcard_item_card">

                <img src={rest.img} alt="" />
                <p className="restcardtitle">{rest.name}</p>
                </div>
              </div>
            ))}
        </Slider>
      </div>

      <hr />

      <p className="restcards_heading">Jain Restaurants:</p>
      <div className="restcards slider-container">
        <Slider {...settings}>
          {jainrest &&
            jainrest.map((rest) => (
              <div className="rstcard_item">
                <div className="rstcard_item_card">

                <img src={rest.img} alt="" />
                <p className="restcardtitle">{rest.name}</p>
                </div>
              </div>
            ))}
        </Slider>
      </div>

      <hr />

      <p className="restcards_heading">Non-veg Restaurants:</p>

      <div className="restcards slider-container">
        <Slider {...settings}>
          {nonvegrest &&
            nonvegrest.map((rest) => (
              <div className="rstcard_item">
                <div className="rstcard_item_card">

                <img src={rest.img} alt="" />
                <p className="restcardtitle">{rest.name}</p>
                </div>
              </div>
            ))}
        </Slider>
      </div>

      <hr />

    
    </div>
  );
};

export default Restaurantcards;
