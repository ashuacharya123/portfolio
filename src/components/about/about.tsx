import React from "react";
import me from "../../assets/mobile/ash.png";
import me2 from "../../assets/pc/ash.png";

const About: React.FC<{}> = () => {
  const [width, setWidth] = React.useState<number>(window.visualViewport.width);

  const resizeHandler = () => {
    setWidth(window.visualViewport.width);
  };
  window.visualViewport.addEventListener("resize", resizeHandler);
  return (
    <div className="container about__container" id="about">
      <div className="about__container__content">
        <h2 className="u-ml">
          <span>Ashish Acharya,</span>a Computer Science student
        </h2>
        <h3 className="u-ml u-mr">
          Currently, studying CSIT at Butwal Multiple{" "}
          <span>Campus in 3rd semester.</span>
        </h3>
        <h4 className="u-mr">Code</h4>
        <div className="about__container__content__me">
          <img src={width < 768 ? me : me2} alt="Me" />
        </div>
      </div>
    </div>
  );
};

export default About;
