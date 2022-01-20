import React, { useCallback } from "react";
import incccc from "../../../../Assets/Navigation/Intro.jpg";
import DevidText from "../../../../Components/DevidText/DevidText";
import { useHistory } from "react-router-dom";
import Image from "../../../../Components/Image";
function Intro() {
  let history = useHistory();
  const data = {
    Title: "BIG SPRING'S LOCAL REAL ESTATE TEAM COMMITTED TO EXCELLENCE",
    SubTitle: "MIDLAND, TX | LAMESA, TX",
    SubTitle2: "COLORADO CITY, TX | BIG SPRING, TX",
    Paragraph:
      "Buying a home is one of the biggest decisions you'll ever have to make. There are so many things to consider when house hunting. Location, price, property condition, and more that covers your wants and needs in a home. If you’re setting out to buy a house or land, using an experienced local realtor is the best way to ensure your success. At Home Realtors, our team of professional and friendlyreal estate agents and local realtors who stay current with local real estate and houses for sale in the Big Spring, TX area. Home Realtors has been recognized as Best of 2019 Office & Exemplary Customer Service by Zillow. We’re committed to helping your family find the perfect property.",
    Paragraph1:
      "We’re also available to help if you’re looking to rent a home or commercial real estate property! Renting office space or a home is a great choice for many families or business owners; it offers convenience without the responsibility or hassle of owning. Whether you're looking for commercial properties for sale or homes for rent, having a reliable real estate agent on your side will ensure your satisfaction. Give Home Realtors a call today to get started on your search! We are proud to offer our services to Lamesa, TX; Colorado City, TX; Midland, TX; and Big Spring, TX.",
    ImageTitle: "WHERE EVERYTHING WE TOUCH TURNS TO SOLD",
    Image: incccc,
  };

  return (
    <div className="row intro-container">
      <div className="col-lg-6 col-md-12 col-sm-12 ">
        <div className="Upper-info-intro">
          <div className="title-intro">
            <DevidText text={data.Title} />
          </div>
          <div className="subtitle-intro">
            <div>{data.SubTitle}</div>
            <br /> <div> {data.SubTitle2}</div> <br />
          </div>
          <div>
            <div className="paragraph-intro ">{data.Paragraph}</div>
          </div>
          <div>
            <button
              className="intro-button"
              onClick={() => history.push("/our-team")}
            >
              {" "}
              MEET OUR HOME TEAM
            </button>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12 ">
        <div className="second-intro-container">
          <Image src={data.Image} className="image-intro-container" />
        </div>

        <div className="image-title-intro-container">
          <p>{data.ImageTitle}</p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
