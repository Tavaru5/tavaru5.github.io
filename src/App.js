import React from "react";
import Home from "./home/Home";
import PlayAGame from "./playAGame/PlayAGame";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
