import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Colors } from "../Constants";
import { Paper } from "@mui/material";

export default function LinkButton(props) {
  const [buttonElevation, setButtonElevation] = useState(3)
  return (
    <Paper elevation={buttonElevation} square={true} style={{ ...props.style, ...styles.container }}>
      <Link
        style={styles.text}
        to={props.to}
        onMouseEnter={() => setButtonElevation(1)}
        onMouseLeave={() => setButtonElevation(3)}
      >
        {props.text}
      </Link>
    </Paper>

  );
}

const styles = {
  container: {
    backgroundColor: Colors.boneWhite,
  },
  text: {
    textDecoration: "none",
    color: "#000",
    fontSize: "1em",
    padding: "1em",
    display: "inline-block",
  },
}