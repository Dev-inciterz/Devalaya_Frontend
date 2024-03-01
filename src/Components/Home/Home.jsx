import React from "react";
import Navbar from "../Nav/Navbar";
import Cityhome from "../Pages/City/Cityhome";

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

      <Cityhome />


    </div>
  );
};

export default Home;
