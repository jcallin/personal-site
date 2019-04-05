import React from "react";
import Tiles from "../Tiles";
import LandingImage from "../LandingImage";

const images = [
  { width: 1000, src: "./media/landing.jpg" },
  { width: 1000, src: "./media/landing.webp" }
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
