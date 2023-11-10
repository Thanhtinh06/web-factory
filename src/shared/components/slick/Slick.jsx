import { Icon } from "@iconify/react";
import React from "react";

const Slick = ({ idPre, idNext, idSlide, classNameButton }) => {
  return (
    <div className="slick">
      <button className={`left-arrow ${classNameButton} disable`} id={idPre}>
        <Icon icon={"ph:arrow-left-light"} />
      </button>
      <div className="numberSlider">
        <span id={idSlide}>01</span> <span id={`total-items-${idSlide}`}></span>
      </div>
      <button className={`right-arrow ${classNameButton}`} id={idNext}>
        <Icon icon={"ph:arrow-right-light"} />
      </button>
    </div>
  );
};

export default Slick;
