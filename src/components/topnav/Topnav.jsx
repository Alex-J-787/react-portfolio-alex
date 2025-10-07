import React from "react";
import Navlink from "react-router-dom";

const Topnav = () => {
  return (
    <nav>
      <div>
        <a href="home" className="topnav-text">
          Home
        </a>
        <a href="about" className="topnav-text">
          About
        </a>
        <a href="resume" className="topnav-text">
          Resume
        </a>
        <a href="projects" className="topnav-text">
          Projects
        </a>
      </div>
    </nav>
  );
};

export default Topnav;
