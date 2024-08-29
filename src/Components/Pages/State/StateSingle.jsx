import React, { useEffect, useState } from 'react'
import './StateSingle.css'
import FancySlider from '../../Slider/FancySlider'
import FancyNav from '../../Nav/FancyNav';
import { axiosWithoutToken } from '../../../Api/AxiosInstance';
import { useParams } from 'react-router-dom';
import LongIntroCard from '../../Cards/LongIntroCard';

import StaticElevatedCards from '../../Cards/StaticElevatedCards'

const StateSingle = () => {

    let {id} = useParams();


    const [cities, setCities] = useState([]);
    const [selectedCities, setSelectedCities] = useState([]);
  

    // Function to get random elements from an array
    function getRandomElements(arr, count) {
      const shuffled = arr.slice().sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    }
  
    // Function to handle selecting random states
    const handleRandomStates = (allcities) => {
      const randomCities = getRandomElements(allcities, 5);
      setSelectedCities(randomCities); // Set the selected states
    };
  
    // Fetch the states data when the component mounts
    useEffect(() => {
      axiosWithoutToken
        .get(`/city/getallbystate/${id}`)
        .then((response) => {
          setCities(response.data.result);
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
        <FancySlider cities={selectedCities}/>

        <LongIntroCard  item={cities[0]?.state} />

        <StaticElevatedCards ItemData={cities}/>

        


      


    </div>
  )
}

export default StateSingle