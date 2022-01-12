import React, { useState, useEffect } from "react";
import { BackContinue, HeaderText } from "../";
import { useOrderContext } from "../../contexts";
export const UploadImg = () => {
  const [showAddMore, setShowAddMore] = useState(false);
  const [imgID, setImgID] = useState([]);
  const { setIsSelected } = useOrderContext();
  const imageUpload = [
    {
      id: 1,
      imgURL: "assets/defect1.webp",
    },
    {
      id: 2,
      imgURL: "assets/defect2.webp",
    },
    {
      id: 3,
      imgURL: "assets/defect3.webp",
    },
    {
      id: 4,
      imgURL: "assets/defect4.webp",
    },
  ];

  const imgIDHandler = (imageID) => {
    if (imgID?.length) {
      //Adding Unique Item
      if (!imgID.includes(imageID)) {
        setImgID((imgID) => {
          return [...imgID, imageID];
        });
      } else {
        //Delete item
        const filterID = imgID.filter((imgID) => imgID !== imageID);
        setImgID(filterID);
      }
    } else {
      //First Time Adding
      setImgID((imgID) => {
        return [...imgID, imageID];
      });
    }
  };

  const removeImgHandler = (imageID) => {
    if (imgID?.length) {
      //Delete item
      console.log(imageID, imgID);
      const filterID = imgID.filter((imgID) => imgID !== imageID);
      console.log(filterID);
      setImgID(filterID);
    }
  };

  useEffect(() => {
    imgID?.length > 0 ? setIsSelected(true) : setIsSelected(false);
    imgID.length === 0 && setShowAddMore(false);
    console.log("length", imgID.length);
  }, [imgID, setIsSelected]);

  return (
    <main className="photo">
      <div className="container">
        <div className="row justify-content-center row__title">
          <div className="col-10 col-sm-12">
            <HeaderText text="Upload an image of the" extraText="tag" />
          </div>
        </div>
        <div className="row   justify-content-center photo__row">
          {imageUpload?.slice(0, imgID?.length).map((img) => {
            return (
              <div
                className={`photo__card col-6 col-md-5 col-xl-3 photo__one ${
                  showAddMore ? "" : "d-none"
                }`}
                key={img.id}
              >
                <img
                  src={img.imgURL}
                  className="photo__card_add"
                  alt="photo_container"
                />
                <span
                  className="photo__card_delete"
                  onClick={() => {
                    setShowAddMore(true);
                  }}
                >
                  <img
                    src="assets/svg/delete.svg"
                    alt="close"
                    className="photo__card_icon"
                    onClick={() => removeImgHandler(img.id)}
                  />
                </span>
                <div className="photo__load" style={{ zIndex: "-1" }}>
                  <p className="photo__load_text">Uploading your files</p>
                  <div className="photo__load_line">
                    <span
                      className="photo__load_progress"
                      style={{ width: "100%" }}
                    ></span>
                  </div>
                </div>
              </div>
            );
          })}
          <div
            className={`photo__card col-12 col-md-5 col-xl-3 photo__btn ${
              showAddMore ? "" : "d-none"
            }`}
          >
            <a href="#photoModal" className="photo__add call_table">
              <img src="assets/svg/plus.svg" alt="add more" />
              <p className="photo__more">Аdd More</p>
            </a>
          </div>
          <div
            className={`photo__card col-6 col-md-5 col-xl-3 photo__one ${
              showAddMore ? "d-none" : ""
            }`}
          >
            <a href="#photoModal">
              <div className="photo__empty call_table">
                <img src="assets/svg/photo-icon.svg" alt="camera" />
              </div>
            </a>
          </div>
        </div>
        <BackContinue navigateTo="/return" backTo="/reason" />
      </div>

      <div className="photo__modal" id="photoModal">
        <div className="photo__modal_text">
          <a
            href="#close"
            onClick={() => {
              setShowAddMore(true);
            }}
          >
            <img
              src="assets/svg/close_black.svg"
              alt="close"
              className="photo__modal_close"
            />
          </a>
          <h3 className="photo__modal_title">Add photo</h3>
        </div>
        <div className="photo__table">
          {imageUpload.map((image) => {
            return (
              <div
                className="photo__table_item"
                key={image.id}
                onClick={() => imgIDHandler(image.id)}
              >
                <img
                  src={image.imgURL}
                  alt="defect"
                  className={`photo__table_img ${
                    imgID.includes(image.id) && "active"
                  }`}
                />
                <span className="photo__table_choose">
                  <img src="assets/svg/checkbox_white.svg" alt="choose" />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};
