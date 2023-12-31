import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./Profile.css";
import ProfilePhoto from "./images/profile-free.png";
import { NavLink, Link, useNavigate, useParams } from "react-router-dom";
import StorContext from "../context";
import axios from "axios";
import CreateAccount from "./CreateAccount";
import MyProfileForme from "./MyProfileForme";


function Profile() {
  const {logoutHandler} = useContext(StorContext);

  return (
    <main className="main">
     
      <div className="">
        <div className="card-content">
          <div className="card-heading">
           <div className="card-heading-links">
           <div><Link to="/my-wallet"style={{textDecoration: 'none'}} className="link-name">
                My Wallet
              </Link></div>
              <div> <Link to="/trading-live" style={{textDecoration: 'none'}}className="link-name">
                My live Trading
              </Link></div>
             <div><Link to="/" style={{textDecoration: 'none'}}className=" link-name profile-logout" onClick={logoutHandler} >
              <i className="fas fa-times-circle"></i> 
              </Link></div>
              
            
            </div>
          </div>
         <div className="">  <MyProfileForme /></div>
        
        </div>
      </div>
    </main>
  );
}
export default Profile;
