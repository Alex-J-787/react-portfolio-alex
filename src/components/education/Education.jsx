import React from "react";
import "./education.css";

const Education = () => {
  return (
    <div className="edu">
      <h2 className="center">Education</h2>
      <p>
        <h3>Graduate</h3>
        <strong>Hunter College, New York, NY</strong>
        <br></br>
        MS in Geoinformatics (Expected Graduation: December 2025)
        <br></br>
        <span className="smallfont">
          Relevant Coursework: Advanced Geoinformatics, Geospatial Database
          Management, Data Analysis & Visualization with R, Web GIS,
          Geocomputation, Quantitative Methods in Geography{" "}
        </span>
      </p>
      <p>
        <h3>Undergraduate</h3>
        <strong>Macalester College, St. Paul, MN</strong>
        <br></br>
        <em>BA in Political Science (December 2021)</em>
      </p>
    </div>
  );
};

export default Education;
