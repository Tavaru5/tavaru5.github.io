import React from "react";
import { Spring } from "react-spring/renderprops";

export default function AnimatedBar(props) {
  let addedMargin = props.addedMargin || 0;
  let thickness = props.thickness || "0.5em";

  let barStyle = { backgroundColor: "black" };
  let fromObject = {};
  let toObject = {};
  let dynamicDimension = "";
  let marginDirection = "";

  let size = props.show ? props.size : 0;
  let margin = props.show ? 0 : props.size;

  switch (props.direction) {
    case barDirections.UP:
      dynamicDimension = "height";
      marginDirection = "marginTop";
      barStyle.width = thickness;
      break;
    case barDirections.DOWN:
      dynamicDimension = "height";
      marginDirection = "marginBottom";
      barStyle.width = thickness;
      break;
    case barDirections.LEFT:
      dynamicDimension = "width";
      marginDirection = "marginLeft";
      barStyle.height = thickness;
      break;
    case barDirections.RIGHT:
      dynamicDimension = "width";
      marginDirection = "marginRight";
      barStyle.height = thickness;
      break;
  }
  fromObject[dynamicDimension] = "0em";
  fromObject[marginDirection] = (props.size + addedMargin).toString() + "em";
  toObject[dynamicDimension] = size.toString() + "em";
  toObject[marginDirection] = (margin + addedMargin).toString() + "em";
  return (
    <Spring from={fromObject} to={toObject}>
      {(dynamicBarStyle) => (
        <div style={{ ...barStyle, ...dynamicBarStyle, ...props.style }} />
      )}
    </Spring>
  );
}

export const barDirections = {
  UP: "up",
  DOWN: "down",
  LEFT: "left",
  RIGHT: "right",
};
