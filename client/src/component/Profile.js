import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Profile.css";

import { NavLink } from "react-router-dom";

function Profile(props) {
  const {userData}=props

  const [checkUserId,setCheckUserId]=useState(true)
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    image: "path/to/image.jpg",
    dateOfBirth: "DD-MM-YYYY",
    name: "Edit your Name",
    email: "Edit your password",
    phone: "Edit your phone",
    country: "Edit your profile",
  });
const submitHandler =(e)=>{
  e.preventDefault();
  setProfileData({image: e.target["image"].value,
  dateOfBirth:e.target["birthD"].value,
  name: e.target["name"].value,
  email: e.target["email"].value,
  phone: e.target["phone"].value,
  country:e.target["country"].value,})

}
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Perform save logic or API request here
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="link-list">
          <NavLink to="/home" className="link-name">
            Home
          </NavLink>
          <NavLink to="/about" className="link-name">
            About
          </NavLink>
          <NavLink to="/contact" className="link-name">
            Contact
          </NavLink>
        </div>
      </div>
      <div className="main-content">
        <div className="image-content">
          <img alt="coins" />
        </div>

        <div className="card-content">
          {" "}
          {/* personal card content */}
          <div className="card-heading">
            <div>
              <img className="profile-photo" src="" alt="Profile" />
            </div>

            <div className="card-heading-info">
              <div>My Name</div>
              <div>My Notes</div>
              <div>My Post</div>
            </div>
          </div>
          <div className="card-body">
            <div className="sectionOne profile-info">
              <h5>Personal data:</h5>
              <p>
                <b> Name:</b> {profileData.name}{" "}
              </p>
              <p>
                {" "}
                <b>Date of Birth:</b> {profileData.dateOfBirth}{" "}
              </p>
              <p>
                <b>Email:</b> {profileData.email}
              </p>
              <p>
                <b>Phone:</b> {profileData.phone}
              </p>
              <p>
                <b>Country:</b> {profileData.country}
              </p>{" "}
              <div className="row">
                <div className="col">
                  {isEditing ? (
                    <div>
                      <label>
                        Image:
                        <input
                          type="text"
                          name="image"
                          value={profileData.image}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </label>
                      <label>
                        Name:
                        <input
                          type="text"
                          name="name"
                          value={profileData.name}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </label>
                      <label>
                        Email:
                        <input
                          type="text"
                          name="email"
                          value={profileData.email}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </label>
                      <label>
                        Phone:
                        <input
                          type="text"
                          name="phone"
                          value={profileData.phone}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </label>
                      <label>
                        Country:
                        <input
                          type="text"
                          name="country"
                          value={profileData.country}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </label>
                      <button
                        className="btn btn-primary"
                        onClick={handleSaveClick}
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={handleEditClick}
                    >
                      Edit Profile
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="sectionTwo">My current info</div>

            <div className="sectionThree identity ">
              <h5>Verify your Identity:</h5>
              <input
                className="identity"
                type="text"
                placeholder="Enter your ID"
              />
              <button className="submit-identity btn-primary">Submit</button>
            </div>
          </div>
        </div>

        {/*className = "bottom-content" / */}
      </div>{" "}
      {/*className = "main-content" / */}
    </div> // className = "dashboard"
  );
}

export default Profile;
