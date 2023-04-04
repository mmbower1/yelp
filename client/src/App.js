import React, { Fragment, Lazy, suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// styles
import "./App.css";
import "./scss/App.scss";
// containers
import Homepage from "./containers/homepage/Homepage";
import Campgrounds from "./containers/campgrounds/Campgrounds";
import CampgroundID from "./containers/campgrounds/CampgroundID";

// redux
import {
  store,
  // persistor
} from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Fragment>
            <div className="app">
              <Route exact path="/" component={Homepage} />
              <Route exact path="/campgrounds" component={Campgrounds} />
              <Route path="/campgrounds/:id" component={CampgroundID} />
            </div>
          </Fragment>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
