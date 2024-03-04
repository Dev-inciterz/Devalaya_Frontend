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
import Affiliatecards from "./Affiliatecards";
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import Navbar from "../../Nav/Navbar";

const Temple = () => {
  const { id } = useParams();

  const [temple, setTemple] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("1");
  const [showMoreHistory, setShowMoreHistory] = useState(false);

  const DefaultImages = [
    CustomTemplateImage,
    CSTMIMG,
    cstmimgthree,
    CustomTemplateImage,
    CSTMIMG,
    cstmimgthree,
  ];

  const AffiliateCards = [CustomTemplateImage, CSTMIMG, cstmimgthree];

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

    // eslint-disable-next-line 
  }, [id]);

  const toggleHistory = () => {
    setShowMoreHistory(!showMoreHistory);
  };

  const renderHistory = () => {
    if (temple.history && temple.history.split(" ").length > 50) {
      if (!showMoreHistory) {
        return (
          <>
            {temple.history.split(" ").slice(0, 50).join(" ")}
            <span
              onClick={toggleHistory}
              className="toggle-text"
              style={{ fontWeight: "700" }}
            >
              ... (more)
            </span>
          </>
        );
      } else {
        return (
          <>
            {temple.history}
            <span
              onClick={toggleHistory}
              className="toggle-text"
              style={{ fontWeight: "700" }}
            >
              {" "}
              (less)
            </span>
          </>
        );
      }
    } else {
      return temple.history;
    }
  };

  console.log("eicbvkewjvbwkjlcbnkw vcjhb noelb rk", temple.category);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="temple_mainpage">
          <Navbar />
          <Templebanner templeimages={temple.pictures} title={temple.name} />

          <div className="temple_details">
            <div className="temple_details_left">
              <h2 className="temple_name">
                {temple.name}
              </h2>
              <h3> {temple.city.title}</h3>

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
                        <Tab label="Information" value="1" />
                        <Tab label="History" value="2" />
                        <Tab label="Timings" value="3" />
                        <Tab label="Best Time To Visit" value="4" />
                        {/* <Tab label="Small Description" value="5" /> */}
                        <Tab label="Social Acitivities" value="8" />
                        {/* <Tab label="Category" value="9" /> */}
                        <Tab label="Foods" value="11" />
                        <Tab label="Contact" value="12" />
                        <Tab label="Rules and Regulations" value="6" />
                      </TabList>
                    </Box>
                    <TabPanel value="1">
                      {" "}
                      <div>
                        <p>{temple.description}</p>

                        <span className="temple_tags">{temple.category.name}</span>

                        {temple.tags.map((tag) => (
                          <span className="temple_tags">{tag}</span>
                        ))}

                        <span></span>
                      </div>{" "}
                    </TabPanel>
                    <TabPanel value="2">{renderHistory()}</TabPanel>
                    <TabPanel value="3">{temple.timings}</TabPanel>
                    <TabPanel value="4">{temple.besttimeofvisit}</TabPanel>
                    {/* <TabPanel value="5">{temple.smalldescription}</TabPanel> */}
                    <TabPanel value="6">{temple.rulesandregulations}</TabPanel>
                    <TabPanel value="8">{temple.socialacitivities}</TabPanel>
                    {/* <TabPanel value="9">{temple.category.name}</TabPanel> */}
                    <TabPanel value="11">{temple.food}</TabPanel>
                    <TabPanel value="12">
                      <div className="temple_contact">
                        <p className="templeaddress_lineone">
                          {temple.contact.addresslineone}
                        </p>
                        <p className="templeaddress_lineone">
                          {temple.contact.addresslinetwo
                            ? temple.contact.addresslinetwo
                            : ""}
                        </p>
                        {temple.contact &&
                          temple.contact.phoneNumbers &&
                          temple.contact.phoneNumbers.map((phnumber) => (
                            <p> <PhoneIcon /> {phnumber}</p>
                          ))}

                        {temple.contact &&
                          temple.contact.emails &&
                          temple.contact.emails.map((email) => (
                            <p> <MailIcon />
                          <a href={`mailto:${email}`}>{email}</a>
                            </p>
                          ))}
                      </div>
                    </TabPanel>
                  </TabContext>
                </Box>
              </div>

              <div className="templeafflt">
                <p className="affliate_card_heading">How To Reach</p>

                <div className="templeafflt_cards">
                  {AffiliateCards.map((image) => (
                    <Affiliatecards image={image} />
                  ))}
                </div>
              </div>

              <hr className="temple_affltlnks_hr" />

              <div className="templeafflt">
                <p className="affliate_card_heading">Similar Places</p>

                <div className="templeafflt_cards">
                  {AffiliateCards.map((image) => (
                    <Affiliatecards image={image} />
                  ))}
                </div>
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
