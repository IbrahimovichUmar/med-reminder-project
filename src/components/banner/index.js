import React from "react";
import bannerLg from "../../assets/images/banner/banner-lg.png";
import bannerMd from "../../assets/images/banner/banner-md.png";
import bannerSm from "../../assets/images/banner/banner-sm.png";

import appStoreLg from "../../assets/images/banner/app-store-lg.png";
import appStoreMd from "../../assets/images/banner/app-store-md.png";
import appStoreSm from "../../assets/images/banner/app-store-sm.png";

import playStoreLg from "../../assets/images/banner/play-store-lg.png";
import playStoreMd from "../../assets/images/banner/play-store-md.png";
import playStoreSm from "../../assets/images/banner/play-store-sm.png";

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
              <img src={bannerLg} alt="/" />
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
              <picture>
                <a href="https://www.apple.com/" target="blanck">
                  <source srcset={appStoreSm} media="(max-width: 400px)" />
                  <source srcset={appStoreMd} media="(max-width: 840px)" />
                  <img src={appStoreLg} alt="/" />
                </a>
              </picture>
              <picture>
                <a
                  href="https://play.google.com/store/games?hl=ru/"
                  target="blanck"
                >
                  <source srcset={playStoreSm} media="(max-width: 400px)" />
                  <source srcset={playStoreMd} media="(max-width: 840px)" />
                  <img src={playStoreLg} alt="/" />
                </a>
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
