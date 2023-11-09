import React from "react";
import { ReactComponent as StarIcon } from "./../../assets/rating.svg";

const ProductDescription = () => {
  return (
    <div className="product">
      <div className="product-header">
        <h2 className="title">Gameloft game</h2>
        <div className="rating">
          <p>Rating/Action | </p>
          <StarIcon />
        </div>
      </div>
      <div className="product-body">
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud itation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit... Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud itation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit...
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
