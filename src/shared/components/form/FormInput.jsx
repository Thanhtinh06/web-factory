import React from "react";

const FormInput = ({ type, placeholder, className, value = "" }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      defaultValue={value}
    />
  );
};

export default FormInput;
