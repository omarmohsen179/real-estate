import React from "react";
import DevidText from "../../../../Components/DevidText/DevidText";

function Intro({ IntroImage }) {
  const data = {
    title:
      "LOCAL REALTOR COMMITTED TO EXCELLENCE SERVING BIG SPRING, COLORADO CITY, LAMESA & MIDLAND, TX",
    body: "Home Realtors has earned its reputation in residential real estate through its commitment to service, integrity, and excellence.We have been providing a variety of services to both buyers and sellers in Big Spring, Texas and throughout Howard County for over 55 years. With our hardworking real estate team, we are prepared to help you buy or sell any type of property. Home Realtors are proud to offer a wide variety of houses for sale, commercial properties for sale, and residential real estate listings for Big Spring, TX; Colorado City, TX; Midland, TX; Lamesa, TX and nearby areas. We offer incredible insights into selling your home as welll. At Home-Realtors we firmly believe that real estate is a people business; whether you are purchasing your first home or your retirement cottage, whether you are investing your hard-earned money or moving across the country, we know that emotions and people are involved.",
    title2: "EXPLORE OUR LATEST PROPERTY LISTINGS",
    body2:
      "Take a closer look at our local real estate properties, then reach out to one of our experienced agents. The certified staff members at Home Realtors are always standing by to lend a hand. Once we gain an understanding of your real estate goals, it's only a matter of time before we're able to point you in the direction of the perfect residential and commercial property listings. It's truly that simple!",
  };

  return (
    <div className="aboutus-intro-container container">
      <div>
        <img className="intro-image-container" src={IntroImage} />
        <div className="title-intro">
          <DevidText text={data.title} />
        </div>
        <div className="paragraph-intro ">{data.body}</div>
        <div className="row" style={{ margin: 0 }}>
          <div className="col">
            <iframe
              width={"100%"}
              height={"345"}
              src="https://www.youtube.com/embed/UJv9-F7SN5A"
            ></iframe>
          </div>
          <div className="col">
            <div className="title-intro">
              <DevidText text={data.title2} />
            </div>
            <div>
              <div className="paragraph-intro ">{data.body2}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
