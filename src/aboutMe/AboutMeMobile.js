import React from "react";
import { Colors } from "../Constants";
import Header from "../header/Header";
import AnimatedBar, { barDirections } from "./AnimatedBar";

export default function AboutMeMobile(props) {

  return (
    <div style={styles.container}>
      <div>
        <Header isMobile={true} />
      </div>
      <div style={styles.textContainer}>
        <h1 style={styles.titleText}>Hey!</h1>
        <AnimatedBar
          show={true}
          size={40}
          direction={barDirections.RIGHT}
          thickness="0.75em"
          sizeUnit={"%"}
        />
        <p style={styles.descriptionText}>
          Big cat fan over here. Also big video game fan. I think AR/VR
          are the absolute coolest. I currently have a Valve Index, as
          well as a Google Daydream (RIP), but I've only done a small
          bit of VR development. I like AR development though! (link to
          be added to ARTableTop)
        </p>
        <p style={styles.descriptionText}>
          I go by Tavarus, Tavaru5, Kog Mizzle (on League), and Sovellis
          Nailo, King of Iostros. My cats call me "foodgiver" and
          "pillow". My wife just calls me Silas.
        </p>
      </div>
      {/* <img style={styles.meImage} src={require("../images/me.jpg")} /> */}
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: Colors.oceanGray,
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto"
  },
  textContainer: {
    fontSize: "1.5em",
    paddingLeft: "10vw",
    paddingRight: "10vw",
  },
  titleText: {
    fontSize: "2em",
    color: "black",
    fontWeight: "bold",
    marginBottom: "6px",
  },
  descriptionText: {
    color: "black",
    fontSize: "1em",
  },
  meImage: {
    height: "100%",
    maxHeight: "36vw",
  },
};
