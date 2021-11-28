import React from "react";
import { Spring } from "react-spring/renderprops";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: props.endOpacity }}>
      {(opacityAnim) => (
        <Link
          style={{
            textDecoration: "none",
            color: "#000",
            position: "absolute",
            bottom: "95%",
            left: "9.5vw",
            ...opacityAnim,
            ...props.style,
          }}
          to="/"
        >
          HOME
        </Link>
      )}
    </Spring>
  );
}
