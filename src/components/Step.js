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
      <Ul>
        {description.map((d, i) => {
          return <li key={i}>{d}</li>;
        })}
      </Ul>
    </Div>
  );
};

export default Step;
