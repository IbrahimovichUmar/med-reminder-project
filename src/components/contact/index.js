import "./index.css";
import React from "react";

export const Contact = () => {
  return (
    <div className="contact__us ">
      <div class="contact__title">
        <h2>Contact Us</h2>
      </div>
      <div class="box wrapper">
        <div class="contact form">
          <div class="formBx">
            <div class="inputBox">
              <br />
              <span>First Name</span>

              <input type="text" placeholder="" />
            </div>
            <div class="inputBox">
              <br />
              <span>Last Name</span>

              <input type="text" placeholder="" />
            </div>
          </div>
          <div class="formBx">
            <div class="inputBox">
              <br />
              <span>E-mail</span>
              <input type="text" placeholder="" />
            </div>
            <div class="inputBox">
              <br />
              <span>Phone number (optional)</span>

              <input type="text" placeholder="" />
            </div>
          </div>
        </div>
        <div class="inputBox">
          <br />
          <span>Reason</span>

          <input type="text" placeholder="" />
        </div>

        <div class="inputBox">
          <br />
          <span>Your Message</span>
          <textarea placeholder=""></textarea>
        </div>
      </div>

      <div className="wrapper">
        <div class="inputSubmit">
          <input type="submit" value="Submit" />
        </div>

        <div className="inputCheckbox">
          <div className="checkBox__title">
            <p>By submitting your information, you agree to our</p>
            <a href="/">Privacy Policy</a>
          </div>
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
};
