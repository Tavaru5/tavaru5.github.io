import React from "react";
import Button from "@material-ui/core/Button";
import "./PlayAGame.css";
import { ReactComponent as Retry } from "../images/restart.svg";

const states = {
  BUTTONS: 1,
  HAPPY: 2,
  SAD: 3,
};

const buttonStyle = {
  marginLeft: "16px",
  marginRight: "16px",
  color: "white",
  backgroundColor: "#00000000",
};

class PlayAGame extends React.Component {
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
            <Button
              variant="contained"
              style={buttonStyle}
              onClick={() => this.setState({ buttonState: states.HAPPY })}
            >
              Yes :)
            </Button>
            <Button
              variant="contained"
              style={buttonStyle}
              onClick={() => this.setState({ buttonState: states.SAD })}
            >
              no :(
            </Button>
          </div>
        );
        break;
    }

    return (
      <div className="Background">
        <p className="GameText">{gameText}</p>
        {innerContent}
      </div>
    );
  }
}

export default PlayAGame;
