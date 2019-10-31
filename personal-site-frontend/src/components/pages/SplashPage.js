import React from "react";
import Tiles from "../Tiles";
import LandingImage from "../LandingImage";

import LandingWebp from "../../../media/landing.webp";
import LandingJpg from "../../../media/landing.jpg";

const images = [
  { width: 1920, src: LandingWebp },
  { width: 1920, src: LandingJpg }
];

export default () => {
  return (
    <div className="first-page">
      <h2 className="main-title h2">Julian Callin</h2>
      <LandingImage srcSet={images} />
      <Tiles />
    </div>
  );
};
