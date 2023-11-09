import React from "react";
import { AllExclusiveContents } from "./../../data/constant";
import { ReactComponent as IconDownload } from "./../../assets/download.svg";
import Slick from "../slick/Slick";
import * as slide from "./../../utils/scriptSlide";

const SliderImage = () => {
  const renderListImages = () => {
    return AllExclusiveContents.map(({ image }, index) => {
      return (
        <div className="image-card" key={index}>
          <div className="image">{image}</div>
          <div className="icon-download">
            <IconDownload />
          </div>
        </div>
      );
    });
  };
  return (
    <div className="slider-image">
      <div className="listImage">{renderListImages()}</div>
      <div className="align-center">
        <Slick
          idPre={"btn-pre-img"}
          idNext={"btn-next-img"}
          idSlide={"activeImage"}
        />
      </div>
    </div>
  );
};

export default SliderImage;
