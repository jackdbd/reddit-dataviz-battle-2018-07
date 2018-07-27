import React, { Component } from "react";
import Intro from "./Intro";
import Scrollama from "./Scrollama";
import Outro from "./Outro";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro backgroundColor={"#d3d3d3"} />
        <Scrollama />
        <Outro backgroundColor={"#d3d3d3"} />
      </div>
    );
  }
}

export default App;
