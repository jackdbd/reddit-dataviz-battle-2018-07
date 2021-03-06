import React, { Component } from "react";
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
  width = 600;
  height = 400;
  seedScale = scaleBand().domain(seeds);
  preferenceScale = scaleBand().domain(preferences);
  feederScale = scaleBand().domain(feeders);
  // http://colorbrewer2.org
  colorScale = scaleOrdinal()
    .domain(preferences)
    .range(["#f0f0f0", "#bdbdbd", "#636363"]);
  zScale = scaleOrdinal()
    .domain(species)
    .range(["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e"]);

  stories = entries.map((d, i) => {
    const obj = {
      stepProps: {
        title: d.name,
        description: d.feeders,
        height: this.height,
        backgroundColor: this.zScale(d.name)
      },
      graphic: BirdChart,
      graphicProps: {
        // showDebug: true,
        width: this.width,
        height: this.height,
        margin: {
          top: 10,
          right: 10,
          bottom: 30,
          left: 160
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

  // componentDidMount() {
  //   this.setState({height: document.documentElement.clientHeight})
  // }
  render() {
    const { index, progress, direction } = this.props;
    const story = this.stories[index];
    const Graphic = story.graphic;
    const graphicProps = {
      index,
      progress,
      direction,
      ...story.graphicProps
    };
    return (
      <ScrollContainer
        className="scroll__container"
        style={{ fontFamily: "Kalam" }}
      >
        <ScrollText className="scroll__text">
          {this.stories.map((d, i) => {
            return (
              <Step
                {...d.stepProps}
                className={
                  i === index ? "is-active scroll__step" : "scroll__step"
                }
                key={i}
                height={this.height}
              />
            );
          })}
        </ScrollText>
        <ScrollGraphic
          className="scroll__graphic"
          style={{
            height: this.height
          }}
        >
          <Graphic {...graphicProps} />
        </ScrollGraphic>
      </ScrollContainer>
    );
  }
}

export default Scrollable;
