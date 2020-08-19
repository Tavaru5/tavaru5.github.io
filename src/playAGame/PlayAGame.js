import React from "react";
import { Colors } from "../Constants";
import PlayAGameBasic from "./PlayAGameBasic";

class PlayAGame extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.background}>
        <PlayAGameBasic />
      </div>
    );
  }
}

const styles = {
  buttonStyle: {
    marginLeft: "16px",
    marginRight: "16px",
    color: "white",
    backgroundColor: "black",
  },
  background: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.boneWhite,
    minHeight: "100vh",
  },
  gameText: {
    fontSize: "calc(18px + 2vmin)",
  },
};

export default PlayAGame;
