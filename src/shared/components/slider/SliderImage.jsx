import React from "react";
import { AllExclusiveContents } from "./../../data/constant";
import { ReactComponent as IconDownload } from "./../../assets/download.svg";
import Slick from "../slick/Slick";
import SliderAction from "../../models/slider";

const SliderImage = () => {
  window.addEventListener("load", () => {
    const slider = new SliderAction(
      document.querySelector(".slider-image .listImage"),
      document.querySelector(".slider-image .image-card"),
      document.querySelectorAll(".slider-image .slide-button-image"),
      "activeImage",
      "btn-pre-img",
      "btn-next-img"
    );

    slider.init();
  });
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
          classNameButton={"slide-button-image"}
        />
      </div>
    </div>
  );
};

export default SliderImage;
