import React from "react";
import Home from "./home/Home";
import PlayAGame from "./playAGame/PlayAGame";
import AboutMe from "./aboutMe/AboutMe";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/playagame">
            <PlayAGame />
          </Route>
          <Route path="/aboutme">
            <AboutMe />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
