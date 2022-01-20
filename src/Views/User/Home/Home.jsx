import React, { useEffect, useRef, useState } from "react";

import Homex from "../../../Assets/Navigation/Home.jpg";
import Upper from "../../../Components/Upper/Upper";
import Intro from "./Components/Intro";
import "./Home.css";
import MakeOurNumbers from "./Components/MakeOurNumbers";
import VisibilitySensor from "react-visibility-sensor";
import ViewportList from "react-viewport-list";
import SearchForm from "./Components/SearchForm";
import UpperPage from "../../../Components/UpperPage/UpperPage";
import handleViewport from "react-in-viewport";

const Home = () => {
  const [Visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(false);
  }, []);
  const Block = (props) => {
    const { inViewport, forwardedRef } = props;
    return (
      <div className="viewport-block" ref={forwardedRef}>
        <MakeOurNumbers Visible={Visible} />
      </div>
    );
  };

  const ViewportItem = handleViewport(Block /** options: {}, config: {} **/);

  return (
    <div>
      <UpperPage
        BackgroundImage={Homex}
        Title={"HRealTors"}
        Description={
          " Contact our Home Realtors team today to find the home of yourdreams."
        }
        Height={"100vh"}
        centrilze={"300px"}
      />

      <div className="container">
        <Intro />
      </div>
      <VisibilitySensor
        onChange={(isVisible) => {
          setVisible(isVisible);
        }}
        scrollCheck={true}
      >
        <>
          <ViewportItem
            onEnterViewport={() => {
              setVisible(true);
            }}
            onLeaveViewport={() => {
              setVisible(true);
            }}
          />

          <SearchForm />
        </>
      </VisibilitySensor>
    </div>
  );
};

export default Home;
