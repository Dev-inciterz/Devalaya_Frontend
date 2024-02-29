import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Nav/Navbar'

const Home = () => {
const [alltemples , setAlltemples] = useState([])
const [allcities , setAllcities] = useState([])



const fetchAllTemples = async () => {
  const webURL = `${process.env.REACT_APP_BACKEND_URL}/temple/getall`;
  const response = await axios.get(webURL);
   setAlltemples(response.data.result);
};


const fetchAllCities = async () => {
  const webURL = `${process.env.REACT_APP_BACKEND_URL}/city/getall`;
  const response = await axios.get(webURL);
  setAllcities(response.data.result);
};


useEffect(() => {

  fetchAllTemples()
  fetchAllCities()
  
}, [alltemples])

// console.log("wertyuio", alltemples)

// console.log("wertyuio", allcities)






  return (
    <div>
      <Navbar />

      <h1 className='container m-3'>The Temples</h1>

      {alltemples.map( (temple)=> (
        <div className="alltmpleslistings container" key={temple._id}>

        <p >{temple.name}</p>
        </div>
      ))}


<h1 className='container m-3'>The Cities</h1>

{allcities.map( (city)=> (
  <div className="alltmpleslistings container" key={city._id}>
  <Link to={`/city/${city._id}`}>{city.title}</Link>
  </div>
))}

    </div>
  )
}

export default Home