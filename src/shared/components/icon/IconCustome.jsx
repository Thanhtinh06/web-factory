import { Icon } from "@iconify/react";
import React from "react";

const IconCustome = ({ nameIcon, color, className }) => {
  return (
    <div className={`icon ${color} ${className}`}>
      <Icon icon={nameIcon} />
    </div>
  );
};

export default IconCustome;
