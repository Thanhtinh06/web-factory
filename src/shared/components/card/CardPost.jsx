import React from "react";
import { ReactComponent as FacebookIcon } from "./../../assets/facebookBold.svg";
import IconCustome from "../icon/IconCustome";

const CardPost = ({ image, content }) => {
  return (
    <div className="card-post">
      <div className="header-card">
        <FacebookIcon />
        <IconCustome nameIcon="material-symbols:share" color="gray" />
      </div>
      <div className="image">{image}</div>
      <div className="body-card">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default CardPost;
