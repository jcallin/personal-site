import React from "react";
import IdealImage from "react-ideal-image";
import landing from "../../media/landing.jpg";
import Tiles from "../Tiles";

const theme = {
  img: {
    width: "100%",
    height: "100vh",
    objectFit: "cover"
  }
};

export default () => {
  return (
    <div className="landing-container">
      <IdealImage
        className="landing-image"
        theme={theme}
        placeholder={{ lqip: landing.preSrc }}
        width={1920}
        height={1080}
        srcSet={[
          { width: 1000, src: "media/landing.jpg" },
          { width: 1000, src: "media/landing.webp" }
        ]}
      />
      <Tiles />
      {/* <h2 className='main-title'>Julian Callin</h2> */}
    </div>
  );
};
