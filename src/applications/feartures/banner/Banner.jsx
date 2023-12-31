import React from "react";
import { ReactComponent as IconImage } from "./../../../shared/assets/mount.svg";
import ProductDescription from "../../../shared/components/product-description/ProductDescription";
import Download from "../../../shared/components/download/Download";

const Banner = () => {
  return (
    <section className="banner section" id="section-1">
      <div className="icon-left">
        <div>
          <IconImage />
        </div>
      </div>
      <div className="icon-center">
        <IconImage />
      </div>
      <ProductDescription />
      <Download />
    </section>
  );
};

export default Banner;
