import React from "react";
import CardEvent from "../../../shared/components/card/CardEvent";

const Event = () => {
  return (
    <section className="event">
      <div className="event-header">
        <h2 className="title text-blue">Special Events & Promotional</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos.
        </p>
      </div>
      <div className="event-body">
        <div className="slider">
          <CardEvent />
        </div>
        <div className="navigate"></div>
      </div>
    </section>
  );
};

export default Event;
