import React from "react";
import { Colors, Elevation } from "../Constants";
import { Spring } from "react-spring/renderprops";

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { animationLevel: 0 };
  }

  render() {
    let dividerWidth = this.state.animationLevel > 0 ? "10em" : "0em";
    let frameSize = this.state.animationLevel > 0 ? "5.5em" : "0em";
    let frameMargin = this.state.animationLevel > 0 ? "0em" : "5.5em";
    let verticalFrameMargin = this.state.animationLevel > 0 ? "41em" : "46em";
    return (
      <div style={styles.container}>
        <Spring
          from={{ height: "0em", marginBottom: "46em" }}
          to={{ height: frameSize, marginBottom: verticalFrameMargin }}
        >
          {(frameHeight) => (
            <div
              style={{
                ...styles.verticalFrame,
                ...frameHeight,
              }}
            />
          )}
        </Spring>
        <Spring
          from={{ width: "0em", marginRight: "5.5em" }}
          to={{ width: frameSize, marginRight: frameMargin }}
        >
          {(frameWidth) => (
            <div
              style={{
                ...styles.horizontalFrame,
                ...styles.flexStart,
                ...frameWidth,
              }}
            />
          )}
        </Spring>
        <Spring
          from={{ marginTop: "50vw" }}
          to={{ marginTop: "0" }}
          onRest={() => this.setState({ animationLevel: 1 })}
        >
          {(upAnim) => (
            <div style={{ ...upAnim, ...styles.floatingContainer }}>
              <div style={styles.textContainer}>
                <h1 style={styles.titleText}>Hey!</h1>
                <Spring from={{ width: "0em" }} to={{ width: dividerWidth }}>
                  {(divAnim) => {
                    return <div style={{ ...styles.divider, ...divAnim }} />;
                  }}
                </Spring>
                <p style={styles.descriptionText}>
                  Big cat fan over here. Also big video game fan. I think AR/VR
                  are the absolute coolest, even though the only headset I
                  (currently) have is a Daydream.
                </p>
                <p style={styles.descriptionText}>
                  I go by Tavarus, Tavaru5, Kog Mizzle (on League), and Sovellis
                  Nailo, King of Iostros. My cats call me "foodgiver" and
                  "pillow". My wife just calls me Silas.
                </p>
              </div>
              <img style={styles.meImage} src={require("../images/me.jpg")} />
            </div>
          )}
        </Spring>
        <Spring
          from={{ width: "0em", marginLeft: "5.5em" }}
          to={{ width: frameSize, marginLeft: frameMargin }}
        >
          {(frameWidth) => (
            <div
              style={{
                ...styles.horizontalFrame,
                ...styles.flexEnd,
                ...frameWidth,
              }}
            />
          )}
        </Spring>
        <Spring
          from={{ height: "0em", marginTop: "46em" }}
          to={{ height: frameSize, marginTop: verticalFrameMargin }}
        >
          {(frameHeight) => (
            <div
              style={{
                ...styles.verticalFrame,
                ...frameHeight,
              }}
            />
          )}
        </Spring>
      </div>
    );
  }
}

const styles = {
  container: {
    backgroundColor: Colors.boneWhite,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    maxHeight: "100vh",
    minHeight: "100vh",
  },
  floatingContainer: {
    backgroundColor: Colors.oceanGray,
    display: "flex",
    width: "60em",
    boxShadow: Elevation.niceLilElevation,
  },
  titleText: {
    fontSize: "2em",
    color: "black",
    fontWeight: "bold",
    marginBottom: "6px",
  },
  textContainer: {
    flex: 1,
    paddingLeft: "2em",
    paddingRight: "2em",
  },
  descriptionText: {
    color: "black",
    fontSize: "1.2em",
  },
  meImage: {
    flex: 1,
    maxHeight: "36em",
    maxWidth: "30em",
  },
  divider: {
    height: "0.75em",
    backgroundColor: "black",
  },
  horizontalFrame: {
    backgroundColor: "black",
    height: "0.5em",
  },
  verticalFrame: {
    backgroundColor: "black",
    width: "0.5em",
  },
  flexStart: {
    marginBottom: "46em",
  },
  flexEnd: {
    marginTop: "46em",
  },
};

export default AboutMe;
