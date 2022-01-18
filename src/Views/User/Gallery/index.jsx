import React, { useEffect } from "react";
import UpperPage from "../../../Components/UpperPage/UpperPage";
import GallerySection from "./Components/GallerySection";
import one from "../../../Assets/OurTeam/1.jpg";
import two from "../../../Assets/OurTeam/2.jpg";
import three from "../../../Assets/OurTeam/3.jpg";
import four from "../../../Assets/OurTeam/4.jpg";
import five from "../../../Assets/OurTeam/5.jpg";
import six from "../../../Assets/OurTeam/6.jpg";
import "./Gallery.css";
function Gallery() {
  const data = {
    body2:
      "What do you envision when you think of your next house? Do you want a big backyard or maybe a large living room? Whatever you envision we can make a reality. We have over 55 years of real estate experience and we can help you find the home of your dreams, from smaller single-family homes for sale to larger houses for sale. Please contact us if you are looking for a home, home rental, or commercial properties for sale in the Big Spring, Midland, Lamesa, or Colorado City, TX area.",
  };
  const Members = [
    {
      Id: 1,
      ImagePath: one,
    },
    {
      Id: 2,
      ImagePath: two,
    },
    {
      Id: 3,
      ImagePath: three,
    },
    {
      Id: 4,
      ImagePath: four,
    },
    {
      Id: 5,
      ImagePath: five,
    },
    {
      Id: 6,
      ImagePath: six,
    },
  ];
  return (
    <div>
      <UpperPage Title={"Gallery"} />
      <div
        className="container"
        style={{ marginTop: " -100px", textAlign: "center" }}
      >
        <div className="paragraph-intro ">{data.body2}</div>
        <GallerySection Data={Members} />
      </div>
    </div>
  );
}

export default Gallery;
