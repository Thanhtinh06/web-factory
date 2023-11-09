import React from "react";
import { AllEvents } from "./../../data/constant";
import CardEvent from "../card/CardEvent";

const SliderFocus = () => {
  const renderListEvents = () => {
    return AllEvents.map((event, index) => {
      let isActive = index === 2 ? "active" : "";
      return (
        <CardEvent
          image={event.image}
          description={event.description}
          shortTitle={event.shortTitle}
          key={index}
          className={isActive}
        />
      );
    });
  };
  return (
    <div className="slider-focus">
      <div className="wapper">
        <div className="list-card">{renderListEvents()}</div>
      </div>
      <div className="slide-number">
        <button id="btn-1" className="active">
          1
        </button>
        <button id="btn-2">2</button>
        <button id="btn-3">3</button>
        <button id="btn-4">4</button>
        <button id="btn-4">5</button>
      </div>
    </div>
  );
};

export default SliderFocus;
