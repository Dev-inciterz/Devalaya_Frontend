import React from "react";
import Navbar from "../Nav/Navbar";
import FancySlider from "../Slider/FancySlider";
import Jyotirlingas from "./Jyotirlingas";
import ChaarDhams from "./ChaarDhams";
import CulturalInsights from "./CulturalInsights";
import CustomCarousel from "../Slider/CustomCarousel";


const Home = () => {

  return (
    <div>
      <Navbar />
      <FancySlider />
      <Jyotirlingas />
      <ChaarDhams />
      <CulturalInsights />
      <CustomCarousel />



    </div>
  );
};

export default Home;
