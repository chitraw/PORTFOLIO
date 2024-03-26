// Sidebar.js

import React, { useState } from 'react';
import { FaHome, FaUser, FaClipboardList, FaEnvelope } from 'react-icons/fa'; // Import desired icons
import '../Style/SideBar.css';

const Sidebar = () => {


  return (
    <div className="sidebar">
    
      <ul  className='style_icon'>
        <li><a href="#home"><FaHome /> </a></li>
        <li><a href="#about"><FaUser /> </a></li>
        <li><a href="#projects"><FaClipboardList /> </a></li>
        <li><a href="#contact"><FaEnvelope /> </a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
