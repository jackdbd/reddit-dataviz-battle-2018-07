import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: ${props => props.height};
  &.is-active {
    background-color: ${props => props.backgroundColor};
  }
`;

const Ul = styled.ul`
  padding-left: 1em;
  list-style-type: none;
`;

const Step = props => {
  const { title, description, className, height, backgroundColor } = props;
  return (
    <Div
      className={className}
      height={height}
      backgroundColor={backgroundColor}
    >
      <h1>{title}</h1>
      <p>TODO: add description, bird's thumbnail, bird's chirp</p>
      <audio
        src="https://ia902508.us.archive.org/5/items/testmp3testfile/mpthreetest.mp3"
        controls
      >
        <p>
          If you are reading this, it is because your browser does not support
          the audio element.{" "}
        </p>
      </audio>
      <Ul>
        {description.map((d, i) => {
          return <li key={i}>{d}</li>;
        })}
      </Ul>
    </Div>
  );
};

export default Step;
