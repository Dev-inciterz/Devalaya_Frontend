import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Cityhome.css'

const Cityhome = () => {
  const [allcities, setAllcities] = useState([]);

  const fetchAllCities = async () => {
    const webURL = `${process.env.REACT_APP_BACKEND_URL}/city/getall`;
    const response = await axios.get(webURL);
    setAllcities(response.data.result);
  };

  useEffect(() => {
    fetchAllCities();
  }, []);

  return (
    <div>
      <h1 className="container m-3">The Cities</h1>

      <div className="all_cities_listings" >
      {allcities.map((city) => (
  

          <div class="card" key={city._id}>
            <img
              src={`${process.env.REACT_APP_BACKEND_URL}/${city.pictures[0]}`}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{city.title}</h5>
              <p class="card-text">Some tags here</p>
              <Link to={`/city/${city._id}`}>{city.title}</Link>
            </div>
          </div>
      ))}
      </div>
    </div>
  );
};

export default Cityhome;
