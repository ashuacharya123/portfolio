import React, { useState, useLayoutEffect, useEffect } from "react";
import * as Bowser from "bowser";
import logo from "../../assets/Logo.svg";
import roundArrow from "../../assets/arrow-right-circle.svg";
import facebook from "../../assets/facebook.svg";
import github from "../../assets/github.svg";
import instagram from "../../assets/instagram.svg";
import home from "../../assets/home.svg";
import award from "../../assets/award.svg";
import airplay from "../../assets/airplay.svg";
import skills from "../../assets/skills.svg";
import contact from "../../assets/contact.svg";

const Hero: React.FC<{}> = () => {
  const browser = Bowser.getParser(window.navigator.userAgent);

  const [num, setNum] = useState<string>("five");
  const [dn, setDn] = useState<boolean>(true);
  const [move, setMove] = useState<number>(0);
  const [width, setWidth] = useState<number>(window.visualViewport.width);

  const [sound, setSound] = useState<boolean>(true);

  const resizeHandler = () => {
    setWidth(window.visualViewport.width);
  };
  window.visualViewport.addEventListener("resize", resizeHandler);

  useLayoutEffect(() => {
    const app: any = document.querySelector(".App__container");

    app.addEventListener("scroll", () => {
      setMove(app.scrollTop / window.innerHeight);
    });
  }, []);

  useEffect(() => {
    move >= 0 && move < 1
      ? setNum("one")
      : move >= 1 && move < 2
      ? setNum("two")
      : move >= 2 && move < 3
      ? setNum("three")
      : move >= 3 && move < 4
      ? setNum("four")
      : setNum("five");
  }, [move]);

  useEffect(() => {
    const audio = require("../../assets/click.mp3");
    const htmlaudio: HTMLAudioElement = new Audio(audio);
    if (sound === true) {
      htmlaudio.play();
    }
  }, [num]);

  useEffect(() => {
    window.setTimeout(() => {
      setDn(false);
    }, 500);
  }, []);

  const style = {
    backgroundAttachment: "fixed",
  };
  if (browser.getBrowser().name === "Safari") {
    style.backgroundAttachment = "scroll";
  }

  return (
    <div className="container hero__container" id="num">
      <div className="hero__container__content" id="home" style={style}>
        <div className="hero__container__content__logo">
          <img src={logo} alt="" />
        </div>
        <div className="audio-enable" id={dn ? "dn" : ""}>
          <h3 className="audio-enable__text">
            Continue with <span>sound</span> ?
          </h3>
          <div>
            <button
              className="u-btn "
              onClick={() => {
                setSound(false);
                setDn(true);
              }}
            >
              No
            </button>
            <button
              className="u-btn"
              onClick={() => {
                setDn(true);
              }}
            >
              Yes
            </button>
          </div>
        </div>

        <div className="hero__container__content__menu">
          <a href="#home" id={width < 768 ? "u-dn" : ""}>
            <div>
              <img src={logo} alt="logo" />
            </div>
          </a>
          <a
            href="#home"
            className={width < 768 ? "u-ml" : ""}
            id={num === "one" ? "active" : ""}
          >
            <div>
              <img src={home} alt="home" />
            </div>
            <p>Home</p>
          </a>
          <a href="#about" id={num === "two" ? "active" : ""}>
            <div className="">
              <img src={award} alt="about" />
            </div>
            <p>About</p>
          </a>
          <a href="#skills" id={num === "three" ? "active" : ""}>
            <div className="">
              <img src={skills} alt="skills" />
            </div>
            <p>Skills</p>
          </a>
          <a href="#projects" id={num === "four" ? "active" : ""}>
            <div className="">
              <img src={airplay} alt="projects" />
            </div>
            <p>Projects</p>
          </a>
          <a
            href="#contact"
            className={width < 768 ? "u-mr" : ""}
            id={num === "five" ? "active" : ""}
          >
            <div className="">
              <img src={contact} alt="contact" />
            </div>
            <p>Contact</p>
          </a>
          <div className="u-links" id={width < 768 ? "u-dn" : ""}>
            <a href="https://www.facebook.com/iamashuacharya" target="_blank">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="https://github.com/ashuacharya123" target="_blank">
              <img src={github} alt="github" />
            </a>
            <a href="https://www.instagram.com/iamashuacharya/" target="_blank">
              <img src={instagram} alt="instagram" />
            </a>
          </div>
        </div>

        <div
          className="hero__container__content__whee "
          id={
            move >= 3 && move < 4 && width < 768
              ? "u-bg-img"
              : move >= 4 && width < 768
              ? "u-bg-black"
              : ""
          }
        >
          <div className="hero__container__content__wheel" id={num}>
            <li className="list u-tdn">
              <a href="#contact" className="u-tdn">
                5
              </a>
            </li>
            <li className="list">
              <a href="#projects" className="u-tdn">
                4
              </a>{" "}
            </li>
            <li className="list">
              <a href="#skills" className="u-tdn">
                3
              </a>{" "}
            </li>
            <li className="list">
              <a href="#about" className="u-tdn">
                2
              </a>{" "}
            </li>
            <li className="list">
              <a href="#home" className="u-tdn">
                1
              </a>{" "}
            </li>
          </div>
        </div>
        <h1 className="hero__container__content__heading u-ml">
          <span>I make </span>Beautiful websites
        </h1>
        <p className="hero__container__content__paragraph ">
          <li>Full stack web developer</li>
          <li>UI UX designer</li>
        </p>
        <a
          href="#projects"
          className="u-text-decoration-none u-ml u-btn"
          id="a"
        >
          <span>Have a look</span>
          <img src={roundArrow} alt="arrow" />
        </a>
        <div className="hero__container__content__links u-ml">
          <a href="https://www.facebook.com/iamashuacharya" target="_blank">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://github.com/ashuacharya123" target="_blank">
            <img src={github} alt="github" />
          </a>
          <a href="https://www.instagram.com/iamashuacharya/" target="_blank">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
