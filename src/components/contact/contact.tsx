import React from "react";
import roundArrow from "../../assets/arrow-right-circle.svg";
import facebook from "../../assets/facebook.svg";
import github from "../../assets/github.svg";
import instagram from "../../assets/instagram.svg";
import Footer from "./footer";

const Contact: React.FC<{}> = () => {
  return (
    <div className="container contact__container" id="contact">
      <div className="contact__container__content">
        <div className="contact__container__content__contact__section">
          <h2 className="contact__container__content__heading">Let’s talk</h2>
          <form
            action="https://formsubmit.co/ashuacharya622@gmail.com"
            method="POST"
            className="contact__container__content__form u-ml u-mr"
          >
            <div className="contact__container__content__form__content">
              <div className="contact__container__content__form__content__upper">
                <ul>
                  <li>
                    <span>Name</span>
                    <input type="text" />
                  </li>
                  <li>
                    <span>Email</span>
                    <input type="email" />
                  </li>
                  <li>
                    <span>Message</span>
                    <input type="text" />
                  </li>
                </ul>
                <button
                  className="u-btn"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  type="submit"
                >
                  <span>Connect</span>
                  <img src={roundArrow} alt="arrow" />
                </button>
              </div>
              <div className="contact__container__content__form__content__lower">
                <div className="contact__container__content__form__content__lower__links">
                  <a
                    href="https://www.facebook.com/iamashuacharya"
                    target="_blank"
                  >
                    <img src={facebook} alt="facebook" />
                  </a>
                  <a href="https://github.com/ashuacharya123" target="_blank">
                    <img src={github} alt="github" />
                  </a>
                  <a
                    href="https://www.instagram.com/iamashuacharya/"
                    target="_blank"
                  >
                    <img src={instagram} alt="instagram" />
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
