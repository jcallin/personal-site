import IdealImage from "react-ideal-image";
import landing from "../../media/landing.jpg";
import React from "react";

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

const ComingSoon = () => {
  return (
    <>
      <h2 className="under-construction h2">Under Construction</h2>
      <IdealImage
        theme={theme}
        placeholder={{ lqip: landing.preSrc }}
        width={1920}
        height={1080}
        srcSet={[]}
      />
    </>
  );
};

export default ComingSoon;
