import React from "react";

import kedarnath from "../Assets/kedarnath_hompage-transformed.jpeg";
import triyugi from "../Assets/triyugi_homepage-transformed.jpeg";
import sonark from "../Assets/sonark_homepage.jpeg";
import vaishnoDevi from "../Assets/vaishno_devi_homepage.jpeg";
import surkandaDevi from "../Assets/surkanda_devi_hompage.jpg";
import meenakshi from "../Assets/meenakshi_homapge.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import "./FancySlider.css";
import { useLocation } from "react-router-dom";

const FancySlider = (props) => {

  const SelectedItems = props.selectedStates || props.cities;


  const Location = useLocation();


  const HnadleNext = () => {
    let items = document.querySelectorAll(".fancy_slide_item");
    document.querySelector(".fancy_slide").appendChild(items[0]);
  };

  const HnadlePrev = () => {
    let items = document.querySelectorAll(".fancy_slide_item");
    document.querySelector(".fancy_slide").prepend(items[items.length - 1]);
  };

  return (
    <div>

      {
        (Location.pathname === "/" ? (
          <div className="fancy_container">
            <div className="fancy_slide">
              <div
                className="fancy_slide_item"
                style={{ backgroundImage: `url(${kedarnath})` }}
              >
                <div className="content1">
                  <div className="name">Kedarnath Temple</div>
                  <div className="des">
                    Kedarnath temple is one of the sacred pilgrimage centres in
                    Northern India, located on the bank of Mandakini river at an
                    altitude of 3584 meters above sea level. The historical name
                    of this region is "Kedar Khand". Kedarnath temple is a part
                    of Char Dhams and Panch Kedar in Uttarakhand and one of the
                    12 Jyotirlingas of Lord Shiva in India.
                  </div>
                  <button className="home-banner-button">See More</button>
                  <button className="home-banner-button">Book Now</button>
                </div>
              </div>
              <div
                className="fancy_slide_item"
                style={{ backgroundImage: `url(${triyugi})` }}
              >
                <div className="content1">
                  <div className="name">Triyugi Narayan Temple</div>
                  <div className="des">
                    The Triyuginarayan village in Rudraprayag district of
                    Uttarakhand makes for an ideal destination for all those in
                    search of a revered place to get married. Triyuginarayan is
                    famed for its namesake temple that is dedicated to Lord
                    Vishnu; as per the legends, the temple is where Lord Shiva
                    and Goddess Parvati got married.
                  </div>
                  <button className="home-banner-button">See More</button>
                  <button className="home-banner-button">Book Now</button>
                </div>
              </div>
              <div
                className="fancy_slide_item"
                style={{ backgroundImage: `url(${sonark})` }}
              >
                <div className="content1">
                  <div className="name">Sonark Temple</div>
                  <div className="des">
                    On the shores of the Bay of Bengal, bathed in the rays of
                    the rising sun, the temple at Konarak is a monumental
                    representation of the sun god Surya's chariot, its 24 wheels
                    are decorated with symbolic designs and it is led by a team
                    of six horses. Built in the 13th century, it is one of
                    India's most famous Brahman sanctuaries.
                  </div>
                  <button className="home-banner-button">See More</button>
                  <button className="home-banner-button">Book Now</button>
                </div>
              </div>
              <div
                className="fancy_slide_item"
                style={{ backgroundImage: `url(${vaishnoDevi})` }}
              >
                <div className="content1">
                  <div className="name">Vaishno Devi</div>
                  <div className="des">
                    Vaishno Devi Temple, also known as the Shri Mata Vaishno
                    Devi Temple and Vaishno Devi Bhavan, is a Hindu mandir
                    located in Katra, Jammu and Kashmir, dedicated to Vaishno
                    Devi, a manifestation of Mahakali, Mahalakshmi, and
                    Mahasarasvati. It is located on the Trikuta mountain at
                    5,000 feet / 1,500 meters elevation.
                  </div>
                  <button className="home-banner-button">See More</button>
                  <button className="home-banner-button">Book Now</button>
                </div>
              </div>
              <div
                className="fancy_slide_item"
                style={{ backgroundImage: `url(${surkandaDevi})` }}
              >
                <div className="content1">
                  <div className="name">Surkanda Devi</div>
                  <div className="des">
                    Surkanda Devi Temple is a revered Hindu temple located in
                    the Uttarakhand state of India. It is situated atop a hill
                    at an altitude of about 2,757 meters (9,045 feet) in the
                    Tehri Garhwal district. The temple is dedicated to Goddess
                    Surkanda Devi, who is believed to be a form of Goddess
                    Durga.
                  </div>
                  <button className="home-banner-button">See More</button>
                  <button className="home-banner-button">Book Now</button>
                </div>
              </div>
              <div
                className="fancy_slide_item"
                style={{ backgroundImage: `url(${meenakshi})` }}
              >
                <div className="content1">
                  <div className="name">Meenakshi Temple</div>
                  <div className="des">
                    Experience the culture of Madurai with this private tour of
                    its ancient temples. Spend approximately 45 minutes visiting
                    each of the Dravidian temples built by the Pandyan and
                    Madurai Nayak kings, earning the city its nickname Koil
                    Maanagar, which means Temple City. Discover why Madurai,
                    also called the City of Junctions or Koodal Nagaram, is one
                    of India's most outstanding Hindu pilgrimage centers.
                  </div>
                  <button className="home-banner-button">See More</button>
                  <button className="home-banner-button">Book Now</button>
                </div>
              </div>
            </div>
            <div className="button">
              <button className="prev" onClick={HnadlePrev}>
                <FaArrowLeft />
              </button>
              <button className="next" onClick={HnadleNext}>
                <FaArrowRight />
              </button>
            </div>
          </div>
        ) : (
          <div className="fancy_container">
            <div className="fancy_slide">
              {SelectedItems.length > 0  &&
                SelectedItems.map((item) => (
                  <div
                    className="fancy_slide_item"
                    style={{ backgroundImage: `url(${item.pictures[0]})` }}
                  >
                    <div className="content1">
                      <div className="name">{item.title}</div>
                      <div className="des">{item.about}</div>
                      <button className="home-banner-button">See More</button>
                      <button className="home-banner-button">Book Now</button>
                    </div>
                  </div>
                ))}
            </div>
            <div className="button">
              <button className="prev" onClick={HnadlePrev}>
                <FaArrowLeft />
              </button>
              <button className="next" onClick={HnadleNext}>
                <FaArrowRight />
              </button>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default FancySlider;
