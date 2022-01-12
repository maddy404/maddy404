import React, { useState, useEffect } from "react";
import { useReturn } from "../../hooks";
import { useOrderContext } from "../../contexts";
import { BackContinue, HeaderText } from "../";
import { ArrowLeft } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./order.module.css";
export const ItemGrid = () => {
  const { orderInfo, setSelectReturnItem, selectReturnItem, setIsSelected } =
    useOrderContext();

  const { returnHandler } = useReturn();
  const navigate = useNavigate();
  const selectHandler = (id) => {
    // setIsSelected(true)
  };

  console.log(selectReturnItem);

  useEffect(() => {
    selectReturnItem ? setIsSelected(true) : setIsSelected(false);
  }, [selectReturnItem]);

  return (
    <main className="items">
      <div className="container">
        <div className="row  row__title ">
          <HeaderText text="Select items you want to return" />
        </div>
        <div className="items__content ">
          <div className="items__left">
            <div className="items__left-wrapper">
              {orderInfo?.ItemDetails.map((item) => {
                return (
                  <div
                    className={`items__card card  ${
                      selectReturnItem === item.id && "show active"
                    } `}
                    key={item.id}
                    onClick={() => {
                      selectReturnItem === item.id
                        ? setSelectReturnItem(null)
                        : setSelectReturnItem(item.id);
                    }}
                  >
                    <span className="card__target">
                      <img src="assets/svg/checkbox.svg" alt="choose" />
                    </span>
                    <div className="card__pic">
                      <img
                        src={item.imgUrl}
                        alt={item.name}
                        className={styles.card__img}
                      />
                    </div>
                    <div className="card__info">
                      <h2 className={styles.card__title}>
                        {item.name}
                        <span className={styles.card__br}>{item.tags}</span>
                      </h2>
                      <p className={styles.card__new_price}>
                        {item.currency}
                        {item.price}
                      </p>
                      <p className={styles.card__old_price}>$199,00</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <BackContinue navigateTo="/reason" backTo="/" />
      </div>
    </main>
  );
};
