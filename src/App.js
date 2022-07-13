import "./App.css";
import logo from "./assets/images/header/logo.svg";
import platform1 from "./assets/images/footer/footer-platform1.jpg";
import platform2 from "./assets/images/footer/footer-platform2.jpg";

// import ContactUs from "./contact/index";

function App() {
  return (
    <div className="med__reminder">
      <div className="wrapper">
        <header className="header ">
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
      </div>
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
            <div className="surveys">
              <ul className="active__footer">
                <li className="active__footer1">Surveys</li>
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
      </footer>
    </div>
  );
}

export default App;
