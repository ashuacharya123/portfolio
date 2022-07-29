import React from "react";
import ts from "../../assets/skills/typescript.svg";
import express from "../../assets/skills/express.svg";
import git from "../../assets/skills/git.svg";
import node from "../../assets/skills/node.svg";
import figma from "../../assets/skills/figma.svg";
import react from "../../assets/skills/react.svg";
import sass from "../../assets/skills/sass.svg";
import mongodb from "../../assets/skills/mongodb.svg";

const Skills: React.FC<{}> = () => {
  return (
    <div className="container skills__container" id="skills">
      <div className="skills__container__content">
        <h2 className="skills__container__content__heading">My skills</h2>
        <ul>
          <li>
            <span>Typescript</span>
            <span>
              <img src={ts} alt="" />
            </span>
          </li>
          <li>
            <span>Express</span>
            <span>
              <img src={express} alt="" />
            </span>
          </li>
          <li>
            <span>Git</span>
            <span>
              <img src={git} alt="" />
            </span>
          </li>
          <li>
            <span>Node</span>
            <span>
              <img src={node} alt="" />
            </span>
          </li>
          <li>
            <span>Figma</span>
            <span>
              <img src={figma} alt="" />
            </span>
          </li>
          <li>
            <span>React</span>
            <span>
              <img src={react} alt="" />
            </span>
          </li>
          <li>
            <span>Sass</span>
            <span>
              <img src={sass} alt="" />
            </span>
          </li>
          <li>
            <span>Mongodb</span>
            <span>
              <img src={mongodb} alt="" />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
