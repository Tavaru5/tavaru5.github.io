import React from "react";
import LinkButton from "../LinkButton";

const links = [
  {
    link: "https://www.github.com/tavaru5",
    description: "GitHub",
  },
  {
    link: "/aboutme",
    description: "About Me",
  },
  {
    link: "/playagame",
    description: "Play a game?",
  },
  {
    link: "/portolio",
    description: "Portfolio",
  },
];

export default function LinkRow(props) {
  return (
    <div style={{ display: "flex" }}>
      {links.map((item, i) => {
        return <LinkButton style={styles.button} to={item.link} text={item.description} />;
      })}
    </div>
  );
}

const styles = {
  button: {
    marginRight: "16px",
    marginLeft: "16px",
  },
};

