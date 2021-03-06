import React from "react";
import FlexContainer from "./FlexContainer";
import styled from "styled-components";

const P = styled.p`
  ::before {
    content: "↓ ";
  }
  ::after {
    content: " ↓";
  }
`;

const Intro = props => (
  <FlexContainer
    fontFamily={"Kalam"}
    style={{ backgroundColor: props.backgroundColor, textAlign: "center" }}
  >
    <h1>Which Birds prefer Which Seeds?</h1>
    <p>
      This visualization was made for the{" "}
      <a
        href="https://www.reddit.com/r/dataisbeautiful/comments/8vhxhq/battle_dataviz_battle_for_the_month_of_july_2018"
        target="_blank"
        rel="noopener noreferrer"
      >
        DataViz battle for the month of July 2018
      </a>{" "}
      organized by the{" "}
      <a
        href="https://www.reddit.com/r/dataisbeautiful/"
        target="_blank"
        rel="noopener noreferrer"
      >
        dataisbeautiful
      </a>{" "}
      subreddit.
    </p>
    <p>If you like, you can also listen to a woodpecker in the meantime!</p>
    <div style={{ left: "50%" }}>
      <audio
        src="http://static1.grsites.com/archive/sounds/birds/birds023.mp3"
        controls
        loop
      />
    </div>
    <p>
      Credits:{" "}
      <a
        href="https://i.imgur.com/RicYHQ3.jpg"
        target="_blank"
        rel="noopener noreferrer"
      >
        data
      </a>,{" "}
      <a
        href="http://www.grsites.com/archive/sounds/"
        target="_blank"
        rel="noopener noreferrer"
      >
        sound
      </a>
    </p>
    <P>Scroll to start</P>
  </FlexContainer>
);
export default Intro;
