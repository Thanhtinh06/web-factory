import React from "react";
import IconCustome from "../icon/IconCustome";

const GroupButton = () => {
  return (
    <div className="group-btn flex-center-vertical">
      <IconCustome
        nameIcon="material-symbols:share"
        color="blue"
        className={"back-shaddow"}
      />
      <IconCustome
        nameIcon="material-symbols:mail"
        color="black"
        className={"box-shaddow"}
      />
      <IconCustome
        nameIcon="bx:support"
        color="black"
        className={"box-shaddow"}
      />
    </div>
  );
};

export default GroupButton;
