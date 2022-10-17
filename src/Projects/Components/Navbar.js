import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import "../Styles/Navbar.css";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [icon, seticon] = useState(false);
  
  return (
    <div className="navbar">
      <div>
        <img src={logo} className="border rounded-md h-14 w-20 p-1" alt="" />
        <p className="logo_p text-red-600 font-bold"><span>High </span> Drinks</p>
      </div>
      {/*List*/}
      <ul
        className={icon ? "menu active" : "menu"}
        onclick={() => seticon(!icon)}
      >
        {/* <Link to="/">Login</Link> */}
        <li><Link to="/home" onClick={() => seticon(!icon)}>Home</Link></li>
        <li><Link to="/address" onClick={() => seticon(!icon)}>Masterclass</Link></li>
        <li><Link to="/about" onClick={() => seticon(!icon)}>Party Box</Link></li>
        <li><Link to="/owner" onClick={() => seticon(!icon)}>Owner's Message</Link></li>
        <li><Link to="/contact" onClick={() => seticon(!icon)}>Contact Us</Link></li>
      </ul>

      <div className="menu__icon">
        <span className="navbar__icon" onClick={() => seticon(!icon)}>
          {!icon ? <FaBars /> : <FaTimes />}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
