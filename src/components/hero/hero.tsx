import React, { useState, useLayoutEffect, useEffect } from "react";
import logo from "../../assets/Logo.svg";

const Hero: React.FC<{}> = () => {
  const [num, setNum] = useState<string>("five");

  const [move, setMove] = useState<number>(0);

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

  return (
    <div className="container hero__container" id="num">
      <div className="hero__container__content">
        <img src={logo} alt="" />
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
