import React from "react";
import { AllPosts } from "./../../data/constant";
import CardPost from "../card/CardPost";
import Slick from "../slick/Slick";
import SliderAction from "../../models/slider";

const Slider = () => {
  const renderListPost = () => {
    return AllPosts.map(({ image, content }, index) => {
      return <CardPost image={image} content={content} key={index} />;
    });
  };

  window.addEventListener("load", () => {
    const slider = new SliderAction(
      document.querySelector(".slider .listImage"),
      document.querySelector(".slider .card-post"),
      document.querySelectorAll(".slider .slide-button"),
      "activeSlide",
      "btn-pre-post"
    );

    slider.init();
  });

  return (
    <div className="slider">
      <div className="listImage load-more">
        {renderListPost()}
        <div className="overley">
          <button className="more btn-form">MORE</button>
        </div>
      </div>

      <div className="align-center change-slide">
        <Slick
          idPre={"btn-pre-post"}
          idNext={"btn-next-post"}
          idSlide={"activeSlide"}
          classNameButton={"slide-button"}
        />
      </div>
    </div>
  );
};

export default Slider;
