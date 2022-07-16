import React from "react";
import bannerLg from "../../assets/images/banner/banner-lg.png";
import bannerMd from "../../assets/images/banner/banner-md.png";
import bannerSm from "../../assets/images/banner/banner-sm.png";

import appStore from "../../assets/images/banner/app-store.png";
import playStore from "../../assets/images/banner/play-store.png";
import "./index.css";

export const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__content">
        <div className="banner__inner__content wrapper">
          <div className="banner__left">
            <picture>
              <source srcset={bannerSm} media="(max-width: 400px)" />
              <source srcset={bannerMd} media="(max-width: 840px)" />
              <img src={bannerLg} alt="features" />
            </picture>
          </div>
          <div className="banner__right">
            <p className="banner__description">
              Why be worried about forgetting to take your medicine when you
              have
            </p>
            <p className="banner__logo">
              Med<span>reminder</span>
            </p>
            <div className="banner__buttons">
              <a href="https://www.apple.com" target="blanck">
                <img src={appStore} alt="/" />
              </a>
              <a
                className="app__store"
                href="https://play.google.com"
                target="blanck"
              >
                <img src={playStore} alt="/" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
