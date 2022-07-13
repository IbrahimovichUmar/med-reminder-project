import React from "react";
import "./App.css";
//import logo from "./logo.svg";
import bannerImg from "./assets/images/banner/banner1.png";
import logo from "./assets/images/header/logo.svg";
//import ContactUs from "./contact/index";
import appStore from "./assets/images/banner/app-store.png";
import playStore from "./assets/images/banner/play-store.png";

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
          <div className="banner__inner__contentw">
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
    </div>
  );
}

export default App;

/*

          <div className="banner__text">
            

           

          </div> */
