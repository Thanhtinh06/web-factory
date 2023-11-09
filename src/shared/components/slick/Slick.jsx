import { Icon } from "@iconify/react";
import React from "react";

const Slick = ({ idPre, idNext, idSlide }) => {
  return (
    <div className="slick ">
      <button className="left-arrow slide-button" id={idPre}>
        <Icon icon={"ph:arrow-left-light"} />
      </button>
      <div className="numberSlider">
        <span id={idSlide}>01</span> <span>/10</span>
      </div>
      <button className="right-arrow slide-button" id={idNext}>
        <Icon icon={"ph:arrow-right-light"} />
      </button>
    </div>
  );
};

export default Slick;
