import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./CustomCarousel.css";

const CustomCarousel = (props) => {
  const Temples = props.temples;
  const CompHeading = props.compheading;

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-scroll
    autoplaySpeed: 3000, // Speed of auto-scroll in milliseconds (3 seconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="custom_carousel">
      <div className="heading-carousel">
        <h1>{CompHeading}</h1>
      </div>

      <div className="item-list-carousel">
        <Slider {...settings}>
          {Temples.map((temple, index) => (
            <div className="box-carousel" key={temple.id || index}>
              <img
                className="box-carousel_image"
                src={temple.pictures[0]}
                alt={temple.name}
              />
              <div className="text-carousel">
                <h2>{temple.name}</h2>
                <p>{temple.smalldescription}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CustomCarousel;
