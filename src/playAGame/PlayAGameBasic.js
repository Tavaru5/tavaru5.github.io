import React from "react";
import { ReactComponent as Retry } from "../images/restart.svg";
import Header from "../Header";

const states = {
  BUTTONS: 1,
  HAPPY: 2,
  SAD: 3,
};

class PlayAGameBasic extends React.Component {
  constructor(props) {
    super(props);
    this.state = { buttonState: states.BUTTONS };
  }

  render() {
    const retryContent = (
      <Retry onClick={() => this.setState({ buttonState: states.BUTTONS })} />
    );

    var innerContent;
    var gameText;

    switch (this.state.buttonState) {
      case states.HAPPY:
        gameText = "Pog!! Hop in discord";
        innerContent = retryContent;
        break;
      case states.SAD:
        gameText = "Nega-pog :( btw I can't actually see your response";
        innerContent = retryContent;
        break;
      case states.BUTTONS:
      default:
        gameText = "Hey dad wanna play some vidya?";
        innerContent = (
          <div>
            {/* <Button
              variant="contained"
              style={styles.buttonStyle}
              onClick={() => this.setState({ buttonState: states.HAPPY })}
            >
              Yes :)
            </Button>
            <Button
              variant="contained"
              style={styles.buttonStyle}
              onClick={() => this.setState({ buttonState: states.SAD })}
            >
              no :(
            </Button> */}
          </div>
        );
        break;
    }

    return (
      <div style={styles.background}>
        <Header endOpacity={1} style={styles.header} />
        <div style={styles.backgroundContent}>
          <p style={styles.gameText}>{gameText}</p>
          {innerContent}
        </div>
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
  },
  header: {},
  backgroundContent: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  gameText: {
    fontSize: "calc(18px + 2vmin)",
  },
};

export default PlayAGameBasic;
