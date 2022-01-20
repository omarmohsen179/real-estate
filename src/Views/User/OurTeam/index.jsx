import React, { useEffect } from "react";
import UpperPage from "../../../Components/UpperPage/UpperPage";
import MemberList from "./Components/MemberList";
import "./OurTeam.css";
function OurTeam() {
  const data = {
    body2:
      "What do you envision when you think of your next house? Do you want a big backyard or maybe a large living room? Whatever you envision we can make a reality. We have over 55 years of real estate experience and we can help you find the home of your dreams, from smaller single-family homes for sale to larger houses for sale. Please contact us if you are looking for a home, home rental, or commercial properties for sale in the Big Spring, Midland, Lamesa, or Colorado City, TX area.",
  };

  return (
    <div>
      <UpperPage Title={"Meat The Home Team"} />
      <div className="container" style={{ textAlign: "center" }}>
        <div className="paragraph-intro ">{data.body2}</div>
      </div>
      <MemberList />
    </div>
  );
}

export default OurTeam;
