import React from "react";
import { Button } from "..";
import { useOrderContext } from "../../contexts";
import { useNavigate } from "react-router-dom";
export const BackContinue = ({ navigateTo, backTo }) => {
  const { selectReturnItem, isSelected } = useOrderContext();
  const navigate = useNavigate();
  const navigateHandler = (decision) => {
    decision === "back" ? navigate(backTo) : navigate(navigateTo);
  };

  return (
    // <div className="row d-flex justify-content-center mt-5">
    //   <div className="col-6 col-md-4 col-lg-3 col-xl-2">
    //     <Button
    //       name="Back"
    //       moduleClass="btn__back"
    //       bsClass="w-100"
    //       disabled={false}
    //       onClick={() => navigateHandler("back")}
    //     />
    //   </div>
    //   <div className="col-6 col-md-4 col-lg-3 col-xl-2">
    //     <Button
    //       name="Continue"
    //       moduleClass={selectReturnItem && "btn__continue"}
    //       bsClass="w-100"
    //       disabled={selectReturnItem ? "" : ""}
    //       onClick={() => navigateHandler("continue")}
    //     />
    //   </div>
    // </div>
    <div className="row btns">
      <div
        className="col-6 col-md-4 col-lg-3 col-xl-2
    btn__big_screen"
      >
        <Button
          name="Back"
          moduleClass="btn__back btn__back__bg"
          bsClass="w-100"
          disabled={false}
          onClick={() => navigateHandler("back")}
        />
      </div>
      <div className="col-ltl-12 col-12 col-md-4 col-lg-3 col-xl-2">
        <Button
          name="Continue"
          moduleClass={isSelected && "btn__continue"}
          bsClass="w-100"
          disabled={isSelected ? "" : " "}
          onClick={() => navigateHandler("continue")}
        />
      </div>
    </div>
  );
};
