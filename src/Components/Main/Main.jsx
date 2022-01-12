import React from "react";
import { Form } from "../";
export const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__content">
          <div className="main__text">
            <div className="main__logo">
              <img
                src="assets/logo.webp"
                alt="logo"
                className="main__logo_mg"
              />
            </div>
            <h1 className="main__title">Return & Exchange</h1>
            <p className="main__description">
              Portal of return and exchange of goods, substances and clothes. If
              you want to return or exchange an item, fill out the form
            </p>
          </div>

          <Form />
          <div className="main__logo_2">
            <img
              src="assets/logo-2.webp"
              alt="logo-2"
              className="main__logo_img"
            />
          </div>
        </div>
      </div>
      <img src="assets/svg/big_logo.svg" alt="info" className="main__bg_logo" />
    </main>
  );
};
