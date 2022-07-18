import "./index.css";
import React from "react";

export const Contact = () => {
  return (
    <div className="contact__us">
      <div class="contact__title">
        <h2>Contact Us</h2>
      </div>
      <div class="box">
        <div class="contact form">
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
        </div>
        <div class="inputBox">
          <span>Reason</span>
          <input type="text" placeholder="" />
        </div>
        <br />
        <div class="inputBox">
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
};
