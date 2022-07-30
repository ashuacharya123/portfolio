import React from "react";
import mail from "../../assets/mail.svg";
import phone from "../../assets/phone.svg";

const Footer: React.FC<{}> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer__container">
      <div className="footer__container__content">
        <h2 className="footer__container__content__heading">Ashish Acharya</h2>
        <p className="footer__container__content__paragraph">
          © {currentYear} copyright ashishacharya123.com.np
        </p>
        <div className="footer__container__content__box">
          <div className="footer__container__content__box__heading">
            Reach to me at
          </div>
          <div className="footer__container__content__box__email">
            <img src={mail} alt="" />
            <span>ashuacharya622@gmail.com</span>
          </div>
          <div className="footer__container__content__box__phone">
            <img src={phone} alt="" />
            <span>9867447149</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
