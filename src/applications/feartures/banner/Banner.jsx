import React from "react";
import { ReactComponent as IconImage } from "./../../../shared/assets/mount.svg";
import ProductDescription from "../../../shared/components/product-description/ProductDescription";
import Download from "../../../shared/components/download/Download";

const Banner = () => {
  return (
    <div className="banner">
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
    </div>
  );
};

export default Banner;
