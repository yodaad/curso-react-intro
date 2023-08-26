import React from "react";
import "../Styles/Header.css";
import logo from "../Assets/Logo.png";

function Header() {
  return (
    <div className="infoContainer">
      <img src={logo} alt="logo" />
      <button className="infoButton"></button>
    </div>
  );
}

export { Header };
