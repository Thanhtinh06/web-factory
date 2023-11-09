import React from "react";
import IconCustome from "../icon/IconCustome";
import { ReactComponent as ImageIcon } from "./../../assets/mount.svg";

const CardEvent = ({ shortTitle, description, className }) => {
  return (
    <div className={`card-event ${className}`}>
      <div className="card-header">
        <div className="header-text">
          <div className="card-title">
            <h3>{shortTitle}</h3>
            <IconCustome nameIcon="material-symbols:share" color="gray" />
          </div>
          <div className="line"></div>
          <p>{description}</p>
        </div>
        <div className="header-image">
          <div>
            <ImageIcon />
          </div>
        </div>
      </div>
      <div className="card-body">
        <div>
          <button className="read-more">READ MORE</button>
          <h3>{shortTitle}</h3>
        </div>
      </div>
    </div>
  );
};

export default CardEvent;
