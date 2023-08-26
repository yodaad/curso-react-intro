import React from "react";
import "../Styles/Info.css";
import logo from "../Assets/Logo.png";

function Info() {
  return (
    <div className="infoContainer">
      <img src={logo} alt="logo" />
      <button className="infoButton"></button>
    </div>
  );
}

export { Info };
