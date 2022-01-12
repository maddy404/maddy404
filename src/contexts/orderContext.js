import { createContext, useContext, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orderID, setOrderID] = useState();
  const [orderInfo, setOrderInfo] = useState();
  const [selectReturnItem, setSelectReturnItem] = useState("");
  const [isSelected, setIsSelected] = useState();

  return (
    <OrderContext.Provider
      value={{
        orderID,
        setOrderID,
        orderInfo,
        setOrderInfo,
        selectReturnItem,
        setSelectReturnItem,
        isSelected,
        setIsSelected,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
export const useOrderContext = () => {
  return useContext(OrderContext);
};
