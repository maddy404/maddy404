import React from "react";
export const HeaderText = ({ text, extraText }) => {
  return (
    <div className="col-12">
      <h1 className="items__title title">
        {text}&nbsp;<span className="text-danger">{extraText}</span>
      </h1>
    </div>
  );
};
