import React, { useEffect, useState } from "react";
import FancySlider from "../Slider/FancySlider";
import Jyotirlingas from "./Jyotirlingas";
import ChaarDhams from "./ChaarDhams";
import CulturalInsights from "./CulturalInsights";
import CustomCarousel from "../Slider/CustomCarousel";
import ShaktiPeeths from "./ShaktiPeeths";
import FancyNav from "../Nav/FancyNav";
import { axiosWithoutToken } from "../../Api/AxiosInstance";

const Home = () => {


  const [randomTemples, setRandomTemples] = useState([]);

  useEffect(() => {
    axiosWithoutToken
      .get("/temple/gettemplesrandom")
      .then((response) => {
        console.log("the all RandomTemples", response);
        setRandomTemples(response.data.result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);



  return (
    <div>
      <FancyNav />
      <FancySlider />
      <Jyotirlingas />

      <ShaktiPeeths />

      <ChaarDhams />
      <CustomCarousel  temples={randomTemples} compheading={'Temples To Visit During Winter (Random now)'}/>
      <CulturalInsights />
    </div>
  );
};

export default Home;
