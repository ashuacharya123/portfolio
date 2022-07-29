import React, { useState, useLayoutEffect, useEffect } from "react";
import logo from "../../assets/Logo.svg";

const Hero: React.FC<{}> = () => {
  const [num, setNum] = useState<string>("one");
  const [dn, setDn] = useState<boolean>(true);
  const [move, setMove] = useState<number>(0);

  const [sound, setSound] = useState<boolean>(true);

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

  console.log(num);

  useEffect(() => {
    window.setTimeout(() => {
      setDn(false);
    }, 1000);
  }, []);

  return (
    <div className="container hero__container" id="num">
      <div className="hero__container__content">
        <div className="hero__container__content__logo">
          <img src={logo} alt="" />
        </div>
        <div className="audio-enable" id={dn ? "dn" : ""}>
          <h3 className="audio-enable__text">Continue with sound ?</h3>
          <div>
            <button
              onClick={() => {
                setSound(false);
                setDn(true);
              }}
            >
              No
            </button>
            <button
              onClick={() => {
                setDn(true);
              }}
            >
              Yes
            </button>
          </div>
        </div>
        <div className="hero__container__content__whee">
          <div className="hero__container__content__wheel" id={num}>
            <li className="list">5</li>
            <li className="list">4</li>
            <li className="list">3</li>
            <li className="list">2</li>
            <li className="list">1</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
