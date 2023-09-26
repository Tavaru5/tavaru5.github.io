import React from "react";
import { useSpring, animated } from "react-spring";

export default function AnimatedBar(props) {
  let addedMargin = props.addedMargin || 0;
  let thickness = props.thickness || "1em";
  let sizeUnit = props.sizeUnit;

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
  fromObject[dynamicDimension] = "0" + sizeUnit;
  fromObject[marginDirection] =
    (props.size + addedMargin).toString() + sizeUnit;
  toObject[dynamicDimension] = size.toString() + sizeUnit;
  toObject[marginDirection] = (margin + addedMargin).toString() + sizeUnit;
  const dynamicBarStyle = useSpring({
    from: fromObject,
    to: toObject
  })
  return (
        <animated.div style={{ ...barStyle, ...dynamicBarStyle, ...props.style }} />
  );
}

export const barDirections = {
  UP: "up",
  DOWN: "down",
  LEFT: "left",
  RIGHT: "right",
};
