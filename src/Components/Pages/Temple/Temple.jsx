import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../Loader/Loader";
import Templebanner from "./Templebanner";
import "./Temple.css";

import CustomTemplateImage from "../../Assets/Cstom_Teple_one.jpg";
import CSTMIMG from "../../Assets/Custom_Temple_Three.jpg";
import cstmimgthree from "../../Assets/Custom_Temple_Two.jpg";
import Bus from "../../Assets/bus.jpg";
import Train from "../../Assets/train.jpg";
import Flight from "../../Assets/flight.jpg";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Templecards from "./Templecards";
import Affiliatecards from "./Affiliatecards";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import Navbar from "../../Nav/Navbar";
import Nearbytemples from "./Nearbytemples";
import Restaurantcards from "../Foods/Restaurantcards";

import vegrest from "../../Assets/vegrest.jpeg";

import adhacafe from "../../Assets/tea.jpeg";
import BYDD from "../../Assets/BYDD.jpeg";
import Howtoreach from "../Howtoreach/Howtoreach";
import Stay from "../Stay/Stay";

const Temple = () => {
  const { id } = useParams();

  const [temple, setTemple] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("1");
  const [showMoreHistory, setShowMoreHistory] = useState(false);

  const [citytemples, setCitytemples] = useState([]);

  console.log("ewrtyuiop", citytemples);

  const DefaultImages = [
    CustomTemplateImage,
    CSTMIMG,
    cstmimgthree,
    CustomTemplateImage,
    CSTMIMG,
    cstmimgthree,
  ];

  const VegRests = [
    {
      name: "1916 Cafe & Restaurant",
      img: vegrest,
    },
    {
      name: "Behind Yellow Doors Diner",
      img: BYDD,
    },
    {
      name: "Aadha-Aadha Café ",
      img: adhacafe,
    },

    {
      name: "1916 Cafe & Restaurant",
      img: vegrest,
    },
    {
      name: "Behind Yellow Doors Diner",
      img: BYDD,
    },
    {
      name: "Aadha-Aadha Café ",
      img: adhacafe,
    },

    {
      name: "1916 Cafe & Restaurant",
      img: vegrest,
    },
    {
      name: "Behind Yellow Doors Diner",
      img: BYDD,
    },
    {
      name: "Aadha-Aadha Café ",
      img: adhacafe,
    },
  ];

  const HowToReach = [
    {
      title: "Bus",
      images: Bus,
      desc: "a large motor vehicle designed to carry passengers usually along a fixed route according to a schedule. took the bus to work. double-decker buses.",
    },

    {
      title: "Train",
      images: Train,
      desc: "a type of transport that is pulled by an engine along a railway line. A train is divided into sections for people (carriages and coaches) and for goods (wagons) ",
    },

    {
      title: "Flight",
      images: Flight,
      desc: "a passing through the air or through space outside the earth's atmosphere. flight of an arrow. the flight of a rocket to the moon. b. : the distance covered in such a flight.",
    },
  ];

  // const AffiliateCards = [CustomTemplateImage, CSTMIMG, cstmimgthree];

  const fetchTempleData = async () => {
    console.warn("i ahev been called");
    try {
      const webURL = `${process.env.REACT_APP_BACKEND_URL}/temple/get/${id}`;
      const response = await axios.get(webURL);
      // console.log("responseresponseresponseresponseresponse", response);
      return response.data.result;
    } catch (error) {
      console.log("The Error", error);
    }
  };

  const FetchTemplesByCity = async (ctyid) => {
    try {
      const webURL = `${process.env.REACT_APP_BACKEND_URL}/temple/gettemplesbycity/${ctyid}`;
      console.error(webURL);
      const response = await axios.get(webURL);
      return response.data.result;
    } catch (error) {
      console.error("Error in FetchTemplesByCity:", error);
      throw error; // Re-throw the error to handle it in useEffect
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    fetchTempleData()
      .then((data) => {
        if (data) {
          setLoading(false);
          setTemple(data);
          // Now that temple data is set, call FetchTemplesByCity
          FetchTemplesByCity(data.city._id)
            .then((temples) => {
              const templeToRemoveId = id; // Replace "your_specific_id_here" with the actual _id of the temple you want to filter out
              const filteredTemples = temples.filter(
                (temple) => temple._id !== templeToRemoveId
              );
              console.log(filteredTemples);
              const selectedTemples = filteredTemples.slice(0, 3);
              setCitytemples(selectedTemples);
            })
            .catch((error) => {
              console.error("Error in FetchTemplesByCity:", error);
              // Handle error if necessary
            });
        }
      })
      .catch((error) => {
        setLoading(false); // Handle loading state even if there's an error
        console.error("Error in fetchTempleData:", error);
        // Handle error if necessary
      });

    // eslint-disable-next-line
  }, [id]);

  const toggleHistory = () => {
    setShowMoreHistory(!showMoreHistory);
  };

  const renderHistory = () => {
    const paragraphs = temple.history.split("</p>").filter(Boolean); // Split history into paragraphs
    const initialParagraphs = paragraphs.slice(0, 3); // Display only the first 3 paragraphs initially

    if (!showMoreHistory) {
      return (
        <>
          {initialParagraphs.map((paragraph, index) => (
            <p
              key={index}
              dangerouslySetInnerHTML={{ __html: paragraph + "</p>" }}
            />
          ))}
          {paragraphs.length > 3 && (
            <span
              onClick={toggleHistory}
              className="toggle-text"
              style={{ fontWeight: "700", cursor: "pointer" }}
            >
              ... (more)
            </span>
          )}
        </>
      );
    } else {
      return (
        <>
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              dangerouslySetInnerHTML={{ __html: paragraph + "</p>" }}
            />
          ))}
          <span
            onClick={toggleHistory}
            className="toggle-text"
            style={{ fontWeight: "700", cursor: "pointer" }}
          >
            {" "}
            (less)
          </span>
        </>
      );
    }
  };

  // console.log("eicbvkewjvbwkjlcbnkw vcjhb noelb rk", temple.category);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="temple_mainpage">
          <Navbar />
          <Templebanner templeimages={temple.pictures} title={temple.name} city={temple.city.title} />

          

          <div className="temple_details">
            <div className="temple_details_left">
              {/* <h2 className="heading_main mt-3">{temple.city.title}</h2> */}

              <div className="temple_details_brief">
                <Box sx={{ width: "100%", typography: "body1" }}>
                  <TabContext value={value} >
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                      <TabList
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="lab API tabs example"
                        className="temple_capsule_tab"
                      >
                        <Tab label="History" value="1" />
                        <Tab label="Information" value="2" />
                        <Tab label="Timings" value="3" />

                        <Tab label="Foods" value="4" />

                        <Tab label="How to reach" value="5" />

                        <Tab label="Get Your Stay" value="6" />


                      </TabList>
                    </Box>
                    <TabPanel value="2">
                      {" "}
                      <div>
                        <p>{temple.description}</p>

                        <span className="temple_tags">
                          {temple.category.name}
                        </span>

                        {temple.tags.map((tag) => (
                          <span className="temple_tags">{tag}</span>
                        ))}

                        <div className="temple_details_mid_section">
                          <strong className="pt-5">Social Activities</strong>
                          <p>{temple.socialacitivities}</p>
                        </div>

                        <div className="temple_contact">
                          <strong>Contact:</strong>
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
                              <p>
                                {" "}
                                <PhoneIcon /> {phnumber}
                              </p>
                            ))}

                          {temple.contact &&
                            temple.contact.emails &&
                            temple.contact.emails.map((email) => (
                              <p>
                                {" "}
                                <MailIcon />
                                <a href={`mailto:${email}`}>{email}</a>
                              </p>
                            ))}
                        </div>
                      </div>
                      <div className="temple_details_mid_section">
                        <strong>Rules & Regulations:</strong>
                        <p>{temple.rulesandregulations}</p>
                      </div>

                      <hr className="temple_affltlnks_hr" />

                    </TabPanel>
                    <TabPanel value="1">
                      <div>
                        <strong>History:</strong> <div>{renderHistory()}</div>
                      </div>
                      <hr className="temple_affltlnks_hr" />

                    </TabPanel>
                    <TabPanel value="3">
                      {" "}
                      <div>
                        <strong>Timings:</strong>

                        <p>{temple.timngs}</p>

                        <strong>Best Time To Visit: </strong>

                        <p>{temple.besttimeofvisit}</p>
                      </div>{" "}

                    </TabPanel>

                    <TabPanel value="4">
                      <div>
                        <Restaurantcards
                          vegrest={VegRests}
                          jainrest={VegRests}
                          nonvegrest={VegRests}
                        />
                      </div>
                    </TabPanel>


                    <TabPanel value="5">
                      <div>
                        <Howtoreach temple={temple}
                        />
                      </div>
                    </TabPanel>

                    <TabPanel value="6">
                      <div>
                        <Stay 
                        />
                      </div>
                    </TabPanel>
                  </TabContext>
                </Box>
              </div>

              <div className="templeafflt_card_nerby_place">

                  <p className="affliate_card_heading">Nearby Places</p>
                  <div className="templeafflt_cards">
                    {citytemples.map((temple) => (
                      <Nearbytemples temple={temple} />
                    ))}
                  </div>
               
              </div>

              <hr className="temple_affltlnks_hr" />

              <p className="affliate_card_heading">How To Reach</p>

              <div className="templeafflt_cards">
                {HowToReach.map((element) => (
                  <Affiliatecards howtoreach={element} />
                ))}
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
