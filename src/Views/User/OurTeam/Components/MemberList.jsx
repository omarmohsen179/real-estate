import React, { useCallback, useRef, useState } from "react";
import MemberCard from "./MemberCard";

function MemberList() {
  const [selectedperson, setselectedperson] = useState(0);

  const Members = [
    {
      Id: 1,
      MemberName: "Ahmed hassan",
      posistion: " Owner / Broker",
      Email: "example@realtor.net",
    },
    {
      Id: 2,
      MemberName: "Ahmed hassan",
      posistion: " Owner / Broker",
      Email: "example@realtor.net",
    },
    {
      Id: 3,
      MemberName: "Ahmed hassan",
      posistion: " Owner / Broker",
      Email: "example@realtor.net",
    },
    {
      Id: 4,
      MemberName: "Ahmed hassan",
      posistion: " Owner / Broker",
      Email: "example@realtor.net",
    },
    {
      Id: 5,
      MemberName: "Ahmed hassan",
      posistion: " Owner / Broker",
      Email: "example@realtor.net",
    },
    {
      Id: 6,
      MemberName: "Ahmed hassan",
      posistion: " Owner / Broker",
      Email: "example@realtor.net",
    },
  ];
  const Person_details = useCallback(
    (e) => {
      if (Number(selectedperson) === Number(e)) {
        setselectedperson(0);
      } else {
        setselectedperson(e);
      }
    },
    [selectedperson, MemberCard]
  );
  return (
    <div
      className="container"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className="row  member-list-container container">
        {Members.map((ele) => (
          <MemberCard
            Data={ele}
            selectedperson={selectedperson}
            Person_details={Person_details}
          />
        ))}
      </div>
    </div>
  );
}

export default MemberList;
