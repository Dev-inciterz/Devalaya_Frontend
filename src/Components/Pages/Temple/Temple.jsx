import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../Loader/Loader";
import Templebanner from "./Templebanner";

const Temple = () => {
  const { id } = useParams();

  const [temple, setTemple] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchTempleData = async () => {
    console.warn("i ahev been called");
    try {
      const webURL = `${process.env.REACT_APP_BACKEND_URL}/temple/get/${id}`;
      const response = await axios.get(webURL);
      console.log("responseresponseresponseresponseresponse", response);
      return response.data.result;
    } catch (error) {
      console.log("The Error", error);
    }
  };

  useEffect(() => {
    fetchTempleData().then((data) => {
      if (data) {
        setLoading(false);
      }
      setTemple(data);
    });
  }, [id]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="temple_mainpage">
          <Templebanner templeimages={temple.pictures} title={temple.name} />

          <div className="temple_details">

          <h2 className="temple_name">{temple.city.name}</h2>

            <h2 className="temple_name">{temple.name}</h2>



            <div className="temple_details_brief">
              <div className="temple_brief_about">
                <p className="temple_about_heading">Description</p>
                <p className="temple_about_para">{temple.description}</p>
              </div>

              <div className="temple_history">
              <p className="temple_about_heading">History</p>
              <p className="temple_about_para">{temple.history}</p>
              </div>


              <div className="temple_history">
              <p className="temple_about_heading">Timings</p>
              <p className="temple_about_para">{temple.timings}</p>
              </div>

              <div className="temple_history">
              <p className="temple_about_heading">Best Time To Visit</p>
              <p className="temple_about_para">{temple.besttimeofvisit}</p>
              </div>


              <div className="temple_history">
              <p className="temple_about_heading">Small Description</p>
              <p className="temple_about_para">{temple.smalldescription}</p>
              </div>


              <div className="temple_history">
              <p className="temple_about_heading">Rules and Regulations</p>
              <p className="temple_about_para">{temple.rulesandregulations}</p>
              </div>


              <div className="temple_history">
              <p className="temple_about_heading">Contact</p>
              <p className="temple_about_para">{temple.contact}</p>
              </div>


              <div className="temple_history">
              <p className="temple_about_heading">Social Acitivities</p>
              <p className="temple_about_para">{temple.socialacitivities}</p>
              </div>



              <div className="temple_history">
              <p className="temple_about_heading">Category</p>
              <p className="temple_about_para">{temple.category.title}</p>
              </div>



              <div className="temple_history">
              <p className="temple_about_heading">Tags</p>
              <p className="temple_about_para">{temple.tags}</p>
              </div>


              <div className="temple_history">
              <p className="temple_about_heading">Foods</p>
              <p className="temple_about_para">{temple.food}</p>
              </div>
            </div>

            
          </div>
        </div>
      )}
    </div>
  );
};

export default Temple;
