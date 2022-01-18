import "./App.css";
import ScrollToTop from "./Components/ScrollTop";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import User from "./Layout/User";
import { Fragment } from "react";
function App() {
  return (
    <div>
      <Fragment>
        <ScrollToTop />

        <Switch>
          <Route path="/" component={User} />
        </Switch>
      </Fragment>
    </div>
  );
}

export default App;
