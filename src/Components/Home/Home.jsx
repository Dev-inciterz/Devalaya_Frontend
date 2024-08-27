import React from "react";
import Navbar from "../Nav/Navbar";
import FancySlider from "../Slider/FancySlider";
import Jyotirlingas from "./Jyotirlingas";
import ChaarDhams from "./ChaarDhams";
import CulturalInsights from "./CulturalInsights";
import CustomCarousel from "../Slider/CustomCarousel";
import ShaktiPeeths from "./ShaktiPeeths";


const Home = () => {

  return (
    <div>
      <Navbar />
      <FancySlider />
      <Jyotirlingas />

      <ShaktiPeeths />



      <ChaarDhams />
      <CustomCarousel />
      <CulturalInsights />



    </div>
  );
};

export default Home;
