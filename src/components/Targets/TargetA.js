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
        <svg width={200} height={200} preserveAspectRatio="xMinYMin meet" />
      </Container>
    );
  }
}

export default TargetA;
