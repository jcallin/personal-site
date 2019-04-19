import React from "react";
import IdealImage from "react-ideal-image";
import Landing from "../media/landing-lqip.jpg";

const theme = {
  placeholder: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  img: {
    width: "100%",
    height: "100vh",
    objectFit: "cover"
  }
};

function LandingImage(props) {
  return (
    <IdealImage
      className="landing-image"
      theme={theme}
      placeholder={{ lqip: Landing.preSrc }}
      width={1920}
      height={1080}
      srcSet={props.srcSet}
    />
  );
}

export default LandingImage;
