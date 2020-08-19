import React from "react";
import { Colors, Elevation } from "../Constants";

export default function AboutMe() {
  return (
    <div style={styles.container}>
      <div style={styles.floatingContainer}>
        <div style={styles.textContainer}>
          <h1 style={styles.titleText}>Hey!</h1>
          <div style={styles.divider} />
          <p style={styles.descriptionText}>
            Big cat fan over here. Also big video game fan. I think AR/VR are
            the absolute coolest, even though the only headset I (currently)
            have is a Daydream.
          </p>
          <p style={styles.descriptionText}>
            I go by Tavarus, Tavaru5, Kog Mizzle (on League), and Sovellis
            Nailo, King of Iostros. My cats call me "foodgiver" and "pillow". My
            wife just calls me Silas.
          </p>
        </div>
        <img style={styles.meImage} src={require("../images/me.jpg")} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: Colors.boneWhite,
    justifyContent: "space-around",
    minHeight: "100vh",
    paddingTop: "20vh",
    paddingBottom: "20vh",
    paddingLeft: "20vw",
    paddingRight: "20vw",
  },
  floatingContainer: {
    backgroundColor: Colors.oceanGray,
    display: "flex",
    boxShadow: Elevation.niceLilElevation,
  },
  titleText: {
    fontSize: "calc(18px + 2vmin)",
    color: "black",
    fontWeight: "bold",
    marginBottom: "6px",
  },
  textContainer: {
    flex: 1,
    paddingLeft: "calc(16px + 2vw)",
    paddingRight: "calc(16px + 2vw)",
  },
  descriptionText: {
    color: "black",
    fontSize: "20px",
  },
  meImage: {
    flex: 1,
    maxHeight: "60vmin",
    maxWidth: "50vmin",
  },
  divider: {
    width: "calc(56px + 4vmin)",
    height: "calc(6px + 1vmin)",
    backgroundColor: "black",
  },
};
