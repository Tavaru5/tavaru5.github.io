import React, { useState } from "react";
import { Colors } from "../Constants";
import { Paper } from "@mui/material";

export default function Button(props) {
  const [buttonElevation, setButtonElevation] = useState(3)
  return (
    <Paper elevation={buttonElevation} square={true} onClick={() => props.onClick()} style={{ ...props.style, ...styles.container }}>
      <p
        style={styles.text}
        onMouseEnter={() => setButtonElevation(1)}
        onMouseLeave={() => setButtonElevation(3)}
      >
        {props.text}
      </p>
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
    margin: 0,
  },
}