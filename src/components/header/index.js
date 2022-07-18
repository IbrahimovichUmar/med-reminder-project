import React from "react";
import "./index.css";

import logoLg from "../../assets/images/header/logo-lg.svg";
import logoMd from "../../assets/images/header/logo-md.svg";
import logoSm from "../../assets/images/header/logo-sm.svg";

export const Header = () => {
  return (
    <header className="header wrapper">
      <div className="header__logo">
        <picture>
          <source srcset={logoSm} media="(max-width: 400px)" />
          <source srcset={logoMd} media="(max-width: 840px)" />
          <img className="logo__img" src={logoLg} alt="features" />
        </picture>
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
  );
};
