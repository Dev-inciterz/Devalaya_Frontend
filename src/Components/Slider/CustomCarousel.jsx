import React, { useEffect, useState } from "react";
import { axiosWithoutToken } from "../../Api/AxiosInstance";
import "./CustomCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CustomCarousel = () => {
  const [randomTemples, setRandomTemples] = useState([]);

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

  useEffect(() => {
    axiosWithoutToken
      .get("/temple/gettemplesrandom")
      .then((response) => {
        console.log("the all RandomTemples", response);
        setRandomTemples(response.data.result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="custom_carousel">
      <div className="heading-carousel">
        <h1>Temples To Visit During Winter (Random now)</h1>
      </div>

    
        <div className="item-list-carousel">
          <Slider {...settings}>
            {randomTemples.map((temple, index) => (
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
