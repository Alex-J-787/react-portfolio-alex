import React from "react";
import "./contact.css";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div className="contact">
      <h3 style={{ marginBottom: "0px" }}>Contact</h3>
      <p className="largefont">
        <a href="mailto:ahd.jacobson@gmail.com" className="link-image">
          <SiGmail />
        </a>
      </p>
    </div>
  );
};

export default Contact;
