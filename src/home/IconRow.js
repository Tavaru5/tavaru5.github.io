import React from "react";
import { Link } from "react-router-dom";

export default function IconRow() {
  const icons = [
    {
      external: true,
      link: "https://www.github.com/tavaru5",
      icon: require("../images/githubIcon.png"),
    },
    {
      external: true,
      link: "https://www.twitter.com/tavaru5",
      icon: require("../images/twitterIcon.png"),
    },
    {
      external: false,
      link: "/aboutme",
      icon: require("../images/aboutMeIcon.png"),
    },
    {
      external: false,
      link: "/playagame",
      icon: require("../images/playAGameIcon.png"),
    },
    {
      external: false,
      link: "/portolio",
      icon: require("../images/portfolioIcon.png"),
    },
  ];

  return (
    <div className="IconRow">
      {icons.map((item, i) => {
        const image = <img src={item.icon} style={styles.linkIcon} />;
        if (item.external) {
          return <a href={item.link}>{image}</a>;
        } else {
          return <Link to={item.link}>{image}</Link>;
        }
      })}
    </div>
  );
}

const styles = {
  linkIcon: {
    height: "calc(48px + 2vmin)",
    width: "calc(48px + 2vmin)",
    marginRight: "16px",
    marginLeft: "16px",
  },
};
