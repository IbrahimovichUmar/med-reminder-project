import "./App.css";
import logo from "./assets/images/header/logo.svg";
import ContactUs from "./contact/index";

function App() {
  return (
    <div className="med__reminder">
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
      <ContactUs />
    </div>
  );
}

export default App;
