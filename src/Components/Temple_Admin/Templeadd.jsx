import React, { useState } from "react";
import axios from "axios";
import "./Templeadd.css";

const TempleAdd = () => {
  const BackendUrl = process.env.REACT_APP_BACKEND_URL;

  console.log("BackendUrl", BackendUrl);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    timings: "",
    besttimeofvisit: "",
    rulesandregulations: "",
    smalldescription: "",
    contactaddresslineone: "",
    contactaddresslinetwo: "",
    contactphonenumers: [], // Initialize as an empty array
    contactemails: [], // Initialize as an empty array
    history: "",
    socialacitivities: "",
    category: "",
    tags: "",
    food: "",
    city: "",
  });
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (
      name === "contactaddresslineone" ||
      name === "contactaddresslinetwo" ||
      name === "contactphonenumers" ||
      name === "contactemails"
    ) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleImageChange = (e) => {
    // Convert the FileList object to an array and update the state
    const imageFiles = Array.from(e.target.files);
    setImages(imageFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();

      formDataToSend.append("name", formData.name);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("category", formData.category);
      formDataToSend.append("timings", formData.timings);
      formDataToSend.append("besttimeofvisit", formData.besttimeofvisit);
      formDataToSend.append(
        "rulesandregulations",
        formData.rulesandregulations
      );
      formDataToSend.append("smalldescription", formData.smalldescription);
      // formDataToSend.append("contact", contactString);

      formDataToSend.append("addresslineone", formData.contactaddresslineone);
      formDataToSend.append("addresslinetwo", formData.contactaddresslinetwo);
      formDataToSend.append("phonenumbers", formData.contactphonenumers);
      formDataToSend.append("emails", formData.contactemails);

      formDataToSend.append("history", formData.history);
      formDataToSend.append("socialacitivities", formData.socialacitivities);
      formDataToSend.append("tags", formData.tags);
      formDataToSend.append("food", formData.food);
      formDataToSend.append("city", formData.city);

      images.forEach((image) => formDataToSend.append("temple_imgs", image));

      const WebUrl = `${BackendUrl}/temple/add`;
      const token = process.env.REACT_APP_ADMIN_TOKEN;

      console.log("FormDataToSend:", formDataToSend);
      const response = await axios.post(WebUrl, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      // Add further handling for success
    } catch (error) {
      console.error("Error:", error);
      // Add further error handling
    }
  };

  return (
    <div className="temple_add_whole">
      <h2>Add Temple</h2>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TempleAdd;
