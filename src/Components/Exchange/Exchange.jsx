import React from "react";
import { ArrowLeft } from "react-bootstrap-icons";
export const Exchange = () => {
  return (
    <main className="option choose">
      <div className="container ">
        <div className="option__row">
          <div className="option__wrapper">
            <div className="row__title">
              <a href="./photo.html" className="btn__small_screen back-page">
                {/* <svg className="btn__icon">
                                    <use
                                        xlink:href="../svg/sprite.svg#chevron-left"></use>
                                </svg> */}
              </a>
              <h1 className="option__title title">Exchange option</h1>
              <p className="option__desc description">
                Available credit $50 + $10 bonus for size M
              </p>
            </div>
            <div className="option__panel">
              <div className="swiper thumbSwiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <a href="#!" className="option__tab option__variants ">
                      Other variants
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#!" className="option__tab option__items">
                      Other items (<span className="option__tab_num">100+</span>
                      )
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper optionSwiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide slide-color">
                  <h2 className="option__subtitle">
                    Exchange for new color or size
                  </h2>
                  <div className="option__colors">
                    <span className="option__name">Color</span>
                    <div className="option__choise">
                      <input
                        type="radio"
                        name="color"
                        className="option__choise_radio"
                        id="color-1"
                        checked
                      />
                      <label
                        for="color-1"
                        className="option__choise_label label__color"
                      >
                        <span
                          className="option__choise_circle"
                          data-color="#D94036"
                        >
                          <span className="option__choise_ring"></span>
                        </span>
                      </label>
                      <input
                        type="radio"
                        name="color"
                        className="option__choise_radio"
                        id="color-2"
                      />
                      <label
                        for="color-2"
                        className="option__choise_label
                                                label__color"
                      >
                        <span
                          className="option__choise_circle"
                          data-color="#40D97D"
                        >
                          <span className="option__choise_ring"></span>
                        </span>
                      </label>
                      <input
                        type="radio"
                        name="color"
                        className="option__choise_radio"
                        id="color-3"
                      />
                      <label
                        for="color-3"
                        className="option__choise_label
                                                label__color"
                      >
                        <span
                          className="option__choise_circle"
                          data-color="#3664D9"
                        >
                          <span className="option__choise_ring"></span>
                        </span>
                      </label>
                      <input
                        type="radio"
                        name="color"
                        className="option__choise_radio"
                        id="color-4"
                      />
                      <label
                        for="color-4"
                        className="option__choise_label
                                                label__color"
                      >
                        <span
                          className="option__choise_circle"
                          data-color="#7140D9"
                        >
                          <span className="option__choise_ring"></span>
                        </span>
                      </label>
                      <input
                        type="radio"
                        name="color"
                        className="option__choise_radio"
                        id="color-5"
                      />
                      <label
                        for="color-5"
                        className="option__choise_label
                                                label__color"
                      >
                        <span
                          className="option__choise_circle"
                          data-color="#D9A136"
                        >
                          <span className="option__choise_ring"></span>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="option__size">
                    <span className="option__name">Size</span>
                    <div className="option__choise">
                      <input
                        type="radio"
                        name="size"
                        className="option__choise_radio"
                        id="size-1"
                      />
                      <label
                        for="size-1"
                        className="option__choise_label
                                                label__size"
                      >
                        <span className="option__choise_square">M</span>
                      </label>
                      <input
                        type="radio"
                        name="size"
                        className="option__choise_radio"
                        id="size-2"
                      />
                      <label
                        for="size-2"
                        className="option__choise_label
                                                label__size"
                      >
                        <span className="option__choise_square">S</span>
                      </label>
                      <input
                        type="radio"
                        name="size"
                        className="option__choise_radio"
                        id="size-3"
                      />
                      <label
                        for="size-3"
                        className="option__choise_label
                                                label__size"
                      >
                        <span className="option__choise_square">L</span>
                      </label>
                      <input
                        type="radio"
                        name="size"
                        className="option__choise_radio"
                        id="size-4"
                      />
                      <label
                        for="size-4"
                        className="option__choise_label
                                                label__size"
                      >
                        <span className="option__choise_square">XL</span>
                      </label>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn
                                        btn__continue button"
                    id="color-btn"
                  >
                    Continue
                  </button>
                </div>
                <div className="swiper-slide slide-other">
                  <div className="option__items_content">
                    <div className="option__items_card">
                      <div className="option__items_picture">
                        <img
                          src="assets/wear1.webp"
                          alt="wear-1"
                          className="option__items_img"
                        />
                      </div>
                      <div className="option__items_info">
                        <h3 className="option__items_title">
                          Classic fit plaid oxford shirt
                        </h3>
                        <div className="option__price">
                          <span className="option__price_new">$31.05</span>
                          <span className="option__price_old">$35.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="option__items_card">
                      <div className="option__items_picture">
                        <img
                          src="assets/wear1.webp"
                          alt=""
                          className="option__items_img"
                        />
                      </div>
                      <div className="option__items_info">
                        <h3 className="option__items_title">
                          Classic fit plaid oxford shirt
                        </h3>
                        <div className="option__price">
                          <span className="option__price_new">$31.05</span>
                          <span className="option__price_old">$35.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn
                                        btn__continue button"
                    id="other-btn"
                  >
                    See All
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="option__right">
            <div className="option__screen">
              <ul className="option__list">
                <li className="option__list_item active">
                  <img
                    src="assets/wear1.webp"
                    alt="wear-1"
                    className="option__list_img"
                    id="targetImg1"
                  />
                </li>
                <li className="option__list_item">
                  <img
                    src="assets/wear2.webp"
                    alt="wear-2"
                    className="option__list_img"
                    id="targetImg2"
                  />
                </li>
                <li className="option__list_item">
                  <img
                    src="assets/wear3.webp"
                    alt="wear-3"
                    className="option__list_img"
                    id="targetImg3"
                  />
                </li>
              </ul>
              <div className="option__target">
                <img
                  src="assets/wear1.webp"
                  alt="target"
                  className="option__target-img"
                />
              </div>
            </div>
            <div className="option__advert advert">
              <h2 className="advert__title">Available credit</h2>
              <div className="advert__item">
                <p className="advert__price">
                  $<span className="advert__price_value">50</span>
                </p>
                <p className="advert__size">
                  Size <span className="advert__size_value">M</span>
                </p>
              </div>
              <p className="advert__bonus">
                +$ <span className="advert__bonus_value">10</span> Bonus
              </p>
              <img
                src="assets/sbg.webp"
                className="advert__bg-img"
                alt="advert-big-img"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
