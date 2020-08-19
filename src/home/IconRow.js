import React from "react";
import { Link } from "react-router-dom";

const icons = [
  {
    external: true,
    link: "https://www.github.com/tavaru5",
    icon: require("../images/githubIcon.png"),
    description: "GitHub",
  },
  {
    external: true,
    link: "https://www.twitter.com/tavaru5",
    icon: require("../images/twitterIcon.png"),
    description: "Twitter",
  },
  {
    external: false,
    link: "/aboutme",
    icon: require("../images/aboutMeIcon.png"),
    description: "About Me",
  },
  {
    external: false,
    link: "/playagame",
    icon: require("../images/playAGameIcon.png"),
    description: "Play a game?",
  },
  {
    external: false,
    link: "/portolio",
    icon: require("../images/portfolioIcon.png"),
    description: "Portfolio",
  },
];

class IconRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { description: ". . ." };
  }

  render() {
    return (
      <div>
        {icons.map((item, i) => {
          const image = (
            <img
              src={item.icon}
              style={styles.linkIcon}
              onMouseEnter={() =>
                this.setState({ description: item.description })
              }
              onMouseLeave={() => this.setState({ description: ". . ." })}
            />
          );
          if (item.external) {
            return <a href={item.link}>{image}</a>;
          } else {
            return <Link to={item.link}>{image}</Link>;
          }
        })}
        <p style={styles.description}>{this.state.description}</p>
      </div>
    );
  }
}

const styles = {
  linkIcon: {
    height: "calc(48px + 2vmin)",
    width: "calc(48px + 2vmin)",
    paddingRight: "16px",
    paddingLeft: "16px",
  },
  description: {
    color: "black",
    fontSize: "calc(18px + 2vmin)",
  },
};

export default IconRow;
