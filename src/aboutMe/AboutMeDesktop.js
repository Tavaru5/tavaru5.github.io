import React, { useState } from "react";
import { Colors, Elevation } from "../Constants";
import Header from "../header/Header";
import AnimatedBar, { barDirections } from "./AnimatedBar";
import { useSpring, animated } from "react-spring";

export default function AboutMeDesktop(props) {

  const [animationLevel, setAnimationLevel] = useState(0)
  let showBars = animationLevel > 0;
  const upAnim = useSpring({
    from: { marginTop: "50vw" },
    to: { marginTop: "0" },
    onRest: () => setAnimationLevel(1),
  })

  return (
    <div style={styles.container}>
      <Header isMobile={false} />
      <animated.div style={{ ...styles.floatingContainer, ...upAnim, }}>
        <div style={styles.textContainer}>
          <h1 style={styles.titleText}>Hey!</h1>
          <AnimatedBar
            show={showBars}
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
        <img style={styles.meImage} src={require("../images/me.jpg")} />
      </animated.div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: Colors.oceanGray,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    minHeight: "100vh",
  },
  floatingContainer: {
    backgroundColor: Colors.boneWhite,
    display: "flex",
    flexDirection: "row",
    width: "70%",
    minHeight: "36vw",
    boxShadow: Elevation.niceLilElevation,
  },
  textContainer: {
    fontSize: "1.5em",
    height: "36vw",
    flex: 1,
    paddingLeft: "2em",
    paddingRight: "2em",
    overflowY: "auto"
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
