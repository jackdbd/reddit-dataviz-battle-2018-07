import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.color};
`;

class TargetB extends React.Component {
  render() {
    const { index, progress, color, data } = this.props;
    return (
      <Container color={color}>
        <h1>I am Target B</h1>
        <h2>{`Step index: ${index}`}</h2>
        <p>{`My <Step> was scrolled at: ${Math.round(
          progress * 100
        )}% height`}</p>
        <p>{data}</p>
      </Container>
    );
  }
}

export default TargetB;
