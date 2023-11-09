import React from "react";
import SliderFocus from "../../../shared/components/slider/SliderFocus";

const Event = () => {
  return (
    <section className="event section" id="section-4">
      <div className="header-section">
        <h2 className="title text-blue">Special Events & Promotional</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos.
        </p>
      </div>
      <div className="event-body">
        <div className="slider">
          <SliderFocus />
        </div>
        <div className="navigate"></div>
      </div>
    </section>
  );
};

export default Event;
