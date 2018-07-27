/**
 * Step module.
 * The Step component triggers the updates of the Graphic component.
 * Scrollama uses the Intersection Observer API. In such API, the DOM element
 * observed is called "target". Basically this Step component is the target.
 * Please note that Step1 and StepN could be different components, as long as
 * they are wrapped in a ScrollText component.
 *
 * ScrollContainer
 *   ScrollText
 *     Step1
 *     ...
 *     StepN
 *   ScrollGraphic
 *     Graphic
 * @module /components/Step
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API|MDN}
 * @see {@link https://github.com/russellgoldenberg/scrollama|Scrollama}
 */
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
