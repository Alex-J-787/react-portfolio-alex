import React from "react";
import { NavLink } from "react-router-dom";

const Topnav = () => {
  return (
    <nav>
      <div>
        <NavLink to="/home" className="topnav-text">
          Home
        </NavLink>
        <span className="topnav-text">|</span>
        <NavLink to="/about" className="topnav-text">
          About
        </NavLink>
        <span className="topnav-text">|</span>
        <NavLink to="/resume" className="topnav-text">
          Resume
        </NavLink>
        <span className="topnav-text">|</span>
        <NavLink to="/projects" className="topnav-text">
          Projects
        </NavLink>
      </div>
    </nav>
  );
};

export default Topnav;
