import React, { Component } from "react";
// import { max, descending } from "d3-array";
// import { scaleLinear, scaleBand, scaleOrdinal } from "d3-scale";
import Intro from "./Intro";
import Scrollama from "./Scrollama";
import Outro from "./Outro";
import "./App.css";

class App extends Component {
  // state = {
  //   scales: {
  //     x: scaleLinear().domain([0, 100]),
  //     y: scaleBand().domain([0, 50]),
  //   },
  //   accessors: {
  //     x: d => d.customers,
  //     y: d => d.genre,
  //     z: d => d.genre
  //   },
  // }
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
