import React from "react";
import { ReactComponent as IconSocial } from "../../assets/iconSocial.svg";
import { ReactComponent as IconLanguage } from "../../assets/web.svg";
import Logo from "../../assets/Gameloft_Logo_Flat_White_Line.png";
import Select from "../../components/form/Select";

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="footer-top">
          <div className="footer-left">
            <img src={Logo} alt="" />
            <div className="social">
              <p>Follow us</p>
              <div className="list-social">
                <IconSocial />
              </div>
            </div>
            <div className="lang">
              <Select
                name={"language"}
                className={"language"}
                listOption={[
                  {
                    lable: "English",
                    value: "En",
                  },
                ]}
              />
              <IconLanguage />
            </div>
          </div>
          <div className="footer-right">
            <div className="VISIT">
              <h3>VISIT</h3>
              <ul>
                <li>Gameloft Games</li>
                <li>Gameloft Careers</li>
                <li>Gameloft News</li>
                <li>Gameloft Forum</li>
                <li>Gameloft Corporate</li>
                <li>Gameloft Advertising</li>
                <li>Gameloft Support</li>
              </ul>
            </div>
            <div className="legal">
              <h3>LEGAL</h3>
              <ul>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>Cookies Policy</li>
                <li>EULA</li>
                <li>Legal Notices</li>
                <li>Event Rules</li>
                <li>Business Contacts</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            ©2020 Gameloft. All rights reserved. Gameloft and the Gameloft logo
            are trademarks of Gameloft in the U.S. and/or other countries. .
          </p>
          <p>
            All other trademarks are the property of their respective owners.
          </p>
        </div>
      </div>
      <div className="line"></div>
    </footer>
  );
};

export default Footer;
