import React from "react";
import "./index.css";

import platform1 from "../../assets/images/footer/footer-platform1.jpg";
import platform2 from "../../assets/images/footer/footer-platform2.jpg";

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
              <img src={platform1} alt="/" />

              <img src={platform2} alt="/" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer__icons wrapper">
        <a href="https://www.instagram.com/" className="insta" target="blanck">
          <AiOutlineInstagram font-size="35px" />
        </a>
        <a href="https://www.twitter.com/" className="twitter" target="blanck">
          <FiTwitter font-size="35px" />
        </a>
        <a
          href="https://www.facebook.com/"
          className="facebook"
          target="blanck"
        >
          <FiFacebook font-size="35px" />
        </a>
      </div>
    </footer>
  );
};
