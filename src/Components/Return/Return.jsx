import React, { useState, useEffect } from "react";
import { ArrowLeft } from "react-bootstrap-icons";
import { BackContinue, HeaderText } from "../";
import { useOrderContext } from "../../contexts";
export const Return = () => {
  const [isTextArea, setIsTextArea] = useState(false);
  const [reasonID, setReasonID] = useState();
  const [reasonText, setReasonText] = useState("");
  const [changeRoute, setChangeRoute] = useState("");
  const reason = [
    {
      id: "1",
      reason: "Item is defective",
    },
    {
      id: "2",
      reason: "Fitment issues",
    },
    {
      id: "3",
      reason: `Don't like/need`,
    },
    {
      id: "4",
      reason: `Fitment issues`,
    },
  ];
  const { setIsSelected } = useOrderContext();

  useEffect(() => {
    if (reasonText === "Item is defective") {
      setChangeRoute("/photo");
    } else if (reasonText === "") {
      setChangeRoute("/reason");
    } else {
      setChangeRoute("/return");
    }
  }, [reasonText]);

  const showOtherReason = () => {
    // isTextArea ? setIsTextArea(false) : setIsTextArea(true);
    setIsTextArea(false);
    console.log(isTextArea);
  };

  return (
    <main className="reason">
      <div className="container">
        <div className="row justify-content-center row__title">
          {/* <a href="/item" className="btn__small-screen">
            <ArrowLeft color="royalblue" size={24} />
          </a> */}
          <HeaderText text="Select the reason of your return" />
        </div>
        <div className="row justify-content-center">
          {reason.map((item, index) => {
            return (
              <div className="col-12 col-sm-6 col-lg-5 col-xl-3 " key={index}>
                <label
                  className={`reason__label ${
                    reasonID === item.id && "active"
                  }`}
                  data-location="location1"
                  onClick={() => {
                    setIsSelected(true);
                    setReasonID(item.id);
                  }}
                >
                  {item.reason}
                  <input
                    className="reason__input"
                    type="radio"
                    name="reason"
                    onChange={() => setReasonText(item.reason)}
                  />
                  <span className="reason__input_circle"></span>
                </label>
              </div>
            );
          })}
          <div className="col-12 col-lg-10 col-xl-12">
            <label
              className="reason__label other show"
              data-location="location5"
              onClick={() => setIsTextArea(true)}
            >
              Other
              <img
                src="assets/svg/close.svg"
                alt="close"
                onClick={(e) => {
                  e.stopPropagation();
                  showOtherReason();
                }}
                className={`${
                  isTextArea ? "other__close show" : "other__close"
                }`}
              />
              <textarea
                className={`${
                  isTextArea ? "other__textarea show" : "other__textarea"
                }`}
                placeholder="Write your version"
                onChange={(e) => {
                  setIsSelected(e.target.value.length > 0);
                }}
              ></textarea>
            </label>
          </div>
          {/* <div
            className="col-12 col-lg-10 col-xl-12"
            onClick={() => {
              setIsTextArea(!isTextArea);
            }}
          >
            <div className="reason__label other show">
              <div> Other</div>
              {isTextArea && (
                <div className="d-flex justify-content-around w-100">
                  <textarea
                    className="other__textarea w-100"
                    placeholder="Write your version"
                  ></textarea>
                  <button
                    type="button"
                    class="btn-close"
                    aria-label="Close"
                  ></button>
                </div>
              )}
            </div>
          </div> */}
        </div>

        <BackContinue navigateTo={changeRoute} backTo="/items" />
      </div>
    </main>
  );
};
