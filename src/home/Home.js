import React from "react";
import LinkRow from "./LinkRow";
import { Colors } from "../Constants";

export default function Home() {
  return (
    <div style={styles.home}>
      <p style={styles.headerText}>t a v a r u ( 5 / s )</p>
      <LinkRow />
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
    backgroundColor: Colors.oceanGray,
    minHeight: "100vh",
  },
  headerText: {
    fontSize: "calc(48px + 2vmin)",
    color: "black",
    fontWeight: "bold",
  },
};
