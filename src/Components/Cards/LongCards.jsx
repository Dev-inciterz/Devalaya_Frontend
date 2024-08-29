import React, { useEffect, useState } from "react";
import "./LongCards.css";
import { axiosWithoutToken } from "../../Api/AxiosInstance";

const LongCards = () => {
  const [recommendedTemples, setRecommendedTemples] = useState([]);

  useEffect(() => {
    axiosWithoutToken
      .get("/temple/gettemplesrandom")
      .then((response) => {
        setRecommendedTemples(response.data.result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  return (
    <div className="states_container">
      <div className="states_heading">
        <h2>Our Most Recommended</h2>
      </div>
      <div className="states_box">
        {recommendedTemples.map((temple) => {
          return (
            <div className="states_card">
              <div className="states_cardLeft">
                <div className="card_img">
                  <img src={temple.pictures[0]} alt="Ram Mandir" />
                </div>
                <div className="states_button">
                  <button>See More</button>
                  <button>Book Now</button>
                </div>
              </div>
              <div className="states_cardRight">

                  <p className="longcards_heading">{temple.name}</p>

                  <p className="longcarddescription">
                    {window.innerWidth < 480 ? temple.smalldescription : temple.description}
           
                  </p>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LongCards;
