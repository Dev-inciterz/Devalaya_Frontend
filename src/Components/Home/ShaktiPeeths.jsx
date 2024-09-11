import React, { useEffect, useState } from "react";
import "./ShaktiPeeths.css";
import { axiosWithoutToken } from "../../Api/AxiosInstance";
import shaktipeeth from "../Assets/main shaktipeeth.jpg";

const ShaktiPeeths = () => {
  const [shaktiPeethas, setShaktiPeethas] = useState([]);

  useEffect(() => {
    axiosWithoutToken
      .get("/temple/gettemplesbycat/65eed479dc5644aa58a9aa78")
      .then((response) => {
        console.log("the all ShaktiPeethas", response);
        setShaktiPeethas(response.data.result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log("jevbck,evbjerbvjkerl", shaktiPeethas);
  return (
    <div>
      <div className="shaktipeeth">
        {/* <div className="shaktipeeth_left">
          <div className="shaktipeeth-main">
            <img src={shaktipeeth} alt="text" />
          </div>
          <div className="shaktipeeth_content">
            <p>
              Shakti Peeth refers to a sacred place of eternal power and is
              considered significant in Hinduism / Sanatan Dharma.It is believed
              that, when Lord Shiva was carrying his deceased wife Devi Sati’s
              body across Aryavrath (bharat), parts of her body fell in
              different places of the Indian Subcontinent, creating divine spots
              called 51 Shakti Peethas all over. There are a total of 51 Shakti
              Peeths, out of which 18 are considered as Maha Shakti Peeths.
              Majority of these peeths are located in India, with a few in
              neighboring countries like Pakistan, Bangladesh, and Sri Lanka.
            </p>
          </div>
          <div className="shaktipeeth_left-button">
            <button>See More</button>
            <button>Book Now</button>
          </div>
        </div> */}
        <div className="shaktipeeth_right">
          <p className="shaktipeeth_right-heading">
            Shakti Peeth -  {shaktiPeethas.length}
          </p>

          <div className="shaktipeeth_list">
            <div className="shaktipeeth_container">
              {shaktiPeethas.map((temple, index) => {
                // Split the description into an array of words
                const words = temple.smalldescription.split(" ");
                // Check if the description exceeds 50 words
                const limitedDescription =
                  words.length > 25
                    ? words.slice(0, 25).join(" ") + "..."
                    : temple.smalldescription;

                return (
                  <div className="shaktipeeth_card" key={temple.id || index}>
                    <img src={temple.pictures[0]} alt={temple.name} />
                    <h2>{temple.name}</h2>
                    <p>{limitedDescription}</p>

                    <div className="shaktipeeth_somedes">
                      <p className="body_part">Body Part</p>
                      <p className="shktipeeth_country">{temple.city?.country.title}</p>
                    </div>
                   
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShaktiPeeths;
