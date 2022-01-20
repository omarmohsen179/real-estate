import React, { useRef } from "react";
import emp from "../../../../Assets/OurTeam/emp.jpg";
function MemberCard({ Data, index, selectedperson, Person_details }) {
  const cols = useRef("col-lg-4 col-md-6 col-sm-12 card-div-col");
  let social = useRef([
    { type: "facebook" },
    { type: "twitter" },
    { type: "linkedin-in" },
    { type: "instagram" },
  ]);
  return (
    <div key={index} className={cols.current}>
      <div className=" card member-card">
        <img
          class="card-img-top"
          src={emp}
          alt="Card image cap"
          height={"50%"}
          style={{ maxHeight: "600px", height: "300px" }}
        />
        <div className="card-body">
          <h5 className="card-title card-title-team"> {Data.MemberName}</h5>
          <h6
            className="card-subtitle mb-2 text-muted TeamMembers_joptitle"
            onClick={() => Person_details(Data.Id)}
          >
            {Data.posistion}
            <b style={{ color: "#43597d", fontWeight: 100 }}>
              {" (Click Here)"}
            </b>
          </h6>
          <p className="card-text">
            <p
              className={
                +Number(selectedperson) === Number(Data.Id.toString())
                  ? "clickedJop TeamMembers_details"
                  : " TeamMembers_details"
              }
            >
              {
                "When it comes to looking for the right place, you can trust Home Realtors can deliver the "
              }
              <div className="members-icons-container">
                {social.current.map((ele) => {
                  return (
                    <a target="_blank" className="footerContactsContainerIcon">
                      <i
                        style={{ color: "#43597d" }}
                        className={"fab fa-" + ele.type}
                      ></i>
                    </a>
                  );
                })}
              </div>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
