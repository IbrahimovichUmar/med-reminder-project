import React from "react";
import "./index.css";

import featuresLg from "../../assets/images/features/features-lg.png";
import featuresMd from "../../assets/images/features/features-md.png";
import featuresSm from "../../assets/images/features/features-sm.png";

export const Features = () => {
  return (
    <div className="features">
      <div className="features__content wrapper">
        <h1 align="center">Features</h1>
        <picture>
          <source srcset={featuresSm} media="(max-width: 400px)" />
          <source srcset={featuresMd} media="(max-width: 840px)" />
          <img src={featuresLg} alt="features" />
        </picture>
      </div>
    </div>
  );
};
