import * as Bowser from "bowser";
import React from "react";
import Card from "./card";
import { data } from "./data";

const Projects: React.FC<{}> = () => {
  const length = Object.keys(data);

  const browser = Bowser.getParser(window.navigator.userAgent);

  const style = {
    backgroundAttachment: "fixed",
  };
  if (browser.getBrowser().name === "Safari") {
    style.backgroundAttachment = "scroll";
  }

  return (
    <div className="container projects__container" id="projects">
      <div className="projects__container__content" style={style}>
        <div className="projects__container__content__heading ">Projects</div>
        <div className="projects__container__content__card__container">
          {length.map((d) => {
            return <Card key={d} props={d} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
