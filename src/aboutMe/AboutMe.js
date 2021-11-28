import React from "react";
import { Colors, Elevation } from "../Constants";
import { Spring } from "react-spring/renderprops";
import AnimatedBar, { barDirections } from "./AnimatedBar";
import Header from "../Header";

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { animationLevel: 0 };
  }

  render() {
    let showBars = this.state.animationLevel > 0;
    let backOpacity = showBars ? 1 : 0;

    return (
      <div style={styles.container}>
        <Header endOpacity={backOpacity} style={{ marginRight: "0.5em" }} />

        <AnimatedBar
          show={showBars}
          size={5}
          direction={barDirections.DOWN}
          addedMargin={41}
          style={{ marginRight: "-1em" }}
          sizeUnit={"vw"}
        />
        <AnimatedBar
          show={showBars}
          size={5.5}
          direction={barDirections.RIGHT}
          style={{ marginBottom: "46vw" }}
          sizeUnit={"vw"}
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
            </div>
          )}
        </Spring>
        <AnimatedBar
          show={showBars}
          size={5.5}
          direction={barDirections.LEFT}
          style={{ marginTop: "46vw" }}
          sizeUnit={"vw"}
        />

        <AnimatedBar
          show={showBars}
          size={5}
          direction={barDirections.UP}
          addedMargin={41}
          style={{ marginLeft: "-1em" }}
          sizeUnit={"vw"}
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
    minHeight: "100vh",
  },
  floatingContainer: {
    backgroundColor: Colors.oceanGray,
    display: "flex",
    width: "60%",
    minHeight: "36vw",
    flexWrap: "wrap",
    boxShadow: Elevation.niceLilElevation,
    overflow: "auto",
  },
  titleText: {
    fontSize: "2em",
    color: "black",
    fontWeight: "bold",
    marginBottom: "6px",
  },
  textContainer: {
    fontSize: "1.5em",
    flex: 1,
    paddingLeft: "2em",
    paddingRight: "2em",
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

export default AboutMe;
