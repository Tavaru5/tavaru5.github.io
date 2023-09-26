import React from "react";
import { Link } from "react-router-dom";
import { useSpring } from "react-spring";

export default function Header(props) {
  const styles = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: props.endOpacity
    }
  })
  return (
        <Link
          style={{
            textDecoration: "none",
            color: "#000",
            position: "absolute",
            bottom: "95%",
            left: "9.5vw",
            ...styles,
            ...props.style,
          }}
          to="/"
        >
          HOME
        </Link>
  );
}
