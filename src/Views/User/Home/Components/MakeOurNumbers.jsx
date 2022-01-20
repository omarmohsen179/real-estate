import React, { useEffect, useRef, useState } from "react";
import DevidText from "../../../../Components/DevidText/DevidText";
import CountUp from "react-countup";

function MakeOurNumbers({ Visible }) {
  const data = {
    Title: "MAKE OUR NUMBERS WORK FOR YOU",
    content: [
      { title: "Percentage increase in year", value: 65 },
      { title: "Transation Close", value: 521 },
      { title: "Millions in sales   over", value: 95 },
    ],
  };

  return (
    <div className="MakeOurNumbers-container">
      <div className="title-MakeOurNumbers">
        <DevidText text={data.Title} />
      </div>
      <br />
      <div className="row real-time-numbers-outnumber ">
        {data.content.map((ele) => {
          return (
            <div className="col-lg-4 col-md-12 col-sm-12 element-counter">
              <div className=" number-car-out">
                <div style={{ height: "120px" }}> {ele.title}</div>
                <p>
                  <CountUp duration={2} end={ele.value} />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MakeOurNumbers;
