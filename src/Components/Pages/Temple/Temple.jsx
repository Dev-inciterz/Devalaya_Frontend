import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../Loader/Loader";
import Templebanner from "./Templebanner";
import "./Temple.css";

import CustomTemplateImage from "../../Assets/Cstom_Teple_one.jpg";
import CSTMIMG from "../../Assets/Custom_Temple_Three.jpg";
import cstmimgthree from "../../Assets/Custom_Temple_Two.jpg";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Templecards from "./Templecards";

const Temple = () => {
  const { id } = useParams();

  const [temple, setTemple] = useState([]);

  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("one");

  const DefaultImages = [
    CustomTemplateImage,
    CSTMIMG,
    cstmimgthree,
    CustomTemplateImage,
    CSTMIMG,
    cstmimgthree,
  ];

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    fetchTempleData().then((data) => {
      if (data) {
        setLoading(false);
      }
      setTemple(data);
    });
  }, [id]);

  console.log("eicbvkewjvbwkjlcbnkw vcjhb noelb rk", temple.category);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="temple_mainpage">
          <Templebanner templeimages={temple.pictures} title={temple.name} />

          <div className="temple_details">
            <div className="temple_details_left">
              <h2 className="temple_name">
                {temple.city.title} , {temple.name}
              </h2>

              <div className="temple_details_brief">
                <Box sx={{ width: "100%", typography: "body1" }}>
                  <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                      <TabList
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="lab API tabs example"
                      >
                        <Tab label="Description" value="1" />
                        <Tab label="History" value="2" />
                        <Tab label="Timings" value="3" />
                        <Tab label="Best Time To Visit" value="4" />
                        <Tab label="Small Description" value="5" />
                        <Tab label="Rules and Regulations" value="6" />
                        <Tab label="Contact" value="7" />
                        <Tab label="Social Acitivities" value="8" />
                        <Tab label="Category" value="9" />
                        <Tab label="Tags" value="10" />
                        <Tab label="Foods" value="11" />
                      </TabList>
                    </Box>
                    <TabPanel value="1">{temple.description}</TabPanel>
                    <TabPanel value="2">{temple.history}</TabPanel>
                    <TabPanel value="3">{temple.timings}</TabPanel>
                    <TabPanel value="4">{temple.besttimeofvisit}</TabPanel>
                    <TabPanel value="5">{temple.smalldescription}</TabPanel>
                    <TabPanel value="6">{temple.rulesandregulations}</TabPanel>
                    <TabPanel value="7">{temple.contact}</TabPanel>
                    <TabPanel value="8">{temple.socialacitivities}</TabPanel>
                    <TabPanel value="9">{temple.category.name}</TabPanel>
                    <TabPanel value="10">{temple.tags}</TabPanel>
                    <TabPanel value="11">{temple.food}</TabPanel>
                  </TabContext>
                </Box>
              </div>
            </div>

            <div className="temple_details_right">
              {DefaultImages.map((image) => (
                <Templecards image={image} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Temple;
