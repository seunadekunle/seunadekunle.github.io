import React, { Component } from "react";

// import components from seperate file
import MainComponent from "./components/js/MainComponent";
import Resume from "./components/js/Resume";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainComponent} />
          <Route path="/resume" component={Resume} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
