import React from "react";
import { Colors, Elevation } from "../Constants";
import { Spring } from "react-spring/renderprops";
import AnimatedBar, { barDirections } from "./AnimatedBar";

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { animationLevel: 0 };
  }

  render() {
    let showBars = this.state.animationLevel > 0;

    return (
      <div style={styles.container}>
        <AnimatedBar
          show={showBars}
          size={5}
          direction={barDirections.DOWN}
          addedMargin={41}
          style={{ marginRight: "-0.5em" }}
        />
        <AnimatedBar
          show={showBars}
          size={5.5}
          direction={barDirections.RIGHT}
          style={{ marginBottom: "46em" }}
        />

        <Spring
          from={{ marginTop: "50vw" }}
          to={{ marginTop: "0" }}
          onRest={() => this.setState({ animationLevel: 1 })}
        >
          {(upAnim) => (
            <div style={{ ...upAnim, ...styles.floatingContainer }}>
              <div style={styles.textContainer}>
                <h1 style={styles.titleText}>Hey!</h1>
                <AnimatedBar
                  show={showBars}
                  size={10}
                  direction={barDirections.RIGHT}
                  thickness="0.75em"
                />

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
        <AnimatedBar
          show={showBars}
          size={5.5}
          direction={barDirections.LEFT}
          style={{ marginTop: "46em" }}
        />

        <AnimatedBar
          show={showBars}
          size={5}
          direction={barDirections.UP}
          addedMargin={41}
          style={{ marginLeft: "-0.5em" }}
        />
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
};

export default AboutMe;
