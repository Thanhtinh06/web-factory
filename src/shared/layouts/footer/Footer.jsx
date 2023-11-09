import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-left">
          <img src="" alt="" />
          <div className="social">
            <p>Follow us</p>
            <div className="list-social"></div>
          </div>
          <div className="lang"></div>
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
          <div>
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
        <p>All other trademarks are the property of their respective owners.</p>
      </div>
    </footer>
  );
};

export default Footer;
