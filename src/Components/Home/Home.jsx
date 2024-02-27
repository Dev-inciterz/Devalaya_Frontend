import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../Nav/Navbar'

const Home = () => {
const [alltemples , setAlltemples] = useState([])

const fetchAllTemples = async () => {
  const webURL = `${process.env.REACT_APP_BACKEND_URL}/temple/getall`;
  const response = await axios.get(webURL);
   setAlltemples(response.data.result);
};


useEffect(() => {

  fetchAllTemples()
  
}, [alltemples])

// console.log("wertyuio", alltemples)





  return (
    <div>
      <Navbar />

      <h1 className='container m-3'>The Temples</h1>

      {alltemples.map( (temple)=> (
        <div className="alltmpleslistings container" key={temple._id}>

        <p >{temple.name}</p>
        </div>
      ))}


    </div>
  )
}

export default Home