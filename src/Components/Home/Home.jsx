import React from "react";
import FancySlider from "../Slider/FancySlider";
import Jyotirlingas from "./Jyotirlingas";
import ChaarDhams from "./ChaarDhams";
import CulturalInsights from "./CulturalInsights";
import CustomCarousel from "../Slider/CustomCarousel";
import ShaktiPeeths from "./ShaktiPeeths";
import FancyNav from "../Nav/FancyNav";

const Home = () => {
  return (
    <div>
      <FancyNav />
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
