import React, { useState, useEffect } from "react";
import { HeaderText, BackContinue } from "../";
import { useOrderContext } from "../../contexts";
export const ReturnOptions = () => {
  const [option, setOption] = useState();
  const { setIsSelected } = useOrderContext();
  const [changeRoute, setChangeRoute] = useState("");
  const returnOptions = [
    {
      id: "1",
      option: "Exchange Item",
      desc: [
        {
          id: "1",
          iconURL: "assets/svg/coins.svg",
          info: "Up to 110% at no additional cost",
        },
      ],
    },
    {
      id: "2",
      option: "Sell it to neighbour at discount",
      desc: [
        {
          id: "1",
          iconURL: "assets/svg/floppy-disk.svg",
          info: "Save 2 kg of CO2 emission",
        },
        {
          id: "2",
          iconURL: "assets/svg/cards.svg",
          info: "Get $5 as store credit",
        },
        {
          id: "3",
          iconURL: "assets/svg/return.svg",
          info: "Get 3 days of return extension",
        },
      ],
    },
    {
      id: "3",
      option: "Get a refund",
      desc: [
        { id: "1", iconURL: "assets/svg/calendar.svg", info: "Takes 5-7 days" },
      ],
    },
  ];

  useEffect(() => {
    console.log(typeof option);
    if (option === "1") {
      setChangeRoute("/exchange");
      console.log(changeRoute);
    } else if (option === "2") {
      setChangeRoute("/neighbour");
    } else {
      setChangeRoute("/refund");
    }
  }, [option]);
  return (
    <main className="p6">
      <div className="container">
        <div className="row justify-content-center row__title">
          <HeaderText text="What would you like to do?" />
        </div>
        <div className="justify-content-between p6__row  cursor-pointer">
          {returnOptions.map((items) => {
            return (
              <div
                className={` ${
                  option === items.id ? "choose__card active" : "choose__card"
                }`}
                data-location="location1"
                key={items.id}
                onClick={() => {
                  setOption(items.id);
                  setIsSelected(true);
                }}
              >
                <h2 className="choose__card_title">{items.option}</h2>
                <ul className="choose__list">
                  {items.desc.map((item) => {
                    return (
                      <li className="choose__item" key={item.id}>
                        <span className="choose__sign">
                          <img
                            src={item.iconURL}
                            className="choose__icon"
                            alt="coins"
                          />
                        </span>
                        <span className="choose__item_text">{item.info}</span>
                      </li>
                    );
                  })}
                </ul>
                <label className="p6__label">
                  <input className="choose__input" type="radio" name="choose" />
                  <span className="choose__input_circle big"></span>
                </label>
              </div>
            );
          })}
        </div>
        <BackContinue navigateTo={changeRoute} backTo="/reason" />
      </div>
    </main>
  );
};
