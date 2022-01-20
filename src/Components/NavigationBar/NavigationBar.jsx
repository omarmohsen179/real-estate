import React, { useState, useEffect, useRef, useCallback } from "react";
import "./NavigationBar.css";
import logo from "../../Assets/Navigation/Logo.png";
import { useLocation, Link, useHistory } from "react-router-dom";

function NavigationBar() {
  const location = useLocation();
  let history = useHistory();
  let pages = useRef([
    { name: "Home", route: "/" },
    { name: "About us", route: "/about-us" },
    { name: "Listinings", route: "/listinings" },
    { name: "Our Team", route: "/our-team" },
    { name: "Gallery", route: "/gallery" },
    { name: "Contact Us", route: "/contact-us" },
  ]);
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });

  const setDimension = useCallback(() => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  }, [window]);
  const getRoutes = useCallback(() => {
    return pages.current.filter((ele) => location.pathname == ele.route)[0];
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);
  useEffect(() => {
    console.log();
  }, [location.pathname]);

  let [addclass, setaddclass] = useState(false);
  return (
    <nav
      className={" NavbarDraw "}
      style={{
        /*  position:
          screenSize.dynamicWidth < 1000 && getRoutes().route == "/"
            ? ""
            : screenSize.dynamicWidth > 1000
            ? "absolute"
            : "",*/
        position: screenSize.dynamicWidth < 1000 ? "" : "absolute",
        //  opacity: screenSize.dynamicWidth < 1000 && getRoutes().route == "/" ? 1 : 0.6,
        backgroundColor: "transparent",
      }}
      id="mynav"
    >
      <div className="mainclass container">
        <div className="Logo-size" style={{ cursor: "pointer" }}>
          <img
            onClick={() => history.push("/")}
            src={logo}
            width={"100%"}
            height={"100%"}
          />
        </div>
        <ul className="Horizontal-list">
          {pages.current.map((ele) => (
            <li className={getRoutes().route == ele.route ? "active-page" : ""}>
              <Link className="Horizontal-list-elements" to={ele.route}>
                {ele.name}
              </Link>
            </li>
          ))}
        </ul>
        <input
          style={{ display: "none" }}
          id="check02"
          type="checkbox"
          name="menu"
        />
        <div
          style={{ width: "60px" }}
          className="collabse-button"
          onClick={() => {
            document.getElementById("mynav").classList.toggle("transition");
            document
              .getElementById("displayedlist")
              .classList.toggle("transition-list");
            document.getElementById("touch").classList.toggle("collapsed");
          }}
        >
          <button
            className="navbar-toggler collapsed"
            type="button"
            id="touch"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>
        </div>
      </div>
      <div>
        <ul className="DropDownList2" id={"displayedlist"}>
          {pages.current.map((ele) => (
            <li className={getRoutes().route == ele.route ? "active-page" : ""}>
              <Link to={ele.route}>{ele.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
{
  /*  
  
    .DropDownList li {
    display: block;
    padding: 12px;
    text-align: center;
    text-decoration: none;
    color: white;
    transition: background 0.3s;
    white-space: nowrap;
  }
  .DropDownList li a {
    color: white;
    text-decoration: none;
    font-family: "Montserrat", Arial, Tahoma, sans-serif;
    font-weight: 400;
    font-size: 13px;
  }
   input:checked ~ .DropDownList {
  max-height: 600px;
  transition: max-height 0.5s ease-in;
}
  .DropDownList {
    max-height: 0;
    padding: 0;
    overflow: hidden;
    list-style-type: none;
    background: #86110e;
    position: absolute;
    transition: max-height 0.5s ease-out;

    min-width: 100%;
    left: 0;
    top: 90px;
  }
            <input
            id="check02"
            type="checkbox"
            name="menu"
            style={{ display: "none" }}
          />
  <input
          style={{ display: "none" }}
          id="check02"
          type="checkbox"
          name="menu"
        />

        <ul className="DropDownList">
          <li className="active-page">
            <a>Home</a>
          </li>
          <li>
            <a>About us</a>
          </li>
          <li>
            <a>Listining</a>
          </li>
          <li>
            <a>Our Team</a>
          </li>
          <li>
            <a>Gallery</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
          <li>
            <a href="#">Listining</a>
          </li>
</ul>

  input:checked ~ .DropDownList {
  max-height: 600px;
  transition: max-height 0.5s ease-in;
}*/
}
