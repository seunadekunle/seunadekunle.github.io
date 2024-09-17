import React from "react";
import { BrowserRouter, HashRouter, Route, Switch, Redirect } from "react-router-dom";
import MainComponent from "./components/js/MainComponent";
import Resume from "./components/js/Resume";

const Router = process.env.NODE_ENV === 'production' ? HashRouter : BrowserRouter;

function App() {
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

export default App;