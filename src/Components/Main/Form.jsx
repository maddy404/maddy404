import React from "react";
import { useValidateOrder } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { Button } from "..";

export const Form = () => {
  const { update, errorMsg, isError, isBtnDisabled, orderNo } =
    useValidateOrder();

  const navigate = useNavigate();
  const buttonHandler = () => {
    localStorage.setItem("orderNo", orderNo);
    navigate(`/items`);
  };

  return (
    <form action="" className="main__form form">
      <h2 className="form__title">
        <span className="form__span">Get started</span> Return & Exchange
      </h2>
      <label className="form__label">
        <input
          type="number"
          className="form__inp form__order"
          placeholder="Order number"
          name="orderNo"
          onChange={(e) => {
            update(e);
          }}
          required
        />
        {/* <span className="form__valid_num">Invalid order number</span> */}
        <img src="assets/svg/sprite.svg#info" className="form__info" alt="" />
        {/* <span className="form__info_hover">{errorMsg}</span> */}
        <span className="errorMsg">{isError && errorMsg}</span>
      </label>
      <label className="form__label">
        <input
          type="text"
          className="form__inp form__auth"
          placeholder="E-mail/Phone/Zipcode"
          name="emailPhoneZipCode"
          onChange={(e) => {
            update(e);
          }}
          required
        />
        {/* <span className="form__valid_email">
          Invalid E-mail or Phone or Zipcode
        </span> */}
      </label>

      <Button
        name="Continue"
        onClick={buttonHandler}
        disabled={isBtnDisabled}
      />
    </form>
  );
};
