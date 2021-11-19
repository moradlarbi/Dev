import React from "react";
import "../styles/app.css";
import "../styles/home.css";
import logo from "../assets/logo.png";
import logol from "../assets/logol.svg";
import background from "../assets/background.svg";

export default function Home() {
  return (
    <div>
      <div className="header">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo"></img>
        </div>
      </div>
      <div>
        <img src={background} alt="blue-back" className="background"></img>
      </div>
      <div className="logol-container">
        <img src={logol} alt="logo" className="logol"></img>
      </div>
      <h1>Lorem ipsum dolor sit amet</h1>
    </div>
  );
}
