import React, { useEffect, useState } from 'react';
import './State.css';
import FancyNav from '../../Nav/FancyNav';
import FancySlider from '../../Slider/FancySlider';
import { axiosWithoutToken } from '../../../Api/AxiosInstance';
import StaticElevatedCards from '../../Cards/StaticElevatedCards';
import BrandCard from '../../Cards/BrandCard';
import LongCards from '../../Cards/LongCards';

const StatesHome = () => {
  const [states, setStates] = useState([]);
  const [selectedStates, setSelectedStates] = useState([]);

  // Function to get random elements from an array
  function getRandomElements(arr, count) {
    const shuffled = arr.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  // Function to handle selecting random states
  const handleRandomStates = (allstates) => {
    const randomStates = getRandomElements(allstates, 5);
    setSelectedStates(randomStates); // Set the selected states
  };

  // Fetch the states data when the component mounts
  useEffect(() => {
    axiosWithoutToken
      .get('/state/getall')
      .then((response) => {
        console.log('All states:', response);
        setStates(response.data.result);
        handleRandomStates(response.data.result); // Call to select random states
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
      // eslint-disable-next-line
  }, []);

  

  return (
    <div>
      <FancyNav />
      <FancySlider selectedStates={selectedStates} />
      <StaticElevatedCards ItemData={states} />
      <BrandCard />
      <LongCards   />
    </div>
  );
};

export default StatesHome;
