import React, { useState } from "react";
import Card from "./card";
import { data } from "./data";

const Projects: React.FC<{}> = () => {
  const length = Object.keys(data);

  return (
    <div className="container projects__container" id="projects">
      <div className="projects__container__content">
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
