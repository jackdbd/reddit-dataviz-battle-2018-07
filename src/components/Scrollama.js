import React, { Component } from "react";
import "intersection-observer"; // polyfill for the IntersectionObserver API
import scrollama from "scrollama";
import Scrollable from "./Scrollable";

// https://github.com/russellgoldenberg/scrollama#api
const options = {
  step: ".scroll__step",
  container: ".scroll__container",
  graphic: ".scroll__graphic",
  text: ".scroll__text",
  offset: 0.5,
  progress: true,
  debug: true
};

class Scrollama extends Component {
  state = {
    scroller: scrollama(),
    index: 0,
    progress: 0,
    direction: "down"
  };

  componentDidMount() {
    this.setupScrollama();
    // this.handleResize();
  }

  // handleResize() {
  //   this.state.scroller.resize()
  // }

  handleStepEnter = response => {
    const { index, direction } = response;
    this.setState({
      index,
      direction
    });
  };

  handleStepProgress = response => {
    // console.log("step progress:", response);
    this.setState({ progress: response.progress });
  };

  setupScrollama = () => {
    this.state.scroller
      .setup(options)
      .onStepEnter(this.handleStepEnter)
      .onStepProgress(this.handleStepProgress);
  };

  render() {
    const { index, progress, direction } = this.state;
    return (
      <Scrollable index={index} progress={progress} direction={direction} />
    );
  }
}

export default Scrollama;
