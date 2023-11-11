import React, { useState, useEffect } from "react";
import { AllEvents } from "./../../data/constant";
import CardEvent from "../card/CardEvent";
import SliderAutoAction from "../../models/sliderAuto";

const SliderFocus = () => {
  // const listImage = document.querySelector(".slider-focus .list-card");
  // const imageCard = document.querySelector(".slider-focus .card-event");
  // const slideButtons = document.querySelectorAll(".slide-number");

  const [activeSlide, setActiveSlide] = useState(0);
  const autoScrollInterval = () =>
    setInterval(() => {
      setActiveSlide((prevActiveSlide) => {
        if (prevActiveSlide === AllEvents.length - 1) {
          return 0;
        }
        return prevActiveSlide + 1;
      });
    }, 3000);

  useEffect(() => {
    const autoScroll = autoScrollInterval();
    return () => {
      clearInterval(autoScroll);
    };
  }, []);

  // const sliderAutoAction = new SliderAutoAction(
  //   listImage,
  //   imageCard,
  //   slideButtons,
  //   activeSlide
  // );

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
          index={index}
        />
      );
    });
  };

  const handleSlideNumberButtonClick = (index) => {
    setActiveSlide(index);
    clearInterval(autoScrollInterval());
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
            className={`navigate-btn ${activeSlide === index ? "active" : ""}`}
            onClick={() => handleSlideNumberButtonClick(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SliderFocus;
