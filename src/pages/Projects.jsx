import React from "react";
import Topnav from "../components/topnav/Topnav";
import Footer from "../components/footer/Footer";

const Projects = () => {
  return (
    <div>
      <div className="topnav">
        <Topnav />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <iframe
          width="60%"
          height="500"
          frameborder="0"
          src="https://observablehq.com/embed/48974462c7a5a01f?cell=*"
        ></iframe>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
