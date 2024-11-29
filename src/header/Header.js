import React from "react";
import LinkButton from "../LinkButton";

export default function Header(props) {
  let style
  if (props.isMobile) {
    style = styles.textMobile
  } else {
    style = styles.text
  }
  return (
    <LinkButton
      style={style}
      to="/"
      text="HOME"
    />
  );
}

const styles = {
  text: {
    position: "absolute",
    bottom: "90%",
    left: "9.5vw",
  },
  textMobile: {
    marginLeft: "10vw",
    marginTop: "5vh",
    width: "max-content",
  }
}
