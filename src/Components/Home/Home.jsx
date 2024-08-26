import React from "react";
import Navbar from "../Nav/Navbar";
import FancySlider from "../Slider/FancySlider";
import Jyotirlingas from "./Jyotirlingas";
import ChaarDhams from "./ChaarDhams";
import CulturalInsights from "./CulturalInsights";
import CustomCarousel from "../Slider/CustomCarousel";
// import Cityhome from "../Pages/City/Cityhome";

const Home = () => {
  // const [alltemples, setAlltemples] = useState([]);

  // const fetchAllTemples = async () => {
  //   const webURL = `${process.env.REACT_APP_BACKEND_URL}/temple/getall`;
  //   const response = await axios.get(webURL);
  //   setAlltemples(response.data.result);
  // };

  // console.log("wertyuio", alltemples)

  return (
    <div>
      <Navbar />
      <FancySlider />
      <Jyotirlingas />
      <ChaarDhams />
      <CulturalInsights />
      <CustomCarousel />

      {/* <Cityhome /> */}


    </div>
  );
};

export default Home;
