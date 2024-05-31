import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Templeupdate = (props) => {
  const location = useLocation();
  const temple = location.state;

  const [formData, setFormData] = useState({
    name: temple.name,
    description: temple.description,
    timings: temple.timings,
    besttimeofvisit: temple.besttimeofvisit,
    rulesandregulations: temple.rulesandregulations,
    smalldescription: temple.smalldescription,
    contactaddresslineone: temple.contactaddresslineone,
    contactaddresslinetwo: temple.contactaddresslinetwo,
    contactphonenumers: temple.contactphonenumers,
    contactemails: temple.contactemails,
    history: temple.history,
    socialacitivities: temple.socialacitivities,
    category: temple.category,
    tags: temple.tags,
    food: temple.food,
    city: temple.city,
  });

  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch and update images if required
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const imageFiles = Array.from(e.target.files);
    setImages(imageFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      images.forEach((image) => formDataToSend.append("temple_imgs", image));

      // Add your API endpoint URL for updating temple details
      const WebUrl = `${process.env.REACT_APP_BACKEND_URL}/temple/update/${temple.id}`;
      const token = process.env.REACT_APP_ADMIN_TOKEN;

      const response = await axios.put(WebUrl, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      // Handle success response
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

  return (
    <div className="temple_add_whole">
      <h2>Update Temple</h2>
      <form onSubmit={handleSubmit}>

      <div className="fromdatatempleinpts">
          <label>Upload Pictures:</label>
          <input
            type="file"
            name="temple_imgs"
            onChange={handleImageChange}
            accept="image/*"
            multiple
          />
        </div>
        
        <div className="fromdatatempleinpts">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="fromdatatempleinpts">
          <label>Information:</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="fromdatatempleinpts">
          <label>Timings:</label>
          <input
            type="text"
            name="timings"
            value={formData.timings}
            onChange={handleChange}
            required
          />
        </div>


        <div className="fromdatatempleinpts">
          <label>Best Time To Visit:</label>
          <input
            type="text"
            name="besttimeofvisit"
            value={formData.besttimeofvisit}
            onChange={handleChange}
            required
          />
        </div>

        <div className="fromdatatempleinpts">
          <label>Rules and Regulations:</label>
          <input
            type="text"
            name="rulesandregulations"
            value={formData.rulesandregulations}
            onChange={handleChange}
            required
          />
        </div>


        <div className="fromdatatempleinpts">
          <label>Contact Address Line One:</label>
          <input
            type="text"
            name="contactaddresslineone"
            value={formData.contactaddresslineone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="fromdatatempleinpts">
          <label>Contact Address Line Two:</label>
          <input
            type="text"
            name="contactaddresslinetwo"
            value={formData.contactaddresslinetwo}
            onChange={handleChange}
          />
        </div>

        <div className="fromdatatempleinpts">
          <label>Contact Phone Numbers (separated by commas):</label>
          <input
            type="text"
            name="contactphonenumers"
            value={formData.contactphonenumers}
            onChange={handleChange}
            required
          />
        </div>


        <div className="fromdatatempleinpts">
          <label>Contact Emails (separated by commas):</label>
          <input
            type="text"
            name="contactemails"
            value={formData.contactemails}
            onChange={handleChange}
            required
          />
        </div>

        <div className="fromdatatempleinpts">
          <label>History:</label>
          <input
            type="text"
            name="history"
            value={formData.history}
            onChange={handleChange}
            required
          />
        </div>

        <div className="fromdatatempleinpts">
          <label>Social Activities:</label>
          <input
            type="text"
            name="socialacitivities"
            value={formData.socialacitivities}
            onChange={handleChange}
            required
          />
        </div>


        <div className="fromdatatempleinpts">
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>

        <div className="fromdatatempleinpts">
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="fromdatatempleinpts">
          <label>Foods:</label>
          <input
            type="text"
            name="food"
            value={formData.food}
            onChange={handleChange}
            required
          />
        </div>


        <div className="fromdatatempleinpts">
          <label>Tags:</label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            required
          />
        </div>

        {/* Include similar input fields for other temple details */}



        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Templeupdate;
