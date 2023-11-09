import React from "react";
import Nintengo from "./../../assets/Image 242.png";
import Microsoft from "./../../assets/microsoft.png";
import Steam from "./../../assets/steam.png";

const Download = () => {
  return (
    <div className="download">
      <div className="download-content">
        <div>
          <p className="text-blue">Download latest version</p>
        </div>
        <div className="image-download">
          <img src={Nintengo} alt="nintendo" id="item1" />
          <img src={Microsoft} alt="microsoft" id="item2" />
          <img src={Steam} alt="steam" id="item3" />
        </div>
      </div>
    </div>
  );
};

export default Download;
