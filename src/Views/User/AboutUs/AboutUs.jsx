import React, { useEffect } from "react";
import UpperPage from "../../../Components/UpperPage/UpperPage";
import "./AboutUs.css";
import Intro from "./Components/Intro";
import Image from "../../../Assets/Aboutus/intro2.jpg";
function AboutUs() {
  return (
    <div>
      <UpperPage Title={"About Us"} />
      <Intro IntroImage={Image} />
    </div>
  );
}

export default AboutUs;
