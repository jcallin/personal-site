import React from "react";
import Gallery from "react-grid-gallery";

import Ted from "../../../media/photography/ted.jpg";

const IMAGES = [
  {
    src: Ted,
    thumbnail: Ted,
    thumbnailWidth: 650,
    thumbnailHeight: 300,
    caption: "Ted 'Dogg' climbing 'Mini Dihedral'"
  },
  {
    src: Ted,
    thumbnail: Ted,
    thumbnailWidth: 500,
    thumbnailHeight: 300,
    caption: "Ted 'Dogg' climbing 'Mini Dihedral'"
  },
  {
    src: Ted,
    thumbnail: Ted,
    thumbnailWidth: 650,
    thumbnailHeight: 300,
    caption: "Ted 'Dogg' climbing 'Mini Dihedral'"
  },
  {
    src: Ted,
    thumbnail: Ted,
    thumbnailWidth: 650,
    thumbnailHeight: 300,
    caption: "Ted 'Dogg' climbing 'Mini Dihedral'"
  }
];

const ThirdPage = () => {
  return (
    <div className="photography">
      <p className="description">Here are some photos</p>
      <Gallery
        className="photography"
        images={IMAGES}
        enableImageSelection={false}
        rowHeight="300"
      />
    </div>
  );
};

export default ThirdPage;
