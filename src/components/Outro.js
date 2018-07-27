import React from "react";
import FlexContainer from "./FlexContainer";

const Outro = props => (
  <FlexContainer
    fontFamily={"Kalam"}
    style={{ backgroundColor: props.backgroundColor, textAlign: "center" }}
  >
    <h1>Built with</h1>
    <span>
      <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
        React
      </a>
      {", "}
      <a
        href="https://github.com/russellgoldenberg/scrollama"
        target="_blank"
        rel="noopener noreferrer"
      >
        Scrollama
      </a>
      {", "}
      <a href="https://d3js.org/" target="_blank" rel="noopener noreferrer">
        D3
      </a>
      {", and "}
      <a
        href="https://vx-demo.now.sh/"
        target="_blank"
        rel="noopener noreferrer"
      >
        vx
      </a>
    </span>
    <h1>About</h1>
    <span>
      Code:{" "}
      <a
        href="https://github.com/jackdbd/reddit-dataviz-battle-2018-07"
        target="_blank"
        rel="noopener noreferrer"
      >
        repo on GitHub
      </a>
    </span>
    <br />
    <span>
      Me:{" "}
      <a
        href="https://twitter.com/jackdbd"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
      <span> / </span>
      <a
        href="https://www.linkedin.com/in/giacomodebidda/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Linkedin
      </a>
      <span> / </span>
      <a
        href="https://www.giacomodebidda.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Blog
      </a>
    </span>
  </FlexContainer>
);
export default Outro;
