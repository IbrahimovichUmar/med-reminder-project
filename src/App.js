import "./App.css";
import logo from "./assets/images/header/logo.svg";
// import platform1 from "./assets/images/footer/footer-platform1.jpg";
// import platform2 from "./assets/images/footer/footer-platform2.jpg";

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
              <li className="active1">
                <a href="/">Home</a>
              </li>
              <li className="acttive2">
                <a href="/">About</a>
              </li>
              <li className="active3">
                <a href="/">Features</a>
              </li>
              <li className="active4">
                <a href="/">Contact us</a>
              </li>
              <li>
                <a href="/">Get the app</a>
              </li>
            </ul>
          </div>
        </header>
        <div className="contact__us">
          <div class="contact__title">
            <h2>Contact Us</h2>
          </div>
          <div class="box">
            <div class="contact form">
              <form>
                <div class="formBx">
                  <div class="inputBox">
                    <span>First Name</span>
                    <input type="text" placeholder="" />
                  </div>
                  <div class="inputBox">
                    <span>Last Name</span>
                    <input type="text" placeholder="" />
                  </div>
                </div>
                <div class="formBx">
                  <div class="inputBox">
                    <span>E-mail</span>
                    <input type="text" placeholder="" />
                  </div>
                  <div class="inputBox">
                    <span>Phone number (optional)</span>
                    <input type="text" placeholder="" />
                  </div>
                </div>

                <div class="inputBox">
                  <span>Reason</span>
                  <input type="text" placeholder="" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <br />
        <div class="inputBox">
          {" "}
          <span>Your Message</span>
          <textarea placeholder=""></textarea>
        </div>
      </div>
      <div className="wrapper">
        <div class="inputSubmit">
          <input type="submit" value="Submit" />
        </div>

        <br />
        <div className="inputCheckbox">
          <div className="checkBox__title">
            <p>By submitting your information, you agree to our</p>
            <a href="/">Privacy Policy</a>
          </div>
          <br />
          <div className="agree__txt">
            <form>
              <input type="checkbox" name="taste" value="pie" />{" "}
            </form>

            <h3>Agree to terms and conditions</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
