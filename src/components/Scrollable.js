import React, { Component } from "react";
import Step from "./Step";
import TargetA from "./Targets/TargetA";
import TargetB from "./Targets/TargetB";
import styled from "styled-components";

const ScrollContainer = styled.div`
  display: flex;
`;

const ScrollGraphic = styled.div`
  position: sticky;
  flex-grow: 3;
  flex-shrink: 1;
  flex-basis: auto;
  top: 0;
`;

const ScrollText = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  max-width: 30rem;
`;

class Scrollable extends Component {
  stories = [
    {
      title: "Title 1",
      description:
        "some text which describes this story. Maybe it's a long text. Maybe not. Who knows?",
      target: TargetA,
      targetProps: { color: "blue" }
    },
    {
      title: "Title 2",
      description: "some short text",
      target: TargetB,
      targetProps: { color: "red", data: [1, 2, 3] }
    },
    {
      title: "Title C",
      description: "some text which describes this story.",
      target: TargetB,
      targetProps: { color: "green", data: [4, 5, 6] }
    },
    {
      title: "Title IV",
      description: "some text",
      target: TargetA,
      targetProps: { color: "purple" }
    }
  ];
  render() {
    const { index, progress, direction } = this.props;
    const story = this.stories[index];
    const Target = story.target;
    const targetProps = {
      index,
      progress,
      direction,
      ...story.targetProps
    };
    const height = "500px";
    return (
      <ScrollContainer className="scroll__container">
        <ScrollText className="scroll__text">
          {this.stories.map((d, i) => {
            return (
              <Step
                title={d.title}
                description={d.description}
                className={
                  i === index ? "is-active scroll__step" : "scroll__step"
                }
                key={i}
                height={height}
              />
            );
          })}
        </ScrollText>
        <ScrollGraphic
          className="scroll__graphic"
          style={{
            height: height
          }}
        >
          <Target {...targetProps} />
        </ScrollGraphic>
      </ScrollContainer>
    );
  }
}

export default Scrollable;
