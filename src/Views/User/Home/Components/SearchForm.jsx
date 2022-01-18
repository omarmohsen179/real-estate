import React, { useRef } from "react";
import DevidText from "../../../../Components/DevidText/DevidText";
import FormButton from "../../../../Components/Elements/FormButton";
import LabelInput from "../../../../Components/Elements/LabelInput";

function SearchForm() {
  const data = {
    Title: "SEARCH OUR RESIDENTIAL & COMMERCIAL REAL ESTATE LISTINGS",
    details:
      "When it comes to looking for the right place, you can trust Home Realtors can deliver the place you want.Whether you're in the market for residential or commercial real estate listings, our local realtors do their best to show a variety of listing that meets your needs and wants. Be sure to browse our current offerings. For years, our local real estate team has continued to assist clients throughout Big Spring, TX, Midland, TX, Colorado City, TX, Lamesa, TX, and all the surrounding communities. We've managed to streamline the standard real estate process, making it easier than ever to track down the perfect property! If you’re ready to start looking with a trustworthy and friendly staff of professionals, call us today. We are always ready to help make the process of buying your next home or selling your home as smooth and stress-free as possible",
  };
  const cols = useRef("col-lg-3 col-md-4 col-sm-12");
  return (
    <div className="search-form-container">
      <div className="title-MakeOurNumbers">
        <DevidText text={data.Title} />
      </div>
      <div className="paragraph-search-form">{data.details}</div>

      <form className="row search-form-form">
        <div className={cols.current}>
          <LabelInput
            Label={"Min Price"}
            placeholder={200000}
            type={"number"}
          />
        </div>
        <div className={cols.current}>
          <LabelInput
            Label={"Max Price"}
            placeholder={500000}
            type={"number"}
          />
        </div>
        <div className={cols.current}>
          <LabelInput
            Label={"Min square feet"}
            placeholder={0}
            type={"number"}
          />
        </div>
        <div className={cols.current}>
          <LabelInput Label={"Min bedroom"} placeholder={1} type={"number"} />
        </div>
        <div className={cols.current}>
          <LabelInput Label={"Min Baths"} placeholder={1} type={"number"} />
        </div>
        <div
          className="col-12"
          style={{
            marginTop: "20px",
          }}
        >
          <FormButton Label={"Search"} type={"Submit"} />
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
