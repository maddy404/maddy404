import React from "react";
export const Button = ({
  name,
  onClick,
  disabled = "x",
  moduleClass,
  bsClass,
}) => {
  return (
    <button
      // type="submit"
      className={` form__btn ${
        disabled && "form__btn__disabled"
      }  ${moduleClass} ${bsClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {name}
    </button>
  );
};
