import React, { useEffect, useRef, useState } from "react";

import Homex from "../../../Assets/Navigation/Home.jpg";
import Upper from "../../../Components/Upper/Upper";
import Intro from "./Components/Intro";
import "./Home.css";
import MakeOurNumbers from "./Components/MakeOurNumbers";
import VisibilitySensor from "react-visibility-sensor";

import SearchForm from "./Components/SearchForm";
const Home = () => {
  const [Visible, setVisible] = useState(false);
  return (
    <div>
      <Upper BackgroundImage={Homex} />
      <div className="container">
        <Intro />
      </div>
      <VisibilitySensor onChange={(isVisible) => setVisible(isVisible)}>
        <>
          <MakeOurNumbers Visible={Visible} />
          <SearchForm />
        </>
      </VisibilitySensor>
    </div>
  );
};

export default Home;
