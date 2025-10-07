import React from "react";
import Topnav from "../components/topnav/Topnav";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="topnav">
        <Topnav />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
