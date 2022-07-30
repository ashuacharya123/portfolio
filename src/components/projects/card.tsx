import React from "react";
import { data } from "./data";
import roundArrow from "../../assets/arrow-right-circle.svg";

const Card: React.FC<any> = (props) => {
  const item: number = props.props;
  const cardData: any = data;
  const cardItem: any = cardData[item];

  return (
    <div
      className="projects__container__content__card__container__card u-btn"
      id="card"
      data-before-content={cardItem.name}
      onClick={() => window.open(cardItem.link, "_blank")}
    >
      <div className="projects__container__content__card__container__card__details">
        {cardItem.description}
      </div>
      <div className="projects__container__content__card__container__card__image">
        <img src={cardItem.image} alt="" />
      </div>
      <a
        href={cardItem.link}
        className="u-text-decoration-none u-btn"
        target="_blank"
      >
        <span className="u-btn">Visit</span>
        <img src={roundArrow} alt="" />
      </a>
    </div>
  );
};

export default Card;
