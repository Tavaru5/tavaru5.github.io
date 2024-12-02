import React, { useState } from "react";
import { ReactComponent as Retry } from "../images/restart.svg";
import Header from "../header/Header";
import Button from "../button/Button";

const states = {
  BUTTONS: 1,
  HAPPY: 2,
  SAD: 3,
};

export default function PlayAGameBasic(props) {

  const [buttonState, setButtonState] = useState(states.BUTTONS);
  const retryContent = (
    <Retry onClick={() => setButtonState(states.BUTTONS)} />
  );

  var innerContent;
  var gameText;

  switch (buttonState) {
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
      gameText = "Hey dad wanna play some games?";
      innerContent = (
        <div style={styles.buttonContainer}>
          <Button
            style={styles.buttonStyle}
            onClick={() => setButtonState(states.HAPPY)}
            text={"Yes :)"}
          />
          <Button
            style={styles.buttonStyle}
            onClick={() => setButtonState(states.SAD)}
            text={"no :("}
          />
        </div>
      );
      break;
  }

  return (
    <div style={styles.background}>
      <Header />
      <div style={styles.backgroundContent}>
        <p style={styles.gameText}>{gameText}</p>
        {innerContent}
      </div>
    </div>
  );
}

const styles = {
  buttonStyle: {
    marginLeft: "16px",
    marginRight: "16px",
    backgroundColor: "black",
  },
  background: {
    display: "flex",
  },
  backgroundContent: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    display: "flex",
  },
  gameText: {
    fontSize: "calc(18px + 2vmin)",
  },
};
