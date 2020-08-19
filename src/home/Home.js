import React from "react";
import IconRow from "./IconRow";
import { Colors } from "../Constants";

export default function Home() {
  return (
    <div style={styles.home}>
      <p style={styles.headerText}>t a v a r u ( 5 / s )</p>
      <IconRow />
    </div>
  );
}

const styles = {
  home: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.boneWhite,
    minHeight: "100vh",
  },
  headerText: {
    fontSize: "calc(48px + 2vmin)",
    color: "black",
    fontWeight: "bold",
  },
};
