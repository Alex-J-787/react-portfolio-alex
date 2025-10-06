import React from "react";

const Projects = () => {
  return (
    <div className="body">
      <h2>Academic Projects</h2>
      <ul>
        <li>
          NYC Subway System Accessibility Analysis – Mapped service areas using
          GIS tools (QGIS) to identify suitable locations where transportation
          planners could site new subway stations. Utilized data on hundreds of
          stations and millions of potential transit users.
        </li>
        <li>
          Community Gardens & Public Housing Dashboard – Developed an
          interactive dashboard using Leaflet. Visualized data to assess the
          correlation between socioeconomic characteristics and access to green
          spaces, using JavaScript to call relevant open source APIs
        </li>
        <li>
          Floodplain & Socioeconomic Analysis – Analyzed the intersection of
          flood risk and social vulnerability in NYC across hundreds of
          neighborhoods, using ArcGIS Pro and other ESRI products for data
          management and analysis.
        </li>
      </ul>
    </div>
  );
};

export default Projects;
