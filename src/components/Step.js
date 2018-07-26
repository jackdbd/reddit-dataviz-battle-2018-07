import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: ${props => props.height};
  &.is-active {
    background-color: yellow;
  }
`;

const Step = props => {
  const { title, description, className, height } = props;
  return (
    <Div className={className} height={height}>
      <h1>{title}</h1>
      <p>{description}</p>
    </Div>
  );
};

export default Step;
