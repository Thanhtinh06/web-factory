import { Icon } from "@iconify/react";
import React from "react";

const ButtonIcon = ({ nameIcon, color = "" }) => {
  return (
    <button>
      <Icon icon={nameIcon} color={color} />
    </button>
  );
};

export default ButtonIcon;
