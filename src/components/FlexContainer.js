import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: ${props => props.fontFamily};
`;

export default FlexContainer;
