import React, { useState, useEffect } from "react";
import axios from "axios";
import { useOrderContext } from "../contexts";

export const useFetchItems = () => {
  const { setOrderInfo, orderInfo } = useOrderContext();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("data.json");
        // const result = response.data.ordersDetail;
        // if (!orderID) {
        //   setOrderID(localStorage.getItem("orderID"));
        // }
        const orderID = localStorage.getItem("orderNo");
        console.log({ orderID });
        const result = response.data.ordersDetail.find(
          (orderInfo) => orderInfo.orderID === orderID
        );
        console.log("13", result);
        setOrderInfo(result);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return { orderInfo };
};
