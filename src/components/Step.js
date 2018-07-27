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
      <img
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Garrulus_glandarius_1_Luc_Viatour.jpg/120px-Garrulus_glandarius_1_Luc_Viatour.jpg"
        }
      />
      <img
        src={
          "http://free.pagepeeker.com/v2/thumbs.php?size=t&url=wikipedia.orghttps%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fb%2Fb7%2FMourning_Dove_2006.jpg"
        }
      />
      <Ul>
        {description.map((d, i) => {
          return <li key={i}>{d}</li>;
        })}
      </Ul>
    </Div>
  );
};

export default Step;
