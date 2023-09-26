import React from "react";
import Home from "./home/Home";
import PlayAGame from "./playAGame/PlayAGame";
import AboutMe from "./aboutMe/AboutMe";

import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/playagame" element={<PlayAGame />} />
          <Route path="/aboutme" element={<AboutMe />} />
            
        </Routes>
      </div>
    </Router>
  );
}

export default App;
