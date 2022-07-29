import React from "react";
import me from "../../assets/mobile/ash.png";

const About: React.FC<{}> = () => {
  return (
    <div className="container about__container">
      <div className="about__container__content">
        <h2 className="u-ml">
          <span>Ashish Acharya,</span>a computer science student
        </h2>
        <h3 className="u-ml">
          Currently studing Csit in Butwal Multiple Campus in 3rd semister.
        </h3>
        <h4 className="u-mr">Code</h4>
        <div className="about__container__content__me">
          <img src={me} alt="Me" />
        </div>
      </div>
    </div>
  );
};

export default About;
