import React from "react";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import Home from "../../Views/User/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import AboutUs from "../../Views/User/AboutUs/AboutUs";
import ContactUs from "../../Views/User/ContactUs";
import Gallery from "../../Views/User/Gallery";
import OurTeam from "../../Views/User/OurTeam";
import Listing from "../../Views/User/Listing";
import Footer from "../../Components/Footer";
function User() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/contact-us" exact component={ContactUs} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/our-team" exact component={OurTeam} />
        <Route path="/listinings" exact component={Listing} />
        <Route path={"/not-found"} component={() => <h1>Not Found</h1>} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default User;
