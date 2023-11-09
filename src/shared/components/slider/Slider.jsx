import React from "react";
import { AllPosts } from "./../../data/constant";
import CardPost from "../card/CardPost";
import Slick from "../slick/Slick";
import * as slide from "./../../utils/scriptSlide";

const Slider = () => {
  const renderListPost = () => {
    return AllPosts.map(({ image, content }, index) => {
      return <CardPost image={image} content={content} key={index} />;
    });
  };
  return (
    <div className="slider">
      <div className="listImage">{renderListPost()}</div>
      <div className="align-center">
        <Slick
          idPre={"btn-pre-post"}
          idNext={"btn-next-post"}
          idSlide={"activeSlide"}
        />
      </div>
    </div>
  );
};

export default Slider;
