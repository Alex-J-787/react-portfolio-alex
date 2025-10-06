import React from "react";
import "./contact.css";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div className="contact">
      <h3 style={{ marginBottom: "0px" }}>Contact</h3>
      <p className="largefont">
        <a href="ahd.jacobson@gmail.com">
          <SiGmail />{" "}
        </a>
      </p>
    </div>
  );
};

export default Contact;
