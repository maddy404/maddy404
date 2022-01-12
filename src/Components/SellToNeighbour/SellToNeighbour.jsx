import React from "react";

export const SellToNeighbour = () => {
  return (
    <main className="p9 choose">
      <div className="container">
        <div className="row justify-content-center row__title">
          {/* <a href="./reason.html" className="btn__small-screen back-page">
            <svg className="btn__icon">
              <use xlink:href="../svg/sprite.svg#chevron-left"></use>
            </svg>
          </a> */}
          <div className="col-12">
            <h1 className="p9 __title title">
              Awesome! You are our climate warrior
            </h1>
            <p className="p9__desc description">
              We will add 3 days to your return period
            </p>
          </div>
        </div>
        <div className="row justify-content-center choose__row p9__row">
          <div className="col-12  col-md-7 col-lg-4 ">
            <div className="p9__card">
              <div className="p9__circle circle">
                <p className="circle__text">
                  10<span className="symbol">$</span>
                </p>
              </div>
              <p className="p9__card-text">
                Get store credits when someone buys the product
              </p>
            </div>
          </div>
          <div className="col-12 col-md-7 col-lg-4  ">
            <div className="p9__card">
              <div className="p9__circle circle">
                <p className="circle__text">
                  90<span className="symbol">$</span>
                </p>
              </div>
              <p className="p9__card-text">Get max value for your product</p>
            </div>
          </div>
          <div className="col-12  col-md-7 col-lg-4  ">
            <div className="p9__card">
              <div className="p9__circle circle">
                {/* <svg className="circle__icon">
                  <use xlink:href="../svg/sprite.svg#reduse"></use>
                </svg> */}
              </div>
              <p className="p9__card-text">
                Save landfils by promoting product reuse
              </p>
            </div>
          </div>
        </div>

        <div className="row btns">
          <div className="col-12">
            <p className="btn__desc description">
              By clicking continue you accept that this product is usable
            </p>
          </div>
          <div className="col-6 col-md-4 col-lg-3 col-xl-2 btn__big-screen">
            <a href="./reason.html" className="btn btn__back back-page">
              Back
            </a>
          </div>
          <div className="col-12 col-md-4 col-lg-3 col-xl-2">
            <button type="button" className="btn btn__continue button">
              Resell
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
