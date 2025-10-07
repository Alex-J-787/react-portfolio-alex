import React from "react";

const Topnav = () => {
  return (
    <nav>
      <div>
        <a className="topnav-text">Home</a>
        <a className="topnav-text">About</a>
        <a href="resume" className="topnav-text">
          Resume
        </a>
        <a className="topnav-text">Projects</a>
      </div>
    </nav>
  );
};

export default Topnav;
