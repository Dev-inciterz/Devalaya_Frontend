import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../Loader/Loader";
import Citybanner from "./Citybanner";
import './City.css'
import FancyNav from "../../Nav/FancyNav";

const City = () => {

    const navigate = useNavigate()
  const [citydata, setCitydata] = useState([]);

  const [citytemples, setCitytemples] = useState([]);

  const { id } = useParams();

  const [loading, setLoading] = useState(true);


  const SendToTemplePage = (id) => {
    navigate(`/temple/${id}`);
  };



  const fetchCityData = async () => {
    try {
      const webURL = `${process.env.REACT_APP_API_BASE_URL}/city/get/${id}`;
      const response = await axios.get(webURL);
      return response.data.result;
    } catch (error) {
      console.log("The Error", error);
    }
  };

  const FetchTemplesByCity = async () => {
    try {
        console.log("dxfcghjklckduyasv", citydata)
      const webURL = `${process.env.REACT_APP_API_BASE_URL}/temple/gettemplesbycity/${id}`;

      console.error(webURL)
      const response = await axios.get(webURL);

      console.warn("wjgcvwhjecbjkwbckacb hsdvcgisbvsjkd" , response)
      return response.data.result;
    } catch (error) {
      console.log("The Error", error);
    }
  };

  useEffect(() => {
    fetchCityData().then((data) => {
      if (data) {
        setLoading(false);
      }
      setCitydata(data);
    });

    FetchTemplesByCity().then((data) => {
      setCitytemples(data);
    });
    // eslint-disable-next-line 
  }, [id]);

//   console.log(citydata);

  console.log("citytemplescitytemplescitytemplescitytemples",citytemples);

  return (
    <div className="citymainpageeverything">
      {loading ? (
        <Loader />
      ) : (
        <div className="citypagemain">
          <FancyNav />
          <div className="citytopbanners">
            <Citybanner cityimages={citydata.pictures} title={citydata.title} />
          </div>

          <div className="cityabout">
            <h3 className="cityabtheasding">About {citydata.title}</h3>

            <p className="cityaboutpara">{citydata.about}</p>
          </div>

          <div className="city_temples">
            <p className="city_temples_para">
              Temples to visit in {citydata.title}
            </p>

            <hr />

            <div className="citybased_temples_all d-flex justify-content-space-between align-items-center">
              { citytemples && citytemples.map((temple) => (
                <div className="citybased_temple_card" onClick={() => SendToTemplePage(temple._id)}>
                  <img
                    src={temple.pictures[0]}
                    alt="Temple visuals"
                  />
                  <p className="citybased_temple_name">{temple.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default City;
