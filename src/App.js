import React from "react";
import "./App.css";
//import logo from "./logo.svg";
import bannerImg from "./assets/images/banner/banner.png";
import logo from "./assets/images/header/logo.svg";
import appStore from "./assets/images/banner/app-store.png";
import playStore from "./assets/images/banner/play-store.png";
import platform1 from "./assets/images/footer/footer-platform1.jpg";
import platform2 from "./assets/images/footer/footer-platform2.jpg";

import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";

// import ContactUs from "./contact/index";

function App() {
  return (
    <div className="app">
      <header className="header wrapper">
        <div className="header__logo">
          <img className="logo__img" src={logo} alt="/" />
          <p className="text__logo1">Med</p>
          <p className="text__logo2">reminder</p>
        </div>
        <div className="navbar">
          <ul>
            <li className="active1">Home</li>
            <li className="acttive2">About</li>
            <li className="active3">Features</li>
            <li className="active4">Contact us</li>
            <li>Get the app</li>
          </ul>
        </div>
      </header>
      <div className="banner">
        <div className="banner__content">
          <div className="banner__inner__content">
            <div className="first">
              <img src={bannerImg} />
            </div>
            <div className="second">
              <p className="banner__description">
                Why be worried about {"\n"}
                forgetting to take your{"\n"}
                medicine when you have
              </p>
              <p className="banner__logo">
                Med<span>reminder</span>
              </p>
            </div>
          </div>
        </div>
        <div className="banner__buttons">
          <a href="https://www.apple.com" target="blanck">
            <img src={appStore} />
          </a>
          <a
            className="app__store"
            href="https://play.google.com"
            target="blanck"
          >
            <img src={playStore} />
          </a>
        </div>
      </div>
      {/* <ContactUs /> */}
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
          <a
            href="https://www.instagram.com/"
            className="insta"
            target="blanck"
          >
            <AiOutlineInstagram font-size="35px" />
          </a>
          <a
            href="https://www.twitter.com/"
            className="twitter"
            target="blanck"
          >
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
    </div>
  );
}

export default App;

/*

          <div className="banner__text">
            

           

          </div> */
