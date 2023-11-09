import React from "react";
import SliderImage from "../../../shared/components/slider/SliderImage";

const ExclusiveContent = () => {
  return (
    <section className="exculsive-content section" id="section-5">
      <div className="header-section">
        <h2 className="title text-blue">Exclusive Game Content</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos.
        </p>
      </div>
      <div className="exculsive-body">
        <div className="slider">
          <SliderImage />
        </div>
      </div>
    </section>
  );
};

export default ExclusiveContent;
