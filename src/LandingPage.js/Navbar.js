// Navbar.js

import React, { useState } from "react";
import Sidebar from "./SideBar";
import "../Style/Navbar.css";
import logo2 from "../Style/logo2.jpeg";
import contact from "../Style/contact.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      {/* <img src={logo2} alt= "Logo" className='logo'></img> */}
      <p className="text-2xl">PORTFOLIO</p>
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About </Link>
        <Link className="desktopMenuListItem">Portfolio</Link>
        <Link className="desktopMenuListItem">Skills</Link>
      </div>
      <button className="desktopMenuBth">
        {" "}
        <img src={contact} alt="contact" className="desktopMenuImg" />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
