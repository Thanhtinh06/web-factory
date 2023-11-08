import React from "react";
import { ReactComponent as HamIcon } from "./../../assets/ham.svg";
import { ReactComponent as IconGameLoft } from "./../../assets/iconGameloft.svg";
import { ReactComponent as TextGameLoft } from "./../../assets/game.svg";
import IconCustome from "../../components/icon/IconCustome";

const Header = () => {
  return (
    <nav className="flex-between">
      <div className="flex-between width-20">
        <div className="flex-between logo">
          <IconGameLoft />
          <TextGameLoft />
        </div>
        <IconCustome nameIcon="material-symbols:share" color="gray" />
      </div>
      <div className="menu">
        <HamIcon />
      </div>
    </nav>
  );
};

export default Header;
