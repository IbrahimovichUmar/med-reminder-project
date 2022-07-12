import "./App.css";
//import logo from "./logo.svg";
import bannerImg from "./assets/banner/banner-images.png";

function App() {
  return (
    <div className="med__reminder wrapper">
      <header className="header">
        <div className="header__logo">
          <p className="logo__text">Medreminder</p>
        </div>
        <div className="navbar">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>Contact us</li>
            <li>Get the app</li>
          </ul>
        </div>
      </header>

      <div className="banner">
        <div className="banner__green">
          <img className="banner__img" src={bannerImg} />
          <div className="banner__text">
            <p>
              Why be worried about{"\n"}
              forgetting to take your{"\n"}
              medicine when you have
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
