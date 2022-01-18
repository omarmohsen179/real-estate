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
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className=" number-car-out">
                {" "}
                <div>{ele.title}</div>
                <p>
                  {Visible ? (
                    <CountUp duration={2} end={ele.value} />
                  ) : (
                    <CountUp duration={2} start={ele.value} end={0} />
                  )}
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
