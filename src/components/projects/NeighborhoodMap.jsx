import React from "react";
import "./neighborhoodMap.css";

const NeighborhoodMap = () => {
  return (
    <div className="map-text-container">
      <div>
        <iframe
          width="800"
          height="800"
          frameborder="0"
          src="https://observablehq.com/embed/892870edc930cde8@1348?cell=*"
          className="container"
        ></iframe>
      </div>
      <div className="container">
        <p> Text test text test</p>
      </div>
    </div>
  );
};

export default NeighborhoodMap;
