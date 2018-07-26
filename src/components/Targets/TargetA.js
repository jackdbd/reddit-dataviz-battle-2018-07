import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.color};
`;

class TargetA extends React.Component {
  render() {
    const { progress, color } = this.props;
    return (
      <Container color={color}>
        <h1>I am Target A</h1>
        <p>{`My <Step> was scrolled at: ${Math.round(
          progress * 100
        )}% height`}</p>
      </Container>
    );
  }
}

export default TargetA;
