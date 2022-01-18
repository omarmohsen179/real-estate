import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import "./UpperPages.css";
import back from "../../Assets/Aboutus/background.jpg";
function UpperPage({ Title }) {
  return (
    <div
      className="header__image2"
      style={{ backgroundImage: "url(" + back + ")" }}
    >
      <NavigationBar />
      <div className="Text-container-Upper2">
        <div className="Upper-title">{Title}</div>
      </div>
    </div>
  );
}

export default UpperPage;
