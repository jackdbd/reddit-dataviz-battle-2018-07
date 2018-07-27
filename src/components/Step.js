import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: ${props => props.height}px;
  &.is-active {
    background-color: ${props => props.backgroundColor};
  }
`;

const P = styled.p`
  margin-bottom: 0;
  padding-bottom: 0;
  padding-left: 40px;
`;

const Ul = styled.ul`
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
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <P>Favourite feeders:</P>
      <Ul>
        {description.map((d, i) => {
          return <li key={i}>{d}</li>;
        })}
      </Ul>
    </Div>
  );
};

export default Step;
