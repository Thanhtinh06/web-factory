import React from "react";
import IconCustome from "../icon/IconCustome";
import { ReactComponent as IconImage } from "./../../../shared/assets/mount.svg";

const CardEvent = () => {
  return (
    <div className="card-event active">
      <div className="card-header">
        <div className="header-text">
          <div className="card-title">
            <h3>short title here</h3>
            <IconCustome nameIcon="material-symbols:share" color="gray" />
          </div>
          <div className="line"></div>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore ...
          </p>
        </div>
        <div className="header-image">
          <div>
            <IconImage />
          </div>
        </div>
      </div>
      <div className="card-body">
        <div>
          <button className="read-more">READ MORE</button>
          <h3>short title here</h3>
        </div>
      </div>
    </div>
  );
};

export default CardEvent;
