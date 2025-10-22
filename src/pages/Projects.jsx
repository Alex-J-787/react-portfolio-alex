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
      <div className="container">
        <iframe
          width="80%"
          height="800"
          frameborder="0"
          src="https://observablehq.com/embed/892870edc930cde8@1348?cell=*"
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
