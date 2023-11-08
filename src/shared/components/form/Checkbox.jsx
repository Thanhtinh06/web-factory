import React from "react";

const Checkbox = ({ id, name, value }) => {
  return (
    <div className="checkbox">
      <input type="checkbox" id={id} name={id} defaultValue={value}></input>
      <label htmlFor={id}>{name}</label>
    </div>
  );
};

export default Checkbox;
