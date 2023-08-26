import React from "react";
import github from "../Assets/github.png";
import linkedin from "../Assets/linkedin.png";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="footerContainer">
      <p>Developed by Diego Arango</p>
      <a href="https://www.linkedin.com/in/diegoarango/">
        <img className="linkedin" src={linkedin} alt="linkedin" />
      </a>
      <a href="https://github.com/yodaad">
        <img className="github" src={github} alt="github" />
      </a>
    </div>
  );
}

export { Footer };
