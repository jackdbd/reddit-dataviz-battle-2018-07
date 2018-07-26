import React, { Component } from "react";
import { max, descending } from "d3-array";
import { scaleBand, scaleOrdinal } from "d3-scale";
import { species, seeds, preferences, feeders, entries } from "../data";
import Step from "./Step";
import { BirdChart } from "./Charts/BirdChart";
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

// console.log("preferences", preferences)

class Scrollable extends Component {
  seedScale = scaleBand().domain(seeds);
  preferenceScale = scaleBand().domain(preferences);
  feederScale = scaleBand().domain(feeders);
  colorScale = scaleOrdinal()
    .domain(preferences)
    // https://www.materialui.co/colors
    // .range(["#f44336", "#FFC107", "#8BC34A"]);
    // http://colorbrewer2.org/
    .range(["#f0f0f0", "#bdbdbd", "#636363"]);

  zScale = scaleOrdinal()
    .domain(species)
    .range([
      "#a6cee3",
      "#1f78b4",
      "#b2df8a",
      "#33a02c",
      "#fb9a99",
      "#e31a1c",
      "#fdbf6f",
      "#ff7f00",
      "#cab2d6",
      "#6a3d9a"
    ]);

  stories = entries.map((d, i) => {
    const obj = {
      stepProps: {
        title: d.name,
        description: d.feeders,
        backgroundColor: this.zScale(d.name)
      },
      target: BirdChart,
      targetProps: {
        // showDebug: true,
        width: 400,
        height: 500,
        margin: {
          top: 10,
          right: 10,
          bottom: 30,
          left: 150
        },
        backgroundColor: this.zScale(d.name),
        scales: {
          seed: this.seedScale,
          preference: this.preferenceScale,
          color: this.colorScale
        },
        seeds: d.seeds
      }
    };
    return obj;
  });
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
                {...d.stepProps}
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
