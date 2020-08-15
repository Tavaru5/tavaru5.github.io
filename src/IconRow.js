import React from "react";
import "./IconRow.css";
import { Link } from "react-router-dom";

export default function IconRow() {
  const icons = [
    {
      external: true,
      link: "https://www.github.com/tavaru5",
      icon: require("./githubIcon.png"),
    },
    {
      external: true,
      link: "https://www.twitter.com/tavaru5",
      icon: require("./twitterIcon.png"),
    },
    { external: false, link: "/aboutme", icon: require("./aboutMeIcon.png") },
    {
      external: false,
      link: "/playagame",
      icon: require("./playAGameIcon.png"),
    },
    {
      external: false,
      link: "/portolio",
      icon: require("./portfolioIcon.png"),
    },
  ];

  return (
    <div className="IconRow">
      {icons.map((item, i) => {
        const image = <img src={item.icon} className="LinkIcon" />;
        if (item.external) {
          return <a href={item.link}>{image}</a>;
        } else {
          return <Link to={item.link}>{image}</Link>;
        }
      })}
    </div>
  );
}
