import React from "react";
import { NavLink } from "react-router-dom";

const Topnav = () => {
  return (
    <nav>
      <div>
        <NavLink to="/home" className="topnav-text">
          Home
        </NavLink>
        <NavLink to="/about" className="topnav-text">
          About
        </NavLink>
        <NavLink to="/resume" className="topnav-text">
          Resume
        </NavLink>
        <NavLink to="/projects" className="topnav-text">
          Projects
        </NavLink>
      </div>
    </nav>
  );
};

export default Topnav;
