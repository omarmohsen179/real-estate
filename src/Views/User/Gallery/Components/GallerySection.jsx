import React, { useRef } from "react";

function GallerySection({ Data }) {
  const cols = useRef("col-lg-3 col-md-5 col-sm-6 ");
  return (
    <div className="center-large-view">
      <div className="row gallary-container">
        {Data.map((ele) => (
          <div className={cols.current}>
            <img
              className=" image-element"
              style={{ width: "240px", height: "160px" }}
              src={ele.ImagePath}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GallerySection;
