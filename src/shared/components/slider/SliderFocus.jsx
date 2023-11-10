import React, { useState, useEffect } from "react";
import { AllEvents } from "./../../data/constant";
import CardEvent from "../card/CardEvent";

const SliderFocus = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const autoScrollInterval = setInterval(() => {
      setActiveSlide((prevActiveSlide) => {
        if (prevActiveSlide === AllEvents.length - 1) {
          return 0;
        }
        return prevActiveSlide + 1;
      });
    }, 3000);

    return () => {
      clearInterval(autoScrollInterval);
    };
  }, []);

  const renderListEvents = () => {
    return AllEvents.map((event, index) => {
      let isFocus = activeSlide === index ? "focus" : "";
      return (
        <CardEvent
          image={event.image}
          description={event.description}
          shortTitle={event.shortTitle}
          key={index}
          className={`active ${isFocus}`}
        />
      );
    });
  };

  const handleSlideNumberButtonClick = (event) => {
    const slideNumber = event.target.id.split("-")[1];
    setActiveSlide(slideNumber);
  };

  return (
    <div className="slider-focus">
      <div className="wapper">
        <div className="list-card">{renderListEvents()}</div>
      </div>
      <div className="slide-number">
        {AllEvents.map((event, index) => (
          <button
            id={`btn-${index + 1}`}
            key={index}
            className={activeSlide === index ? "active" : ""}
            onClick={handleSlideNumberButtonClick}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SliderFocus;
