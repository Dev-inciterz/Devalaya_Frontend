import React from "react";
import Logo from "../Assets/Nav/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaSearch, FaRegHeart, FaUserAlt } from "react-icons/fa";
import { BsSuitcaseFill } from "react-icons/bs";
import { HiBars3CenterLeft } from "react-icons/hi2";
const Navbar = () => {
  const states = [
    { id: 1, name: "Goa" },
    { id: 2, name: "Bihar" },
    { id: 3, name: "Delhi" },
    { id: 4, name: "Kerala" },
    { id: 5, name: "Assam" },
    { id: 6, name: "Sikkim" },
    { id: 7, name: "Odisha" },
    { id: 8, name: "Punjab" },
    { id: 9, name: "Haryana" },
    { id: 10, name: "Tripura" },
    { id: 11, name: "Gujarat" },
    { id: 12, name: "Manipur" },
    { id: 13, name: "Mizoram" },
    { id: 14, name: "Nagaland" },
    { id: 15, name: "Karnataka" },
    { id: 16, name: "Rajasthan" },
    { id: 17, name: "Jharkhand" },
    { id: 18, name: "Meghalaya" },
    { id: 19, name: "Telangana" },
    { id: 20, name: "Tamil Nadu" },
    { id: 21, name: "West Bengal" },
    { id: 22, name: "Uttarakhand" },
    { id: 23, name: "Maharashtra" },
    { id: 24, name: "Chhattisgarh" },
    { id: 25, name: "Uttar Pradesh" },
    { id: 26, name: "Andhra Pradesh" },
    { id: 27, name: "Madhya Pradesh" },
    { id: 28, name: "Jammu & Kashmir" },
    { id: 29, name: "Himachal Pradesh" },
    { id: 30, name: "Arunachal Pradesh" },
  ];

  return (
    <div className="container-nav">
      <div className="nav">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search Temples..."
            className="searchbar-input"
          />
          <FaSearch className="serachIcon" />
        </div>
      </div>

      <div className="BOX">
        <div className="statelist">
          <div className="states-text">

        <HiBars3CenterLeft className="favrtIcon" /> <p>States</p>
          </div>
          <div className="statesmodal">
            <div className="statesmodal-items">
              {states.map((state) => (
                <p key={state.id}>
                  <Link to="/">{state.name}</Link>
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="login">
        <FaUserAlt className="favrtIcon"/>
        <p>Login / Signup</p>
        </div>
        <div className="favourites">
        <FaRegHeart className="favrtIcon" /> <p>Favourites</p>
        </div>
        <div className="booking">
        <BsSuitcaseFill className="favrtIcon"/> <p>My Bookings</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
