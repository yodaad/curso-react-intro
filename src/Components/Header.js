import React from "react";
import "../Styles/Header.css";
import logo from "../Assets/Logo.png";

function Header({ onOpenInfoModal }) {
  return (
    <div className="infoContainer">
      <img src={logo} alt="logo" />
      <button className="infoButton" onClick={onOpenInfoModal}></button>
    </div>
  );
}

export { Header };
