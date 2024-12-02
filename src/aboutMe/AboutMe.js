import React from "react";
import useCheckMobileScreen from "../hooks/useCheckMobileScreen";
import AboutMeDesktop from "./AboutMeDesktop";
import AboutMeMobile from "./AboutMeMobile";

export default function AboutMe(props) {
  const isMobile = useCheckMobileScreen();

  if (isMobile) {
    return <AboutMeMobile />
  }
  return <AboutMeDesktop />
}
