import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Stay.css";

const Stay = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const stays = [
    {
      image: "https://downloadr2.apkmirror.com/wp-content/uploads/2022/04/71/626f7a5b1dd80.png",
      name: "Goibibo",
    },

    {
      image: "https://miro.medium.com/v2/resize:fit:600/1*0ykCMh-SifCFc47xVIIojQ.png",
      name: "Make My Trip",
    },

    {
      image: "https://pbs.twimg.com/profile_images/1450003024374468608/9W-XWfDH_400x400.jpg",
      name: "Yatra",
    },

    {
      image: "",
      name: "Booking",
    },

    {
      image: "",
      name: "Agoda",
    },

    {
      image: "",
      name: "Goibibo",
    },
  ];

  return (
    <div className="staycardpage">
      <p className="restcards_heading">Book Your Stay</p>
      <div className="staycards slider-container">
        <Slider {...settings}>
          {stays &&
            stays.map((stay) => (
              <div className="staycard_item">
                <div className="staycard_item_card">
                  <img src={stay.image} alt={stay.name} />
                </div>
                  <p className="staycardtitle">Book on {stay.name}</p>
              </div>
            ))}
        </Slider>
      </div>

      <hr />
    </div>
  );
};

export default Stay;
