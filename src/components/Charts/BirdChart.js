import React from "react";
import PropTypes from "prop-types";
import { AxisLeft, AxisBottom } from "@vx/axis";
import { Bar } from "@vx/shape";
// import { Text } from "@vx/text";
import D3MarginConvention from "./D3MarginConvention";
import DebugSVG from "./DebugSVG";

function BirdChart(props) {
  const {
    width,
    height,
    margin,
    seeds,
    backgroundColor,
    scales,
    showDebug
  } = props;
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const seedScale = scales.seed
    .range([innerHeight, 0])
    .round(true)
    .paddingInner(0.2);

  const preferenceScale = scales.preference.range([0, innerWidth]);
  // const preferenceScaleAxis = Object.assign({}, scales.preference).range([0, innerWidth]);
  // console.log(innerWidth / 3, innerWidth / 2, innerWidth)

  const colorScale = scales.color;
  const viewBox = props.viewBox ? props.viewBox : `0 0 ${width} ${height}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      preserveAspectRatio="xMinYMin meet"
    >
      {showDebug ? (
        <DebugSVG
          width={width}
          height={height}
          viewBox={viewBox}
          margin={margin}
        />
      ) : (
        <rect
          x={0}
          y={0}
          width={width}
          height={height}
          style={{ fill: backgroundColor }}
        />
      )}
      <D3MarginConvention top={margin.top} left={margin.left}>
        <g className={"seed-bars"}>
          {seeds.map((d, i) => {
            return (
              <Bar
                x={0}
                y={seedScale(d.name)}
                width={
                  preferenceScale(d.preference) + preferenceScale.bandwidth()
                }
                height={seedScale.bandwidth()}
                data={{
                  x: d.preference,
                  y: d.name
                }}
                fill={colorScale(d.preference)}
                id={`#bar-${i}`}
                key={i}
              />
            );
          })}
        </g>
        {/*
        <g className={"seed-labels"}>
          {seeds.map((d, i) => {
            return (
              <Text
                x={0}
                y={seedScale(d.name)}
                dx={5}
                dy={seedScale.bandwidth() / 2}
                verticalAnchor="middle"
                key={i}
              >
                {d.name}
              </Text>
            );
          })}
        </g>
        */}
        <AxisLeft
          top={0}
          left={0}
          scale={seedScale}
          stroke="#000000"
          tickStroke="#000000"
          tickLabelProps={(d, i) => ({
            textAnchor: "end",
            dx: "-0.25em",
            dy: "0.25em"
          })}
        />
        <AxisBottom
          top={innerHeight}
          left={0}
          scale={preferenceScale}
          hideTicks={true}
          // workaround to hide tick labels
          tickLabelProps={(d, i) => ({ fill: "none" })}
          // tickLabelProps={(d, i) => ({
          //   textAnchor: "end",
          //   x: `${preferenceScale(d) + preferenceScale.bandwidth()}`,
          // })}
          label={`Preference (${preferenceScale.domain()})`}
          labelProps={{
            textAnchor: "middle",
            verticalAnchor: "start",
            dy: "0.5em"
          }}
        />
      </D3MarginConvention>
    </svg>
  );
}

// TODO: check prop types and set defaults

BirdChart.defaultProps = {
  margin: {
    top: 20,
    right: 10,
    bottom: 20,
    left: 10
  },
  showDebug: false
};

BirdChart.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  margin: PropTypes.shape({
    top: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
    bottom: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired
  }),
  viewBox: PropTypes.string,
  showDebug: PropTypes.bool
};

export { BirdChart };
