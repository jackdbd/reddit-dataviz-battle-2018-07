import React, { Component } from "react";
import Intro from "./Intro";
import Scrollama from "./Scrollama";
import Outro from "./Outro";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
        <Scrollama />
        <Outro />
      </div>
    );
  }
}

export default App;
