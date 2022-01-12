import React from "react";

export const GetRefund = () => {
  return (
    <main className="p12  ">
      <div className="container">
        <div className="row justify-content-center row__title">
          {/* <a href="./photo.html" className="btn__small-screen back-page">
                <svg className="btn__icon">
                    <use xlink:href="../svg/sprite.svg#chevron-left"></use>
                </svg>
            </a> */}
          <div className="col-12">
            <h1 className="p6__title title">Return options</h1>
          </div>
        </div>
        <div className="justify-content-lg-between justify-content-center p14__row p6__row">
          <div className="choose__card">
            <h2 className="choose__card-title">Keep the item, shop now</h2>
            <p className="choose__text">
              {/* <svg className="p12__icon">
                            <use xlink:href="../svg/sprite.svg#choose"></use>
                        </svg>  */}
              Get $20 instant store credit
            </p>
            <label className="p6__label">
              <input className="choose__input" type="radio" name="choose" />
              <span className="choose__input-circle big "></span>
            </label>
          </div>

          <div className="choose__card">
            <h2 className="choose__card-title">Keep the item, shop later</h2>
            <p className="choose__text">
              {/* <svg className="p12__icon">
                            <use xlink:href="../svg/sprite.svg#choose"></use>
                        </svg>  */}
              Get $15 as store credit
            </p>
            <label className="p6__label">
              <input className="choose__input" type="radio" name="choose" />
              <span className="choose__input-circle big"></span>
            </label>
          </div>
          <div className="choose__card">
            <h2 className="choose__card-title">Get a refund</h2>
            <p className="choose__text">
              {/* <svg className="p12__icon">
                            <use xlink:href="../svg/sprite.svg#choose"></use>
                        </svg>  */}
              Request a label. Takes 5-7 days Once item is received
            </p>
            <label className="p6__label">
              <input className="choose__input" type="radio" name="choose" />
              <span className="choose__input-circle big"></span>
            </label>
          </div>
        </div>
        <div className="row btns">
          <div className="col-6 col-md-4 col-lg-3 col-xl-2 btn__big-screen">
            <a href="./photo.html" className="btn btn__back back-page">
              Back
            </a>
          </div>
          <div className="col-12 col-md-4 col-lg-3 col-xl-2">
            <button type="button" className="btn btn__continue button" disabled>
              continue
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
