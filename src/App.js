import React from "react";
import Home from "./Home";
import PlayAGame from "./PlayAGame";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
