import { useEffect, useState } from "react";
import { useOrderContext } from "../contexts";
import axios from "axios";

export const useReturn = () => {
  const { selectReturnItem, setSelectReturnItem } = useOrderContext();

  const returnHandler = () => {
    console.log(selectReturnItem);
  };

  //   useEffect(() => {
  //     console.log(selectReturnItem);
  //   }, [selectReturnItem]);

  return { returnHandler };
};
