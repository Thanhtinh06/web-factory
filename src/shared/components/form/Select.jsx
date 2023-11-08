import React from "react";
import OptionSelect from "./Option";

const Select = ({ name, className, listOption = [] }) => {
  const renderListOption = () => {
    return listOption.map(({ lable, value }) => {
      return <OptionSelect lable={lable} value={value} key={value} />;
    });
  };

  return (
    <select id={name} name={name} className={className}>
      {renderListOption()}
    </select>
  );
};

export default Select;
