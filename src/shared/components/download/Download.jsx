import React from "react";
import Nintengo from "./../../assets/Nintendo-eShop-banner.png";
import Microsoft from "./../../assets/microsoft.png";
import Steam from "./../../assets/steam.png";

const Download = () => {
  return (
    <div className="download">
      <div className="download-content flex-between">
        <div>
          <p className="text-blue">Download latest version</p>
        </div>
        <div className="image-download">
          <img src={Nintengo} alt="nintendo" />
          <img src={Microsoft} alt="microsoft" />
          <img src={Steam} alt="steam" />
        </div>
      </div>
    </div>
  );
};

export default Download;
