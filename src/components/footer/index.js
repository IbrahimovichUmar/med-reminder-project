import React from "react";
import "./index.css";

import appPlatform1 from "../../assets/images/footer/app-platform1.png";
import appPlatform2 from "../../assets/images/footer/app-platform2.png";
import appPlatform3 from "../../assets/images/footer/app-platform3.png";

import playPlatform1 from "../../assets/images/footer/playstore-platform1.png";
import playPlatform2 from "../../assets/images/footer/playstore-platform2.png";
import playPlatform3 from "../../assets/images/footer/playstore-platform3.png";

import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer>
      <div className="footer__banner">
        <div className="wrapper">
          <div className="footer__head">
            <p className="company__footer">© MEDREMINDER 2021</p>
            <ul className="footer__navbar">
              <li>Resources</li>
              <li>Surveys</li>
              <li>Press Releases</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className="footer__platform">
            <div className="left">
              <p>LEFT</p>
            </div>
            <div className="right">
              <a href="https://www.apple.com/" target="blanck">
                <picture>
                  <source srcset={appPlatform3} media="(max-width: 400px)" />
                  <source srcset={appPlatform2} media="(max-width: 840px)" />
                  <img src={appPlatform1} alt="/" />
                </picture>
              </a>

              <a
                href="https://play.google.com/store/games?hl=ru/"
                target="blanck"
              >
                <picture>
                  <source srcset={playPlatform3} media="(max-width: 400px)" />
                  <source srcset={playPlatform2} media="(max-width: 840px)" />
                  <img src={playPlatform1} alt="/" />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__icons wrapper">
        <a href="https://www.instagram.com/" className="insta" target="blanck">
          <AiOutlineInstagram />
        </a>
        <a href="https://www.twitter.com/" className="twitter" target="blanck">
          <FiTwitter />
        </a>
        <a
          href="https://www.facebook.com/"
          className="facebook"
          target="blanck"
        >
          <FiFacebook />
        </a>
      </div>
    </footer>
  );
};
